"use client";

import { motion } from "framer-motion";
import { Hand, Magnet, BookOpen } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Hand,
    iconBg: "bg-primary-100 dark:bg-primary-900/40",
    iconColor: "text-primary-600 dark:text-primary-400",
    accentBar: "bg-primary-400",
    title: "Tastbaar leren",
    description:
      "Door de letters te voelen stimuleer je de tastzin. Kinderen herkennen en onthouden letters sneller door de fysieke vorm te ervaren.",
  },
  {
    icon: Magnet,
    iconBg: "bg-amber-100 dark:bg-amber-900/40",
    iconColor: "text-amber-600 dark:text-amber-400",
    accentBar: "bg-amber-400",
    title: "Hakken & Plakken",
    description:
      "De letterboxen zijn magnetisch, zodat kinderen eenvoudig woorden kunnen bouwen door de letters tegen elkaar aan te schuiven.",
  },
  {
    icon: BookOpen,
    iconBg: "bg-orange-100 dark:bg-orange-900/40",
    iconColor: "text-orange-700 dark:text-orange-300",
    accentBar: "bg-orange-500",
    title: "Passend bij Bouw!",
    description:
      "De letters zijn opgedeeld in blokken die aansluiten op de volgorde van het Bouw! programma.",
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.13 } },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function Features() {
  return (
    <section className="bg-section-warm py-14 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-screen-xl px-4 lg:px-8">
        {/* Sectieheader */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary-500">
            Waarom Letterpret?
          </p>
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Groeien in het leren lezen
          </h2>
          <p className="mx-auto max-w-xl text-lg text-muted-foreground">
            Een unieke combinatie van spelend leren, tactiele ervaring en bewezen leermethoden.
          </p>
        </motion.div>

        {/* Kaarten */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 gap-6 md:grid-cols-3"
        >
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <motion.div key={f.title} variants={item}>
                <Card className="group h-full overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:shadow-primary-500/10">
                  <div className={`h-1 w-full ${f.accentBar}`} />
                  <CardContent className="flex flex-col p-7">
                    <div
                      className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl ${f.iconBg}`}
                    >
                      <Icon size={22} className={f.iconColor} />
                    </div>
                    <h3 className="mb-3 text-xl font-bold text-foreground">{f.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">{f.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
