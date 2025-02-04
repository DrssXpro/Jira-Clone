"use client";
import ThemeToggleButton from "@/components/theme/ThemeToggleButton";
import ThemeLogo from "@/components/theme/ThemeLogo";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AuthNavHeader() {
  const pathname = usePathname();

  return (
    <nav className="flex justify-between items-center">
      <div className="flex items-center gap-2">
        <ThemeLogo />
        <div className="font-bold text-2xl">Jira Clone</div>
      </div>
      <div className="flex items-center gap-4">
        <ThemeToggleButton />
        <Link href={pathname === "/sign-up" ? "/sign-in" : "/sign-up"}>
          <Button>{pathname === "/sign-up" ? "Sign In" : "Sign Up"}</Button>
        </Link>
      </div>
    </nav>
  );
}
