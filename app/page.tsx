import type { Metadata } from "next";
import Features from "@/components/features";
import Hero from "@/components/hero";
import HowItWorks from "@/components/how-it-works";
import About from "@/components/about";
import CtaBanner from "@/components/cta-banner";
import Layout from "@/components/layout";

export const metadata: Metadata = {
  title: "Letterpret — Spelenderwijs letters leren",
  description:
    "Tastbare, magnetische letterboxen die kinderen helpen lezen op hun eigen tempo. Geschikt voor thuis en in de klas. Werkt met de Bouw! methode.",
  keywords: ["letterpret", "letters leren", "lezen", "bouw methode", "letterboxen", "onderwijs"],
  openGraph: {
    title: "Letterpret — Spelenderwijs letters leren",
    description:
      "Tastbare, magnetische letterboxen die kinderen helpen lezen op hun eigen tempo.",
    type: "website",
    locale: "nl_NL",
  },
};

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Features />
      <HowItWorks />
      <About />
      <CtaBanner />
    </Layout>
  );
}
