"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { AuroraText } from "@/components/ui/aurora-text";
import { DotPattern } from "@/components/ui/dot-pattern";

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

const INITIAL_DATA: QuoteFormData = {
  buildingType: "",
  area: "",
  floors: "",
  currentHeating: "",
  insulation: "",
  preferredBrand: "",
  additionalInfo: "",
  name: "",
  phone: "",
  email: "",
  city: "",
  consent: false,
};

const STEP_LABELS = [
  "Twój budynek",
  "Obecne ogrzewanie",
  "Preferowana marka",
  "Dane kontaktowe",
];

function StepIndicator({ current, total }: { current: number; total: number }) {
  return (
    <div className="flex items-center justify-center gap-2 mb-8">
      {Array.from({ length: total }, (_, i) => (
        <div key={i} className="flex items-center gap-2">
          <div
            className={cn(
              "size-3 rounded-full transition-all duration-300",
              i === current
                ? "gradient-primary scale-125"
                : i < current
                  ? "bg-pbac-magenta/60"
                  : "bg-white/20"
            )}
          />
          {i < total - 1 && (
            <div
              className={cn(
                "h-px w-8 transition-colors duration-300",
                i < current ? "bg-pbac-magenta/60" : "bg-white/10"
              )}
            />
          )}
        </div>
      ))}
    </div>
  );
}

function FieldGroup({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <Label className="text-white/80">{label}</Label>
      {children}
    </div>
  );
}

const selectTriggerClass =
  "w-full bg-white/5 border-white/10 text-white hover:bg-white/10";
const selectContentClass = "bg-neutral-900 border-white/10";
const inputClass =
  "bg-white/5 border-white/10 text-white placeholder:text-white/40 hover:bg-white/10";

export default function QuoteForm() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState<QuoteFormData>(INITIAL_DATA);
  const [direction, setDirection] = useState(1);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errors, setErrors] = useState<string[]>([]);

  function update(fields: Partial<QuoteFormData>) {
    setFormData((prev) => ({ ...prev, ...fields }));
  }

  function validateStep(): string[] {
    const errs: string[] = [];
    if (step === 0) {
      if (!formData.buildingType) errs.push("Wybierz typ budynku");
      if (!formData.area) errs.push("Podaj powierzchnię");
      if (!formData.floors) errs.push("Wybierz liczbę pięter");
    } else if (step === 1) {
      if (!formData.currentHeating) errs.push("Wybierz obecne ogrzewanie");
      if (!formData.insulation) errs.push("Wybierz jakość izolacji");
    } else if (step === 3) {
      if (!formData.name || formData.name.length < 2)
        errs.push("Podaj imię i nazwisko (min. 2 znaki)");
      if (!formData.phone) errs.push("Podaj numer telefonu");
      if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
        errs.push("Podaj poprawny adres e-mail");
      if (!formData.consent)
        errs.push("Wymagana zgoda na przetwarzanie danych");
    }
    return errs;
  }

  function goNext() {
    const errs = validateStep();
    if (errs.length > 0) {
      setErrors(errs);
      return;
    }
    setErrors([]);
    setDirection(1);
    setStep((s) => s + 1);
  }

  function goBack() {
    setErrors([]);
    setDirection(-1);
    setStep((s) => s - 1);
  }

  async function handleSubmit() {
    const errs = validateStep();
    if (errs.length > 0) {
      setErrors(errs);
      return;
    }
    setErrors([]);
    setStatus("loading");
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <section id="wycena" className="relative py-20 px-4 overflow-hidden">
        <DotPattern
          width={18}
          height={18}
          cr={0.6}
          className="absolute inset-0 fill-pbac-magenta/[0.04] [mask-image:radial-gradient(500px_circle_at_center,white,transparent)]"
        />
        <div className="relative max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center gap-6"
          >
            <div className="size-20 rounded-full gradient-primary flex items-center justify-center">
              <CheckCircle className="size-10 text-white" />
            </div>
            <h3 className="text-2xl font-montserrat font-bold text-white">
              Dziękujemy!
            </h3>
            <p className="text-white/70 text-lg">
              Skontaktujemy się z Tobą w ciągu 24 godzin.
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="wycena" className="relative py-20 px-4 overflow-hidden">
      <DotPattern
        width={18}
        height={18}
        cr={0.6}
        className="absolute inset-0 fill-pbac-magenta/[0.04] [mask-image:radial-gradient(500px_circle_at_center,white,transparent)]"
      />
      <div className="relative max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-white text-center mb-4">
            Zamów <AuroraText>darmową wycenę</AuroraText>
          </h2>
          <p className="text-white/60 text-center mb-10 max-w-lg mx-auto">
            Wypełnij formularz, a nasz specjalista skontaktuje się z Tobą w
            ciągu 24 godzin.
          </p>

          <Card className="bg-white/5 backdrop-blur border-white/10 rounded-2xl">
            <CardContent className="pt-6">
              <StepIndicator current={step} total={4} />

              <p className="text-center text-sm text-white/50 mb-6">
                Krok {step + 1} z 4 &mdash; {STEP_LABELS[step]}
              </p>

              {errors.length > 0 && (
                <div className="mb-6 p-3 rounded-lg bg-red-500/10 border border-red-500/20">
                  {errors.map((e, i) => (
                    <p key={i} className="text-red-400 text-sm flex items-center gap-2">
                      <AlertCircle className="size-4 shrink-0" />
                      {e}
                    </p>
                  ))}
                </div>
              )}

              {status === "error" && (
                <div className="mb-6 p-3 rounded-lg bg-red-500/10 border border-red-500/20">
                  <p className="text-red-400 text-sm flex items-center gap-2">
                    <AlertCircle className="size-4 shrink-0" />
                    Wystąpił błąd. Spróbuj ponownie lub zadzwoń do nas.
                  </p>
                </div>
              )}

              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={step}
                  custom={direction}
                  initial={{ opacity: 0, x: direction * 60 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: direction * -60 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-5"
                >
                  {step === 0 && (
                    <>
                      <FieldGroup label="Typ budynku">
                        <Select
                          value={formData.buildingType}
                          onValueChange={(v) => update({ buildingType: v })}
                        >
                          <SelectTrigger className={selectTriggerClass}>
                            <SelectValue placeholder="Wybierz typ budynku" />
                          </SelectTrigger>
                          <SelectContent className={selectContentClass}>
                            <SelectItem value="dom">Dom jednorodzinny</SelectItem>
                            <SelectItem value="mieszkanie">Mieszkanie</SelectItem>
                            <SelectItem value="biuro">Biuro</SelectItem>
                            <SelectItem value="inny">Inny</SelectItem>
                          </SelectContent>
                        </Select>
                      </FieldGroup>
                      <FieldGroup label="Powierzchnia (m²)">
                        <Input
                          type="number"
                          placeholder="np. 120"
                          value={formData.area}
                          onChange={(e) => update({ area: e.target.value })}
                          className={inputClass}
                        />
                      </FieldGroup>
                      <FieldGroup label="Liczba pięter">
                        <Select
                          value={formData.floors}
                          onValueChange={(v) => update({ floors: v })}
                        >
                          <SelectTrigger className={selectTriggerClass}>
                            <SelectValue placeholder="Wybierz liczbę pięter" />
                          </SelectTrigger>
                          <SelectContent className={selectContentClass}>
                            <SelectItem value="1">1</SelectItem>
                            <SelectItem value="2">2</SelectItem>
                            <SelectItem value="3+">3+</SelectItem>
                          </SelectContent>
                        </Select>
                      </FieldGroup>
                    </>
                  )}

                  {step === 1 && (
                    <>
                      <FieldGroup label="Obecne ogrzewanie">
                        <Select
                          value={formData.currentHeating}
                          onValueChange={(v) => update({ currentHeating: v })}
                        >
                          <SelectTrigger className={selectTriggerClass}>
                            <SelectValue placeholder="Wybierz rodzaj ogrzewania" />
                          </SelectTrigger>
                          <SelectContent className={selectContentClass}>
                            <SelectItem value="gaz">Gaz ziemny</SelectItem>
                            <SelectItem value="olej">Olej opałowy</SelectItem>
                            <SelectItem value="wegiel">Węgiel</SelectItem>
                            <SelectItem value="elektryczne">Elektryczne</SelectItem>
                            <SelectItem value="brak">Brak / nowy budynek</SelectItem>
                            <SelectItem value="inne">Inne</SelectItem>
                          </SelectContent>
                        </Select>
                      </FieldGroup>
                      <FieldGroup label="Jakość izolacji">
                        <Select
                          value={formData.insulation}
                          onValueChange={(v) => update({ insulation: v })}
                        >
                          <SelectTrigger className={selectTriggerClass}>
                            <SelectValue placeholder="Wybierz jakość izolacji" />
                          </SelectTrigger>
                          <SelectContent className={selectContentClass}>
                            <SelectItem value="dobra">Dobra (po termomodernizacji)</SelectItem>
                            <SelectItem value="srednia">Średnia</SelectItem>
                            <SelectItem value="slaba">Słaba (stary budynek)</SelectItem>
                            <SelectItem value="nie-wiem">Nie wiem</SelectItem>
                          </SelectContent>
                        </Select>
                      </FieldGroup>
                    </>
                  )}

                  {step === 2 && (
                    <>
                      <FieldGroup label="Preferowana marka">
                        <Select
                          value={formData.preferredBrand}
                          onValueChange={(v) => update({ preferredBrand: v })}
                        >
                          <SelectTrigger className={selectTriggerClass}>
                            <SelectValue placeholder="Wybierz markę" />
                          </SelectTrigger>
                          <SelectContent className={selectContentClass}>
                            <SelectItem value="samsung">Samsung EHS Mono R290</SelectItem>
                            <SelectItem value="mitsubishi">Mitsubishi Heavy Hydrolution</SelectItem>
                            <SelectItem value="fujitsu">Fujitsu Waterstage</SelectItem>
                            <SelectItem value="neoheat">Neoheat</SelectItem>
                            <SelectItem value="pomoz">Pomóż mi wybrać</SelectItem>
                          </SelectContent>
                        </Select>
                      </FieldGroup>
                      <FieldGroup label="Dodatkowe informacje">
                        <Textarea
                          placeholder="np. Ogrzewanie podłogowe, grzejniki, ciepła woda użytkowa, chłodzenie latem..."
                          value={formData.additionalInfo}
                          onChange={(e) => update({ additionalInfo: e.target.value })}
                          className={cn(inputClass, "min-h-24")}
                        />
                      </FieldGroup>
                    </>
                  )}

                  {step === 3 && (
                    <>
                      <FieldGroup label="Imię i nazwisko">
                        <Input
                          type="text"
                          placeholder="Imię i nazwisko"
                          value={formData.name}
                          onChange={(e) => update({ name: e.target.value })}
                          className={inputClass}
                        />
                      </FieldGroup>
                      <FieldGroup label="Telefon">
                        <Input
                          type="tel"
                          placeholder="+48 xxx xxx xxx"
                          value={formData.phone}
                          onChange={(e) => update({ phone: e.target.value })}
                          className={inputClass}
                        />
                      </FieldGroup>
                      <FieldGroup label="E-mail">
                        <Input
                          type="email"
                          placeholder="email@example.com"
                          value={formData.email}
                          onChange={(e) => update({ email: e.target.value })}
                          className={inputClass}
                        />
                      </FieldGroup>
                      <FieldGroup label="Miasto">
                        <Input
                          type="text"
                          placeholder="np. Warszawa"
                          value={formData.city}
                          onChange={(e) => update({ city: e.target.value })}
                          className={inputClass}
                        />
                      </FieldGroup>
                      <div className="flex items-start gap-3 pt-2">
                        <input
                          type="checkbox"
                          id="consent"
                          checked={formData.consent}
                          onChange={(e) => update({ consent: e.target.checked })}
                          className="mt-1 size-4 rounded border-white/20 accent-pbac-magenta"
                        />
                        <label htmlFor="consent" className="text-sm text-white/60 cursor-pointer">
                          Wyrażam zgodę na przetwarzanie danych osobowych w celu
                          przygotowania wyceny.
                        </label>
                      </div>
                    </>
                  )}
                </motion.div>
              </AnimatePresence>

              <div className="flex justify-between mt-8">
                {step > 0 ? (
                  <Button
                    variant="outline"
                    onClick={goBack}
                    className="border-white/10 text-white hover:bg-white/5"
                  >
                    Wstecz
                  </Button>
                ) : (
                  <div />
                )}

                {step < 3 ? (
                  <button
                    onClick={goNext}
                    className="gradient-button text-white px-6 py-2 rounded-md text-sm font-medium hover:opacity-90 transition-opacity"
                  >
                    Dalej
                  </button>
                ) : (
                  <button
                    onClick={handleSubmit}
                    disabled={status === "loading"}
                    className="gradient-button text-white px-6 py-2 rounded-md text-sm font-medium hover:opacity-90 transition-opacity disabled:opacity-50 flex items-center gap-2"
                  >
                    {status === "loading" && (
                      <Loader2 className="size-4 animate-spin" />
                    )}
                    Wyślij zapytanie
                  </button>
                )}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
