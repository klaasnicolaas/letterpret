"use client";

import { useTheme } from "next-themes";

import lightLogo from "@/public/images/logo/logo_light.svg";
import darkLogo from "@/public/images/logo/logo_dark.svg";
import Image from "next/image";

interface LogoProps {
  width: number;
  height: number;
}

export default function Logo(props: LogoProps) {
  const { theme } = useTheme();

  return (
    <Image
      src={theme === "dark" ? darkLogo : lightLogo}
      alt="Logo"
      width={props.width}
      height={props.height}
    />
  );
}
