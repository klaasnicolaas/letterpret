"use client";

import { useTheme } from "next-themes";

import lightLogo from "@/public/images/logo/logo_light.svg";
import darkLogo from "@/public/images/logo/logo_dark.svg";

interface LogoProps {
  width: number;
  height: number;
}

export default function Logo(props: LogoProps) {
  const { theme } = useTheme();

  return (
    <img
      src={theme === "dark" ? darkLogo.src : lightLogo.src}
      alt="Logo"
      width={props.width}
      height={props.height}
    />
  );
}
