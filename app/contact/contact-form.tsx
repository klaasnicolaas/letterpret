"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, User } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const contactInfo = [
  { icon: Mail, label: "info@letterpret.nu", href: "mailto:info@letterpret.nu" },
  { icon: Phone, label: "+31 (0)6 00 00 00 00", href: "tel:+31600000000" },
  { icon: MapPin, label: "Nederland", href: undefined },
];

const inquiryTypes = [
  { value: "vraag", label: "Vraag" },
  { value: "bestelling", label: "Bestelling" },
  { value: "samenwerking", label: "Samenwerking" },
  { value: "anders", label: "Anders" },
];

export default function ContactForm() {
  const [type, setType] = useState("vraag");
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);

    // Simuleer verzending (vervang dit met je eigen API call)
    await new Promise((r) => setTimeout(r, 1200));

    setSubmitting(false);
    (e.target as HTMLFormElement).reset();
    setType("vraag");

    toast.success("Bericht verzonden!", {
      description: "We nemen zo snel mogelijk contact met je op.",
    });
  }

  return (
    <>
      {/* Header */}
      <section className="relative overflow-hidden border-b border-border bg-section-warm py-14 sm:py-20">
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute right-0 top-0 h-64 w-64 translate-x-1/3 -translate-y-1/3 rounded-full bg-primary-100/60 blur-3xl" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-screen-xl px-4 text-center lg:px-8"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary-500">
            Neem contact op
          </p>
          <h1 className="mb-4 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Hoe kunnen we helpen?
          </h1>
          <p className="mx-auto mb-6 max-w-md text-base text-muted-foreground sm:text-lg">
            Stuur ons een bericht en we reageren zo snel mogelijk.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-2">
            {contactInfo.map(({ icon: Icon, label, href }) =>
              href ? (
                <a key={label} href={href}>
                  <Badge
                    variant="secondary"
                    className="cursor-pointer gap-1.5 rounded-full border border-primary-200 bg-primary-50 px-3 py-1.5 text-xs font-medium text-primary-700 transition-opacity hover:opacity-80 dark:border-primary-800 dark:bg-primary-900/30 dark:text-primary-300"
                  >
                    <Icon size={12} />
                    {label}
                  </Badge>
                </a>
              ) : (
                <Badge
                  key={label}
                  variant="secondary"
                  className="gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium"
                >
                  <Icon size={12} />
                  {label}
                </Badge>
              ),
            )}
          </div>
        </motion.div>
      </section>

      {/* Formulier */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-2xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card className="border-border shadow-sm">
              <CardContent className="p-6 sm:p-8">
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  {/* Soort bericht */}
                  <div className="flex flex-col gap-2">
                    <Label className="text-sm font-medium">Soort bericht</Label>
                    <div className="flex flex-wrap gap-2">
                      {inquiryTypes.map((t) => (
                        <button
                          key={t.value}
                          type="button"
                          onClick={() => setType(t.value)}
                          className={cn(
                            "rounded-full border px-4 py-1.5 text-sm font-medium transition-colors",
                            type === t.value
                              ? "border-primary-500 bg-primary-500 text-white"
                              : "border-border bg-background text-muted-foreground hover:border-primary-300 hover:text-foreground",
                          )}
                        >
                          {t.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <Separator />

                  {/* Naam + e-mail */}
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="flex flex-col gap-1.5">
                      <Label htmlFor="naam">
                        Naam <span className="text-destructive">*</span>
                      </Label>
                      <div className="relative">
                        <User
                          size={15}
                          className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                        />
                        <Input
                          id="naam"
                          name="naam"
                          type="text"
                          placeholder="Jan de Vries"
                          className="pl-9"
                          required
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <Label htmlFor="email">
                        E-mailadres <span className="text-destructive">*</span>
                      </Label>
                      <div className="relative">
                        <Mail
                          size={15}
                          className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                        />
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="jan@voorbeeld.nl"
                          className="pl-9"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* Telefoon */}
                  <div className="flex flex-col gap-1.5">
                    <Label htmlFor="telefoon">Telefoonnummer</Label>
                    <div className="relative">
                      <Phone
                        size={15}
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                      />
                      <Input
                        id="telefoon"
                        name="telefoon"
                        type="tel"
                        placeholder="+31 (0)6 00 00 00 00"
                        className="pl-9"
                      />
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Optioneel, handig als je liever teruggebeld wordt.
                    </p>
                  </div>

                  {/* Bericht */}
                  <div className="flex flex-col gap-1.5">
                    <Label htmlFor="bericht">
                      Bericht <span className="text-destructive">*</span>
                    </Label>
                    <Textarea
                      id="bericht"
                      name="bericht"
                      placeholder="Stel hier je vraag of beschrijf je situatie..."
                      className="min-h-32 resize-none"
                      required
                    />
                  </div>

                  <Separator />

                  {/* Nieuwsbrief + verzenden */}
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-center gap-2">
                      <Checkbox id="nieuwsbrief" name="nieuwsbrief" />
                      <Label
                        htmlFor="nieuwsbrief"
                        className="cursor-pointer text-sm font-normal text-muted-foreground"
                      >
                        Houd mij op de hoogte van nieuws en aanbiedingen.
                      </Label>
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      disabled={submitting}
                      className="w-full rounded-full bg-gradient-to-br from-primary-400 to-primary-600 font-semibold text-white shadow-md shadow-primary-500/25 transition-all hover:from-primary-500 hover:to-primary-700 disabled:opacity-70 sm:w-auto"
                    >
                      {submitting ? (
                        "Verzenden..."
                      ) : (
                        <>
                          <Send size={15} /> Verstuur bericht
                        </>
                      )}
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </>
  );
}
