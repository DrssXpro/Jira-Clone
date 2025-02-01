"use client";

import { logoImages } from "@/constants";
import { useTheme } from "next-themes";
import Image from "next/image";

export default function ThemeLogo() {
  const { theme } = useTheme();
  return <Image width={40} height={40} src={theme == "light" ? logoImages.LIGHT : logoImages.DARK} alt="logo" />;
}
