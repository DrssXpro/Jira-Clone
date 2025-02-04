"use client";

import { useState, useEffect } from "react";
import { MenuIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import Menu from "../Menu";

export default function MobileSideBarButton() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);
  return (
    <Sheet modal={false} open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant={"secondary"} className="lg:hidden">
          <MenuIcon />
        </Button>
      </SheetTrigger>
      <SheetContent className="bg-neutral-100 w-[250px] p-2" side="left">
        <SheetTitle className="my-1 pl-3">Jira Clone</SheetTitle>
        <div className="mt-2">
          <Menu />
        </div>
      </SheetContent>
    </Sheet>
  );
}
