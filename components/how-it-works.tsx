"use client";

import { motion } from "framer-motion";
import { Package, Layers, Trophy } from "lucide-react";
import Image from "next/image";
import productImage from "@/public/images/background_2.webp";

const steps = [
  {
    number: "01",
    icon: Package,
    title: "Kies je doos",
    description:
      "Selecteer de letterboxen die aansluiten op het niveau van jouw kind. De sets zijn opgebouwd in de volgorde van de Bouw! leesmethode.",
  },
  {
    number: "02",
    icon: Layers,
    title: "Bouw woorden",
    description:
      "Laat je kind de magnetische letters combineren, stapelen en verschuiven om woorden te ontdekken en te oefenen.",
  },
  {
    number: "03",
    icon: Trophy,
    title: "Groei & geniet",
    description:
      "Zie hoe jouw kind stap voor stap zelfvertrouwen opbouwt en steeds vlotter leest, spelenderwijs en met plezier.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-background py-14 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-screen-xl px-4 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Afbeelding */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative order-2 lg:order-1"
          >
            <div className="absolute inset-4 rounded-3xl bg-primary-100/70 blur-2xl dark:bg-primary-900/20" />
            <div className="relative overflow-hidden rounded-2xl shadow-xl ring-1 ring-primary-100 dark:ring-primary-900/40">
              <Image
                src={productImage}
                alt="Kind speelt met Letterpret letterboxen"
                className="h-auto w-full object-cover"
              />
            </div>
          </motion.div>

          {/* Stappen */}
          <div className="order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-10"
            >
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary-500">
                Hoe het werkt
              </p>
              <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
                In drie stappen aan de slag
              </h2>
              <p className="text-lg text-muted-foreground">
                Van de doos naar zelfstandig lezen. Eenvoudig en leuk voor elk kind.
              </p>
            </motion.div>

            <div className="flex flex-col">
              {steps.map((step, index) => {
                const Icon = step.icon;
                const isLast = index === steps.length - 1;
                return (
                  <motion.div
                    key={step.number}
                    initial={{ opacity: 0, x: 18 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.12 }}
                    className="flex gap-5"
                  >
                    {/* Icoon + verbindingslijn */}
                    <div className="flex flex-col items-center">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-100 text-primary-600 shadow-sm shadow-primary-500/10 dark:bg-primary-900/50 dark:text-primary-400">
                        <Icon size={20} />
                      </div>
                      {!isLast && (
                        <div className="my-1 w-px flex-1 bg-gradient-to-b from-primary-200 to-primary-50 dark:from-primary-800 dark:to-transparent" />
                      )}
                    </div>

                    {/* Tekst */}
                    <div className={isLast ? "pb-0" : "pb-8"}>
                      <div className="mb-1 flex items-baseline gap-2">
                        <span className="text-xs font-bold tracking-widest text-primary-300 dark:text-primary-600">
                          {step.number}
                        </span>
                        <h3 className="text-lg font-bold text-foreground">{step.title}</h3>
                      </div>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
