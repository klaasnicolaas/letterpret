"use client";

import {
  Button,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import ThemeSwitcher from "./ThemeSwitcher";
import { usePathname, useRouter } from "next/navigation";
import clsx from "clsx";
import Logo from "./logo";

export default function NavBar() {
  const router = useRouter();
  const pathname = usePathname();
  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Lesmateriaal", href: "/lesmateriaal" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <Navbar isBlurred maxWidth="xl">
      {/* Mobile view */}
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle />
      </NavbarContent>
      <NavbarContent className="sm:hidden" justify="center">
        <NavbarBrand>
          {/* <span className="font-bold tracking-tighter text-inherit text-xl">
            Letterpret
          </span> */}
          <Logo width={170} height={100} />
        </NavbarBrand>
      </NavbarContent>
      {/* Desktop view */}
      <NavbarBrand className="hidden sm:flex">
        {/* <span className="font-bold tracking-tighter text-2xl flex gap-3 justify-center items-center">
          Letterpret
        </span> */}
        <Logo width={170} height={100} />
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-5" justify="center">
        {navLinks.map((link, index) => (
          <NavbarItem key={index}>
            <Button
              as={Link}
              variant="light"
              onClick={() => router.push(link.href)}
              className={clsx({
                "font-bold": pathname === link.href,
              })}
            >
              {link.label}
            </Button>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden sm:flex">
          <Button
            as={Link}
            color="primary"
            href="#"
            variant="solid"
            className="hidden sm:flex"
          >
            Aan de slag
          </Button>
        </NavbarItem>
        <NavbarItem>
          <ThemeSwitcher />
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {navLinks.map((link, index) => (
          <NavbarMenuItem key={index}>
            <Link
              className="w-full"
              href={link.href}
              size="lg"
              color="foreground"
            >
              {link.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
