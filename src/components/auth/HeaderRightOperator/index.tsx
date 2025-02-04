"use client";
import ThemeToggleButton from "@/components/theme/ThemeToggleButton";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function HeaderRightOperator() {
  const pathname = usePathname();

  return (
    <>
      <ThemeToggleButton />
      <Link href={pathname === "/sign-up" ? "/sign-in" : "/sign-up"}>
        <Button>{pathname === "/sign-up" ? "Sign In" : "Sign Up"}</Button>
      </Link>
    </>
  );
}
