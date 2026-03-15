"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function CtaBanner() {
  return (
    <section className="bg-section-warm py-14 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-screen-xl px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary-400 via-primary-500 to-primary-700 px-8 py-16 text-center shadow-2xl shadow-primary-500/30 sm:px-16"
        >
          {/* Decoratie */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-primary-800/50 blur-3xl" />
            <svg
              className="absolute inset-0 h-full w-full opacity-[0.035]"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <pattern id="cta-grid" width="32" height="32" patternUnits="userSpaceOnUse">
                  <path d="M 32 0 L 0 0 0 32" fill="none" stroke="white" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#cta-grid)" />
            </svg>
          </div>

          <div className="relative z-10">
            <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm">
              <Sparkles size={22} className="text-white" />
            </div>
            <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Klaar om te starten met Letterpret?
            </h2>
            <p className="mx-auto mb-8 max-w-xl text-lg text-primary-100">
              Bestel vandaag nog jouw letterboxen en geef jouw kind de beste start met lezen.
            </p>
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button
                size="lg"
                className="rounded-full bg-white px-8 font-bold text-primary-600 shadow-lg shadow-black/15 transition-colors hover:bg-primary-50"
                asChild
              >
                <Link href="/contact">
                  Bestel nu <ArrowRight size={16} />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full border-white/40 bg-transparent px-8 font-semibold text-white hover:bg-white/15 hover:text-white"
                asChild
              >
                <Link href="/lesmateriaal">Bekijk lesmateriaal</Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
