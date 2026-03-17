"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import productImage from "@/public/images/background_1.webp";
import letterA from "@/public/images/letter-a.svg";
import letterB from "@/public/images/letter-b.svg";
import letterC from "@/public/images/letter-c.svg";

const stats = [
  { value: "4", label: "Gekleurde blokken" },
  { value: "3D", label: "Geprint in Nederland" },
  { value: "✦", label: "Handgemaakt met zorg" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-background">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 right-0 h-160 w-160 translate-x-1/3 rounded-full bg-primary-100/60 blur-3xl dark:bg-primary-900/20" />
        <div className="absolute -bottom-32 left-0 h-120 w-120 -translate-x-1/3 rounded-full bg-primary-50 blur-3xl dark:bg-primary-900/10" />
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:py-16 lg:px-8 lg:py-24">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          {/* Tekst */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col items-center text-center md:items-start md:text-left"
          >
            <Badge
              variant="secondary"
              className="mb-6 gap-1.5 rounded-full border border-primary-200 bg-primary-50 px-3 py-1 text-xs font-semibold text-primary-700 dark:border-primary-800 dark:bg-primary-900/30 dark:text-primary-300"
            >
              <Sparkles size={12} />
              Nieuw — De box vol letterpret!
            </Badge>

            <h1 className="mb-5 text-4xl font-extrabold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Spelenderwijs{" "}
              <span className="bg-linear-to-r from-primary-500 to-primary-400 bg-clip-text text-transparent">
                letters en woorden
              </span>{" "}
              leren lezen
            </h1>

            <p className="mb-8 max-w-md text-lg leading-relaxed text-muted-foreground">
              Tastbare, magnetische letterboxen die kinderen helpen lezen op hun eigen tempo.
              Geschikt voor thuis en in de klas.
            </p>

            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <Button
                size="lg"
                className="rounded-full bg-linear-to-br from-primary-400 to-primary-600 px-8 font-semibold text-white shadow-md shadow-primary-500/30 transition-all hover:from-primary-500 hover:to-primary-700 hover:shadow-lg hover:shadow-primary-500/35"
                nativeButton={false}
                render={<Link href="/contact" />}
              >
                Bestel nu <ArrowRight size={16} />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full border-primary-200 px-8 font-semibold text-primary-600 hover:border-primary-300 hover:bg-primary-50 dark:border-primary-800 dark:text-primary-400 dark:hover:bg-primary-950/40"
                nativeButton={false}
                render={<Link href="/lesmateriaal" />}
              >
                Meer info
              </Button>
            </div>

            {/* Statistieken */}
            <div className="mt-8 flex items-center justify-center gap-6 md:justify-start">
              {stats.map((s, i) => (
                <div key={s.label} className="flex items-center gap-6">
                  <div className="flex flex-col items-center md:items-start">
                    <span className="text-xl font-extrabold text-foreground sm:text-2xl">
                      {s.value}
                    </span>
                    <span className="text-xs text-muted-foreground">{s.label}</span>
                  </div>
                  {i < stats.length - 1 && <div className="h-8 w-px bg-border" />}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Afbeelding */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            className="relative"
          >
            {/* Floating letter tiles */}
            <motion.div
              initial={{ opacity: 0, rotate: 12, scale: 0.8 }}
              animate={{ opacity: 1, rotate: 12, scale: 1, y: [0, -6, 0] }}
              transition={{
                opacity: { delay: 0.7, duration: 0.4 },
                scale: { delay: 0.7, duration: 0.4 },
                y: { delay: 1.2, duration: 3, repeat: Infinity, ease: "easeInOut" },
              }}
              className="absolute right-3 top-3 z-10 drop-shadow-xl md:-top-6 md:right-8"
            >
              <Image
                src={letterA}
                alt="Letter A"
                width={64}
                height={64}
                className="h-14 w-14 md:h-16 md:w-16"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, rotate: -8, scale: 0.8 }}
              animate={{ opacity: 1, rotate: -8, scale: 1, y: [0, 6, 0] }}
              transition={{
                opacity: { delay: 0.85, duration: 0.4 },
                scale: { delay: 0.85, duration: 0.4 },
                y: { delay: 1.4, duration: 3.4, repeat: Infinity, ease: "easeInOut" },
              }}
              className="absolute bottom-3 right-14 z-10 drop-shadow-xl md:-bottom-6 md:right-16"
            >
              <Image
                src={letterB}
                alt="Letter B"
                width={60}
                height={60}
                className="h-13 w-13 md:h-15 md:w-15"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, rotate: 16, scale: 0.8 }}
              animate={{ opacity: 1, rotate: 16, scale: 1, y: [0, -5, 0] }}
              transition={{
                opacity: { delay: 1.0, duration: 0.4 },
                scale: { delay: 1.0, duration: 0.4 },
                y: { delay: 1.6, duration: 2.8, repeat: Infinity, ease: "easeInOut" },
              }}
              className="absolute left-3 top-3 z-10 drop-shadow-xl md:-left-6 md:top-8"
            >
              <Image
                src={letterC}
                alt="Letter C"
                width={56}
                height={56}
                className="h-12 w-12 md:h-14 md:w-14"
              />
            </motion.div>
            <div className="absolute inset-4 rounded-3xl bg-primary-200/50 blur-2xl dark:bg-primary-700/20" />
            <div className="relative overflow-hidden rounded-2xl shadow-2xl shadow-primary-500/10 ring-1 ring-primary-100 dark:ring-primary-900/50">
              <Image
                src={productImage}
                alt="Letterpret letterboxen"
                className="h-auto w-full object-cover"
                priority
              />
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.65, duration: 0.4 }}
                className="absolute bottom-4 left-4 rounded-xl bg-white/95 px-4 py-3 shadow-lg backdrop-blur-sm dark:bg-card/95"
              >
                <p className="text-xs font-medium text-muted-foreground">Aansluitend op</p>
                <p className="text-sm font-bold text-primary-600 dark:text-primary-400">
                  Bouw! programma
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
