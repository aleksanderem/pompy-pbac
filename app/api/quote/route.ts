import { Resend } from "resend";
import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const resend = new Resend(process.env.RESEND_API_KEY);

const RECIPIENTS = [
  "klimatyzacjabrzezinski@gmail.com",
  "aleksander@kolaboit.pl",
];

interface QuoteFormData {
  buildingType: string;
  area: string;
  floors: string;
  currentHeating: string;
  insulation: string;
  preferredBrand: string;
  additionalInfo: string;
  name: string;
  phone: string;
  email: string;
  city: string;
  consent: boolean;
}

const BUILDING_LABELS: Record<string, string> = {
  dom: "Dom jednorodzinny",
  mieszkanie: "Mieszkanie",
  biuro: "Biuro",
  inny: "Inny",
};

const HEATING_LABELS: Record<string, string> = {
  gaz: "Gaz ziemny",
  olej: "Olej opałowy",
  wegiel: "Węgiel",
  elektryczne: "Elektryczne",
  brak: "Brak / nowy budynek",
  inne: "Inne",
};

const INSULATION_LABELS: Record<string, string> = {
  dobra: "Dobra (po termomodernizacji)",
  srednia: "Średnia",
  slaba: "Słaba (stary budynek)",
  "nie-wiem": "Nie wiem",
};

const BRAND_LABELS: Record<string, string> = {
  samsung: "Samsung EHS Mono R290",
  mitsubishi: "Mitsubishi Heavy Hydrolution",
  fujitsu: "Fujitsu Waterstage",
  neoheat: "Neoheat",
  pomoz: "Pomóż mi wybrać",
};

function validate(data: QuoteFormData): string[] {
  const errors: string[] = [];
  if (!data.name || data.name.trim().length < 2) {
    errors.push("Imię i nazwisko jest wymagane (min. 2 znaki)");
  }
  if (!data.phone) {
    errors.push("Numer telefonu jest wymagany");
  }
  if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.push("Podaj poprawny adres e-mail");
  }
  if (!data.consent) {
    errors.push("Wymagana zgoda na przetwarzanie danych");
  }
  return errors;
}

function getLogoBase64(): string {
  const logoPath = path.join(process.cwd(), "public", "images", "pbac-logo.png");
  const buffer = fs.readFileSync(logoPath);
  return buffer.toString("base64");
}

function buildEmailHtml(data: QuoteFormData): string {
  const row = (label: string, value: string) =>
    `<tr>
      <td style="padding:10px 16px;font-weight:600;color:#1A337F;border-bottom:1px solid #f0f0f0;width:40%;font-size:14px;">${label}</td>
      <td style="padding:10px 16px;border-bottom:1px solid #f0f0f0;color:#333;font-size:14px;">${value || "—"}</td>
    </tr>`;

  const sectionTitle = (title: string) =>
    `<h2 style="color:#1A337F;font-size:15px;margin:24px 0 8px;padding-bottom:6px;border-bottom:2px solid #B31853;display:inline-block;">${title}</h2>`;

  const building = BUILDING_LABELS[data.buildingType] || data.buildingType;
  const heating = HEATING_LABELS[data.currentHeating] || data.currentHeating;
  const insulation = INSULATION_LABELS[data.insulation] || data.insulation;
  const brand = BRAND_LABELS[data.preferredBrand] || data.preferredBrand || "Nie wybrano";

  return `<!DOCTYPE html>
<html lang="pl">
<head><meta charset="utf-8"></head>
<body style="margin:0;padding:0;background:#f5f5f5;font-family:Arial,Helvetica,sans-serif;">
  <div style="max-width:600px;margin:0 auto;background:#ffffff;border-radius:12px;overflow:hidden;margin-top:20px;margin-bottom:20px;box-shadow:0 2px 12px rgba(0,0,0,0.08);">

    <!-- Header with logo -->
    <div style="background:linear-gradient(115deg,#1A337F 0%,#B31853 100%);padding:28px 32px;text-align:center;">
      <img src="cid:pbac-logo" alt="PBAC" width="80" height="65" style="display:inline-block;margin-bottom:12px;" />
      <h1 style="color:#ffffff;margin:0;font-size:20px;font-weight:700;letter-spacing:0.5px;">Nowe zapytanie o wycenę</h1>
      <p style="color:rgba(255,255,255,0.8);margin:6px 0 0;font-size:13px;">Formularz ze strony pbac.pl</p>
    </div>

    <!-- Body -->
    <div style="padding:24px 32px 32px;">

      <!-- Quick summary -->
      <div style="background:#f8f9ff;border-left:4px solid #3D5EFF;padding:14px 18px;border-radius:0 8px 8px 0;margin-bottom:24px;">
        <p style="margin:0;color:#1A337F;font-size:14px;font-weight:600;">${data.name} z ${data.city || "—"}</p>
        <p style="margin:4px 0 0;color:#666;font-size:13px;">${building}, ${data.area ? data.area + " m²" : "—"} &bull; ${brand}</p>
      </div>

      ${sectionTitle("Budynek")}
      <table style="width:100%;border-collapse:collapse;">
        ${row("Typ budynku", building)}
        ${row("Powierzchnia", data.area ? `${data.area} m²` : "—")}
        ${row("Liczba pięter", data.floors)}
      </table>

      ${sectionTitle("Ogrzewanie i izolacja")}
      <table style="width:100%;border-collapse:collapse;">
        ${row("Obecne ogrzewanie", heating)}
        ${row("Jakość izolacji", insulation)}
      </table>

      ${sectionTitle("Preferencje")}
      <table style="width:100%;border-collapse:collapse;">
        ${row("Preferowana marka", brand)}
        ${row("Dodatkowe informacje", data.additionalInfo || "Brak")}
      </table>

      ${sectionTitle("Dane kontaktowe")}
      <table style="width:100%;border-collapse:collapse;">
        ${row("Imię i nazwisko", data.name)}
        ${row("Telefon", `<a href="tel:${data.phone}" style="color:#3D5EFF;text-decoration:none;">${data.phone}</a>`)}
        ${row("E-mail", `<a href="mailto:${data.email}" style="color:#3D5EFF;text-decoration:none;">${data.email}</a>`)}
        ${row("Miasto", data.city)}
      </table>

      <!-- CTA -->
      <div style="text-align:center;margin-top:28px;">
        <a href="tel:${data.phone}" style="display:inline-block;background:linear-gradient(115deg,#1A337F 0%,#B31853 100%);color:#ffffff;text-decoration:none;padding:12px 28px;border-radius:8px;font-size:14px;font-weight:600;">Zadzwoń do klienta</a>
      </div>
    </div>

    <!-- Footer -->
    <div style="background:#f8f8f8;padding:16px 32px;border-top:1px solid #eee;text-align:center;">
      <p style="margin:0;color:#999;font-size:11px;">Wiadomość wygenerowana automatycznie ze strony pbac.pl</p>
      <p style="margin:4px 0 0;color:#bbb;font-size:11px;">PBAC &mdash; Profesjonalny montaż i serwis pomp ciepła</p>
    </div>

  </div>
</body>
</html>`;
}

export async function POST(request: Request) {
  try {
    const data: QuoteFormData = await request.json();

    const errors = validate(data);
    if (errors.length > 0) {
      return NextResponse.json(
        { success: false, message: "Błąd walidacji", errors },
        { status: 400 }
      );
    }

    const logoBase64 = getLogoBase64();

    await resend.emails.send({
      from: "PBAC Wycena <pbac@kolabogroup.pl>",
      to: RECIPIENTS,
      replyTo: data.email,
      subject: `Nowe zapytanie — ${data.name}, ${data.city || "brak miasta"}`,
      html: buildEmailHtml(data),
      attachments: [
        {
          filename: "pbac-logo.png",
          content: logoBase64,
          contentType: "image/png",
          contentId: "pbac-logo",
        },
      ],
      headers: {
        "X-Entity-Ref-ID": `pbac-quote-${Date.now()}`,
      },
    });

    return NextResponse.json({
      success: true,
      message: "Zapytanie zostało wysłane",
    });
  } catch (err) {
    console.error("Quote form error:", err);
    return NextResponse.json(
      { success: false, message: "Wewnętrzny błąd serwera" },
      { status: 500 }
    );
  }
}
