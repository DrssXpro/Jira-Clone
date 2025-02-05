"use client";

import { usePathname } from "next/navigation";

const RouterTitleMap: Record<string, { title: string; desc: string }> = {
  "/home": {
    title: "Home",
    desc: "Monitor all of your projects and tasks here.",
  },
  "/tasks": {
    title: "My Tasks",
    desc: "View all of your tasks here.",
  },
  "/members": {
    title: "Members",
    desc: "View all of your members here.",
  },
};

export default function NavTitle() {
  const pathname = usePathname();

  const current = RouterTitleMap[pathname];

  if (!current) return null;

  return (
    <div className="flex flex-col gap-1 opacity-0 lg:opacity-100">
      <h1 className="text-xl font-bold">{current.title}</h1>
      <p className="text-neutral-500">{current.desc}</p>
    </div>
  );
}
