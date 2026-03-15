"use client";

import { motion } from "framer-motion";
import { Heart, Printer, School } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const values = [
  {
    icon: School,
    title: "Geboren in de klas",
    description:
      "Uit de praktijk, niet uit een boekje. Door dagelijks met kinderen te werken weet Marlene waar ze tegenaan lopen als ze leren lezen.",
  },
  {
    icon: Printer,
    title: "Gemaakt met 3D printen",
    description:
      "Haar partner ontwerpt en print elke letterbox zelf. Zo konden ze het formaat, de dikte en het gevoel precies afstemmen op kleine handen.",
  },
  {
    icon: Heart,
    title: "Aanvullend op Bouw!",
    description:
      "De letterboxen sluiten aan op het Bouw! programma. In plaats van alleen op een scherm te werken, pakken kinderen de letters ook echt vast. Dat tastbare maakt het een aanvullend hulpmiddel bij het leren.",
  },
];

export default function About() {
  return (
    <section className="bg-background py-14 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-screen-xl px-4 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Tekst */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary-500">
              Over Letterpret
            </p>
            <h2 className="mb-5 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
              Leren lezen,{" "}
              <span className="bg-gradient-to-r from-primary-500 to-primary-400 bg-clip-text text-transparent">
                tastbaar gemaakt
              </span>
            </h2>
            <p className="mb-5 text-lg leading-relaxed text-muted-foreground">
              Achter Letterpret zit Marlene de Haan, onderwijsassistent op een basisschool. Ze vroeg
              zich af of kinderen letters en woorden beter zouden begrijpen als ze die ook echt
              konden vasthouden.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground">
              Samen met haar partner werden de eerste letterboxen ontworpen en 3D geprint. Kinderen
              bleken meteen enthousiaster, en ze begrepen sneller hoe losse letters samen een woord
              vormen. Letterpret is wat het altijd wilde zijn: een praktisch hulpmiddel, gemaakt
              door mensen uit de praktijk.
            </p>
          </motion.div>

          {/* Waarden */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-4"
          >
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                >
                  <Card className="border-border transition-shadow hover:shadow-sm">
                    <CardContent className="flex items-start gap-4 p-5">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-100 dark:bg-primary-900/40">
                        <Icon size={18} className="text-primary-600 dark:text-primary-400" />
                      </div>
                      <div>
                        <h3 className="mb-1 font-semibold text-foreground">{v.title}</h3>
                        <p className="text-sm leading-relaxed text-muted-foreground">
                          {v.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
