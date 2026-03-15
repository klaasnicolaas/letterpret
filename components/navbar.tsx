"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import ThemeSwitcher from "./ThemeSwitcher";
import Logo from "./logo";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Home",         href: "/" },
  { label: "Lesmateriaal", href: "/lesmateriaal" },
  { label: "Blog",         href: "/blog" },
  { label: "Contact",      href: "/contact" },
];

export default function NavBar() {
  const pathname = usePathname();
  const router   = useRouter();
  const [scrolled,  setScrolled]  = useState(false);
  const [sheetOpen, setSheetOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setSheetOpen(false); }, [pathname]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          scrolled
            ? "border-b border-border/80 bg-background/80 shadow-sm shadow-black/5 backdrop-blur-2xl"
            : "bg-transparent",
        )}
      >
        <nav className="mx-auto flex h-16 max-w-screen-xl items-center px-4 lg:px-8">

          {/* ── LOGO — links op beide formaten ── */}
          <Link href="/" className="shrink-0">
            <Logo width={150} height={90} />
          </Link>

          {/* ── DESKTOP: gecentreerde nav links ── */}
          <ul className="hidden flex-1 items-center justify-center gap-0.5 md:flex">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      "relative inline-flex h-9 items-center rounded-full px-4 text-sm font-medium outline-none transition-colors duration-150",
                      isActive
                        ? "text-primary-600 dark:text-primary-400"
                        : "text-muted-foreground hover:text-foreground",
                    )}
                  >
                    {link.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 -z-10 rounded-full bg-primary-50 dark:bg-primary-900/40"
                        transition={{ type: "spring", stiffness: 350, damping: 30 }}
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* ── RECHTS: theme + desktop CTA + mobile hamburger ── */}
          <div className="ml-auto flex items-center gap-2">
            <ThemeSwitcher />

            {/* Desktop only */}
            <Separator orientation="vertical" className="hidden h-5 md:block" />
            <Button
              size="sm"
              className="hidden rounded-full bg-gradient-to-br from-primary-400 to-primary-600 px-5 font-semibold text-white shadow-sm shadow-primary-500/30 transition-all hover:from-primary-500 hover:to-primary-700 md:flex"
              onClick={() => router.push("/contact")}
            >
              Aan de slag
            </Button>

            {/* Mobile hamburger */}
            <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full text-muted-foreground md:hidden"
                  aria-label="Menu openen"
                >
                  <Menu size={20} />
                </Button>
              </SheetTrigger>

              <SheetContent side="left" className="w-72 p-0">
                <SheetHeader className="border-b border-border px-6 py-4">
                  <SheetTitle asChild>
                    <Link href="/" className="block" onClick={() => setSheetOpen(false)}>
                      <Logo width={135} height={81} />
                    </Link>
                  </SheetTitle>
                </SheetHeader>

                <nav className="flex flex-col gap-1 px-3 py-4">
                  {navLinks.map((link) => {
                    const isActive = pathname === link.href;
                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        className={cn(
                          "flex items-center justify-between rounded-lg px-4 py-3 text-sm font-medium transition-colors",
                          isActive
                            ? "bg-primary-50 text-primary-700 dark:bg-primary-900/40 dark:text-primary-300"
                            : "text-muted-foreground hover:bg-muted hover:text-foreground",
                        )}
                      >
                        {link.label}
                        {isActive && (
                          <span className="h-1.5 w-1.5 rounded-full bg-primary-500" />
                        )}
                      </Link>
                    );
                  })}
                </nav>

                <div className="absolute bottom-0 left-0 right-0 border-t border-border p-4">
                  <Button
                    className="w-full rounded-full bg-gradient-to-br from-primary-400 to-primary-600 font-semibold text-white shadow-sm hover:from-primary-500 hover:to-primary-700"
                    onClick={() => { router.push("/contact"); setSheetOpen(false); }}
                  >
                    Aan de slag
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>

        </nav>
      </header>

      <div className="h-16" />
    </>
  );
}
