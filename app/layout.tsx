import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Letterpret — Spelenderwijs letters leren",
  description:
    "Tastbare, magnetische letterboxen die kinderen helpen lezen op hun eigen tempo. Geschikt voor thuis en in de klas. Werkt met de Bouw! methode.",
  keywords: ["letterpret", "letters leren", "lezen", "bouw methode", "letterboxen", "onderwijs"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>{children}</Providers>
        <Toaster richColors position="bottom-right" />
      </body>
    </html>
  );
}
