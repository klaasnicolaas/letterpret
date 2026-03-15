import type { Metadata } from "next";
import Layout from "@/components/layout";
import ContactForm from "./contact-form";

export const metadata: Metadata = {
  title: "Contact — Letterpret",
  description:
    "Neem contact op met Letterpret. Stel een vraag, doe een bestelling of vraag naar samenwerkingsmogelijkheden.",
};

export default function Contact() {
  return (
    <Layout>
      <ContactForm />
    </Layout>
  );
}
