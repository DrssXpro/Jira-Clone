"use client";

import { GoCheckCircle, GoCheckCircleFill, GoHome, GoHomeFill } from "react-icons/go";
import { SettingsIcon, UsersIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const routes = [
  {
    label: "Home",
    href: "/home",
    icon: GoHome,
    activeIcon: GoHomeFill,
  },
  {
    label: "My Task",
    href: "/tasks",
    icon: GoCheckCircle,
    activeIcon: GoCheckCircleFill,
  },
  {
    label: "Settings",
    href: "/settings",
    icon: SettingsIcon,
    activeIcon: SettingsIcon,
  },
  {
    label: "Members",
    href: "/members",
    icon: UsersIcon,
    activeIcon: UsersIcon,
  },
];

export default function Menu() {
  const pathname = usePathname();
  return (
    <div className="flex flex-col gap-2">
      {routes.map((item) => (
        <Link
          className={cn(
            "p-2 rounded-lg text-neutral-500 transition hover:text-primary",
            pathname === item.href && "bg-white shadow-sm text-primary"
          )}
          key={item.href}
          href={item.href}
        >
          <div className="flex items-center gap-3">
            {pathname === item.href ? <item.activeIcon size={20} /> : <item.icon size={20} />}
            {item.label}
          </div>
        </Link>
      ))}
    </div>
  );
}
