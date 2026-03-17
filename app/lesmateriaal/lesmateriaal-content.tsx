"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Box,
  CheckCircle2,
  Clock,
  Layers,
  Magnet,
  Package,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

/* ------------------------------------------------------------------ */
/*  Data                                                                 */
/* ------------------------------------------------------------------ */

type BlockGroup = {
  name: string;
  dot: string;
  chip: string;
  single: string[];
  double: string[];
};

type ProductSet = {
  id: string;
  name: string;
  level: string;
  levelColor: string;
  description: string;
  blockGroups: BlockGroup[];
  included: string[];
};

const productSets: { sets: ProductSet[]; completeSet: ProductSet[] } = {
  sets: [
    {
      id: "set-1-2",
      name: "Startdoos",
      level: "Blok 1 & 2",
      levelColor: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
      description:
        "De perfecte eerste stap. Klinkers en de meest gebruikte medeklinkers waarmee kinderen direct hun eerste woordjes bouwen.",
      blockGroups: [
        {
          name: "Blok 1 — Groen",
          dot: "bg-green-500",
          chip: "bg-green-100 text-green-800 border-green-200 dark:bg-green-900/30 dark:text-green-300 dark:border-green-800",
          single: ["a", "i", "o"],
          double: ["s", "k", "p"],
        },
        {
          name: "Blok 2 — Oranje",
          dot: "bg-orange-500",
          chip: "bg-orange-100 text-orange-800 border-orange-200 dark:bg-orange-900/30 dark:text-orange-300 dark:border-orange-800",
          single: ["e", "n", "u"],
          double: ["t", "m", "l"],
        },
      ],
      included: ["Magnetische letters Blok 1 & 2", "Instructiekaarten", "Woordenlijst"],
    },
    {
      id: "set-3-4",
      name: "Groeidos",
      level: "Blok 3 & 4",
      levelColor: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
      description:
        "Bouw verder. Lange klinkers, tweeklanken en meer medeklinkers voor een groter woordenschat.",
      blockGroups: [
        {
          name: "Blok 3 — Blauw",
          dot: "bg-blue-500",
          chip: "bg-blue-100 text-blue-800 border-blue-200 dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-800",
          single: ["b", "aa", "ee", "z", "uu", "v"],
          double: ["r"],
        },
        {
          name: "Blok 4 — Geel",
          dot: "bg-yellow-400",
          chip: "bg-yellow-100 text-yellow-800 border-yellow-200 dark:bg-yellow-900/30 dark:text-yellow-300 dark:border-yellow-800",
          single: ["g", "oo", "d", "ie", "w", "ij", "oe"],
          double: [],
        },
      ],
      included: ["Magnetische letters Blok 3 & 4", "Instructiekaarten", "Woordenlijst"],
    },
  ],
  completeSet: [
    {
      id: "complete-set",
      name: "Complete set — Blok 1 t/m 4",
      level: "Compleet",
      levelColor: "bg-primary-100 text-primary-700 dark:bg-primary-900/30 dark:text-primary-400",
      description:
        "Alle vier de blokken bij elkaar. Ideaal om direct met de volledige set aan de slag te gaan.",
      blockGroups: [
        {
          name: "Blok 1 — Groen",
          dot: "bg-green-500",
          chip: "bg-green-100 text-green-800 border-green-200 dark:bg-green-900/30 dark:text-green-300 dark:border-green-800",
          single: ["a", "i", "o"],
          double: ["s", "k", "p"],
        },
        {
          name: "Blok 2 — Oranje",
          dot: "bg-orange-500",
          chip: "bg-orange-100 text-orange-800 border-orange-200 dark:bg-orange-900/30 dark:text-orange-300 dark:border-orange-800",
          single: ["e", "n", "u"],
          double: ["t", "m", "l"],
        },
        {
          name: "Blok 3 — Blauw",
          dot: "bg-blue-500",
          chip: "bg-blue-100 text-blue-800 border-blue-200 dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-800",
          single: ["b", "aa", "ee", "z", "uu", "v"],
          double: ["r"],
        },
        {
          name: "Blok 4 — Geel",
          dot: "bg-yellow-400",
          chip: "bg-yellow-100 text-yellow-800 border-yellow-200 dark:bg-yellow-900/30 dark:text-yellow-300 dark:border-yellow-800",
          single: ["g", "oo", "d", "ie", "w", "ij", "oe"],
          double: [],
        },
      ],
      included: [
        "Magnetische letters Blok 1 t/m 4",
        "Instructiekaarten voor alle blokken",
        "Woordenlijst",
      ],
    },
  ],
};

const faqItems = [
  {
    question: "Wat is het Bouw! programma?",
    answer:
      "Bouw! is een lesprogramma van Lexima, speciaal ontwikkeld voor kinderen die extra ondersteuning nodig hebben bij het leren lezen. Het programma werkt systematisch via blokken waarbij steeds nieuwe klanken en letters worden geïntroduceerd.",
  },
  {
    question: "Vanaf welke leeftijd zijn de letterboxen geschikt?",
    answer:
      "De letterboxen zijn geschikt voor kinderen vanaf 4–5 jaar, wanneer zij beginnen met het herkennen van letters. De sets sluiten aan op groep 3 en 4 van de basisschool, maar zijn ook uitstekend bruikbaar voor oudere kinderen die extra leesoefening nodig hebben.",
  },
  {
    question: "Zijn de magneten veilig voor kinderen?",
    answer:
      "De letters zijn stevig 3D geprint en de magneten zitten ingebouwd. Toch raden we aan om de letterboxen altijd onder toezicht van een volwassene te gebruiken, zeker bij jonge kinderen. Letterpret is niet aansprakelijk voor schade door verkeerd gebruik.",
  },
  {
    question: "Kan ik losse letters bijbestellen?",
    answer:
      "Dat is zeker een optie. Neem contact op via de contactpagina en we kijken samen wat we voor je kunnen regelen.",
  },
  {
    question: "Werkt Letterpret ook voor dyslectische kinderen?",
    answer:
      "De tactiele, magnetische aanpak van Letterpret is juist erg geschikt voor kinderen met dyslexie. Door letters letterlijk te kunnen aanraken en bewegen, worden meerdere zintuigen tegelijk aangesproken. Het Bouw! programma is ontworpen met extra aandacht voor kinderen die moeite hebben met lezen.",
  },
];

/* ------------------------------------------------------------------ */
/*  Page                                                                 */
/* ------------------------------------------------------------------ */

function ProductCard({ product }: { product: ProductSet }) {
  return (
    <Card className="relative flex h-full flex-col">
      <CardHeader className="pb-3 pt-6">
        <div className="mb-2">
          <span
            className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${product.levelColor}`}
          >
            {product.level}
          </span>
        </div>
        <h3 className="text-lg font-bold text-foreground">{product.name}</h3>
        <p className="text-sm text-muted-foreground">{product.description}</p>
      </CardHeader>

      <CardContent className="flex flex-col gap-4 pb-4">
        <Separator />

        {/* Letters per block */}
        <div className="flex flex-col gap-3">
          {product.blockGroups.map((group) => (
            <div key={group.name}>
              <div className="mb-1.5 flex items-center gap-1.5">
                <span className={`h-2.5 w-2.5 rounded-full ${group.dot}`} />
                <p className="text-xs font-semibold text-muted-foreground">{group.name}</p>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {group.single.map((l) => (
                  <span
                    key={l}
                    className={`inline-flex h-7 min-w-7 items-center justify-center rounded-md border px-1.5 text-sm font-bold ${group.chip}`}
                  >
                    {l}
                  </span>
                ))}
                {group.double.map((l) => (
                  <span
                    key={`${l}-double`}
                    className={`relative inline-flex h-7 min-w-7 items-center justify-center rounded-md border px-1.5 text-sm font-bold ${group.chip}`}
                  >
                    {l}
                    <span className="absolute -right-1.5 -top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-foreground text-[9px] font-black text-background leading-none">
                      2
                    </span>
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <Separator />

        {/* Included */}
        <div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            Inbegrepen
          </p>
          <ul className="flex flex-col gap-1.5">
            {product.included.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-primary-500" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </CardContent>

      <CardFooter className="mt-auto pt-2 pb-6">
        <Button
          className="w-full rounded-full bg-linear-to-br from-primary-400 to-primary-600 font-semibold text-white shadow-sm hover:from-primary-500 hover:to-primary-700"
          nativeButton={false}
          render={<Link href="/contact" />}
        >
          Bestellen <ArrowRight size={15} />
        </Button>
      </CardFooter>
    </Card>
  );
}

export default function LesmateriaalContent() {
  return (
    <>
      {/* ── Header ── */}
      <section className="relative overflow-hidden border-b border-border bg-section-warm py-14 sm:py-20">
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute right-0 top-0 h-72 w-72 translate-x-1/3 -translate-y-1/3 rounded-full bg-primary-100/60 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-48 w-48 -translate-x-1/3 translate-y-1/3 rounded-full bg-amber-100/50 blur-3xl" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-7xl px-4 text-center lg:px-8"
        >
          <Badge
            variant="secondary"
            className="mb-6 gap-1.5 rounded-full border border-primary-200 bg-primary-50 px-3 py-1 text-xs font-semibold text-primary-700 dark:border-primary-800 dark:bg-primary-900/30 dark:text-primary-300"
          >
            <BookOpen size={12} />
            Gebaseerd op de Bouw! programma
          </Badge>
          <h1 className="mb-4 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Magnetische{" "}
            <span className="bg-linear-to-r from-primary-500 to-primary-400 bg-clip-text text-transparent">
              letterboxen
            </span>{" "}
            per blok
          </h1>
          <p className="mx-auto mb-8 max-w-xl text-base text-muted-foreground sm:text-lg">
            Elk pakket sluit precies aan op een of meerdere blokken van de Bouw! programma. Kies het
            niveau dat past bij jouw kind.
          </p>

          {/* Kernvoordelen */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            {[
              { icon: Magnet, label: "Magnetisch" },
              { icon: Layers, label: "Per Bouw! blok" },
              { icon: Package, label: "Compleet pakket" },
              { icon: Box, label: "Duurzaam materiaal" },
            ].map(({ icon: Icon, label }) => (
              <Badge
                key={label}
                variant="secondary"
                className="gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium"
              >
                <Icon size={12} />
                {label}
              </Badge>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ── Producten ── */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Tabs defaultValue="sets" className="w-full">
              <div className="mb-8 flex justify-center">
                <TabsList className="h-auto rounded-full p-1">
                  <TabsTrigger value="sets" className="rounded-full px-5 py-2 text-sm font-medium">
                    Per set
                  </TabsTrigger>
                  <TabsTrigger
                    value="completeSet"
                    className="rounded-full px-5 py-2 text-sm font-medium"
                  >
                    Complete set
                  </TabsTrigger>
                  <TabsTrigger
                    value="comingSoon"
                    className="rounded-full px-5 py-2 text-sm font-medium"
                  >
                    Meer blokken
                  </TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="sets">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 max-w-3xl mx-auto">
                  {productSets.sets.map((p) => (
                    <ProductCard key={p.id} product={p} />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="completeSet">
                <div className="max-w-md mx-auto">
                  {productSets.completeSet.map((p) => (
                    <ProductCard key={p.id} product={p} />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="comingSoon">
                <div className="mx-auto max-w-lg rounded-2xl border border-dashed border-muted-foreground/30 bg-muted/30 px-8 py-14 text-center">
                  <Clock size={36} className="mx-auto mb-4 text-muted-foreground/50" />
                  <h3 className="mb-2 text-lg font-bold text-foreground">
                    Meer blokken komen eraan
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    We werken aan uitbreidingsblokken voor kinderen die verder willen. Houd deze
                    pagina in de gaten of neem contact op als je alvast op de hoogte wilt blijven.
                  </p>
                </div>
              </TabsContent>
            </Tabs>
          </motion.div>
        </div>
      </section>

      <Separator />

      {/* ── Hoe werkt het ── */}
      <section className="bg-section-warm py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-10 text-center"
          >
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary-500">
              Veelgestelde vragen
            </p>
            <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
              Alles wat je wilt weten
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mx-auto max-w-2xl"
          >
            <Accordion className="w-full">
              {faqItems.map((item, i) => (
                <AccordionItem key={i} value={`item-${i}`}>
                  <AccordionTrigger className="text-left font-semibold">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-3xl bg-linear-to-br from-primary-400 via-primary-500 to-primary-700 px-8 py-14 text-center shadow-2xl shadow-primary-500/30 sm:px-16"
          >
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
              <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
              <div className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-primary-800/50 blur-3xl" />
            </div>
            <div className="relative z-10">
              <h2 className="mb-4 text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
                Heb je een vraag of wil je bestellen?
              </h2>
              <p className="mx-auto mb-8 max-w-lg text-base text-primary-100 sm:text-lg">
                Neem contact op en we helpen je graag bij het kiezen van het juiste pakket voor jouw
                kind.
              </p>
              <Button
                size="lg"
                className="rounded-full bg-white px-8 font-bold text-primary-600 shadow-lg shadow-black/15 transition-colors hover:bg-primary-50"
                nativeButton={false}
                render={<Link href="/contact" />}
              >
                Neem contact op <ArrowRight size={16} />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
