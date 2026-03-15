import type { Metadata } from "next";
import Layout from "@/components/layout";
import LesmateriaalContent from "./lesmateriaal-content";

export const metadata: Metadata = {
  title: "Lesmateriaal — Magnetische letterboxen | Letterpret",
  description:
    "Ontdek onze magnetische letterboxen per Bouw! blok. Startpakketten, uitbreidingen en complete sets voor thuis en in de klas.",
  openGraph: {
    title: "Lesmateriaal — Magnetische letterboxen | Letterpret",
    description:
      "Ontdek onze magnetische letterboxen per Bouw! blok. Startpakketten, uitbreidingen en complete sets.",
    type: "website",
    locale: "nl_NL",
  },
};

export default function Lesmateriaal() {
  return (
    <Layout>
      <LesmateriaalContent />
    </Layout>
  );
}
