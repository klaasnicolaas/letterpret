import { Mail, MapPin } from "lucide-react";
import Link from "next/link";
import Logo from "./logo";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Lesmateriaal", href: "/lesmateriaal" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        {/* Hoofdrij */}
        <div className="grid grid-cols-2 gap-8 py-12 md:grid-cols-3 lg:py-14">
          {/* Merk */}
          <div className="flex flex-col gap-4">
            <Logo width={160} height={96} />
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              Spelenderwijs nieuwe letters leren met tastbare, magnetische letterboxen voor
              kinderen.
            </p>
            <div className="flex gap-2">
              <a
                href="https://github.com/klaasnicolaas"
                target="_blank"
                rel="noreferrer"
                className="flex h-8 w-8 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-primary-50 hover:text-primary-600 dark:hover:bg-primary-900/30"
                aria-label="GitHub"
              >
                <svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              </a>
              <a
                href="mailto:info@letterpret.nu"
                className="flex h-8 w-8 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-primary-50 hover:text-primary-600 dark:hover:bg-primary-900/30"
                aria-label="E-mail"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>

          {/* Navigatie */}
          <div className="flex flex-col gap-2">
            <h4 className="mb-2 text-xs font-bold uppercase tracking-widest text-muted-foreground">
              Navigatie
            </h4>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="w-fit text-sm font-medium text-muted-foreground transition-colors hover:text-primary-500"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-2">
            <h4 className="mb-2 text-xs font-bold uppercase tracking-widest text-muted-foreground">
              Contact
            </h4>
            <a
              href="mailto:info@letterpret.nu"
              className="flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary-500"
            >
              <Mail size={14} className="shrink-0 text-primary-400" />
              info@letterpret.nu
            </a>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin size={14} className="shrink-0 text-primary-400" />
              Nederland
            </div>
          </div>
        </div>

        {/* Onderste balk */}
        <div className="flex flex-col items-center justify-between gap-3 border-t border-border py-6 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Letterpret. Alle rechten voorbehouden.
          </p>
          <p className="text-xs text-muted-foreground">
            Gemaakt door{" "}
            <a
              href="https://github.com/klaasnicolaas"
              target="_blank"
              rel="noreferrer"
              className="font-medium text-primary-500 hover:underline"
            >
              Klaas Schoute
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
