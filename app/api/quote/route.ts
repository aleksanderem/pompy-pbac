// Environment variables:
// RESEND_API_KEY — Resend API key for sending emails
// PBAC_EMAIL — destination email address (optional, defaults to kontakt@pbac.pl)

import { Resend } from "resend";
import { NextResponse } from "next/server";

function getResend() {
  return new Resend(process.env.RESEND_API_KEY);
}

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

function buildEmailHtml(data: QuoteFormData): string {
  const row = (label: string, value: string) =>
    `<tr><td style="padding:8px 12px;font-weight:600;color:#1A337F;border-bottom:1px solid #eee;">${label}</td><td style="padding:8px 12px;border-bottom:1px solid #eee;">${value || "—"}</td></tr>`;

  return `
    <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;">
      <div style="background:linear-gradient(115deg,#1A337F 0%,rgba(179,24,83,0.78) 100%);padding:24px 32px;border-radius:12px 12px 0 0;">
        <h1 style="color:#fff;margin:0;font-size:22px;">Nowe zapytanie o pompę ciepła</h1>
      </div>
      <div style="padding:24px 32px;background:#fff;border:1px solid #eee;border-top:none;border-radius:0 0 12px 12px;">
        <h2 style="color:#1A337F;font-size:16px;margin:0 0 12px;">Informacje o budynku</h2>
        <table style="width:100%;border-collapse:collapse;margin-bottom:24px;">
          ${row("Typ budynku", BUILDING_LABELS[data.buildingType] || data.buildingType)}
          ${row("Powierzchnia", data.area ? `${data.area} m²` : "—")}
          ${row("Liczba pięter", data.floors)}
        </table>

        <h2 style="color:#1A337F;font-size:16px;margin:0 0 12px;">Ogrzewanie i izolacja</h2>
        <table style="width:100%;border-collapse:collapse;margin-bottom:24px;">
          ${row("Obecne ogrzewanie", HEATING_LABELS[data.currentHeating] || data.currentHeating)}
          ${row("Jakość izolacji", INSULATION_LABELS[data.insulation] || data.insulation)}
        </table>

        <h2 style="color:#1A337F;font-size:16px;margin:0 0 12px;">Preferencje</h2>
        <table style="width:100%;border-collapse:collapse;margin-bottom:24px;">
          ${row("Preferowana marka", BRAND_LABELS[data.preferredBrand] || data.preferredBrand || "Nie wybrano")}
          ${row("Dodatkowe informacje", data.additionalInfo || "Brak")}
        </table>

        <h2 style="color:#1A337F;font-size:16px;margin:0 0 12px;">Dane kontaktowe</h2>
        <table style="width:100%;border-collapse:collapse;">
          ${row("Imię i nazwisko", data.name)}
          ${row("Telefon", data.phone)}
          ${row("E-mail", data.email)}
          ${row("Miasto", data.city)}
        </table>
      </div>
    </div>
  `;
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

    await getResend().emails.send({
      from: "PBAC Wycena <onboarding@resend.dev>",
      to: process.env.PBAC_EMAIL || "kontakt@pbac.pl",
      subject: `Nowe zapytanie o pompę ciepła — ${data.name}`,
      html: buildEmailHtml(data),
    });

    return NextResponse.json({
      success: true,
      message: "Zapytanie zostało wysłane",
    });
  } catch {
    return NextResponse.json(
      { success: false, message: "Wewnętrzny błąd serwera" },
      { status: 500 }
    );
  }
}
