import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import { LogOut } from "lucide-react";
import Link from "next/link";

export default function UserButton() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Avatar className="cursor-pointer">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </PopoverTrigger>
      <PopoverContent className="w-[250px]">
        <div className="flex flex-col items-center gap-2">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="flex flex-col items-center gap-1">
            <div className="text-lg font-bold">Async</div>
            <div>abcdef@mail.com</div>
          </div>
          <Separator />
          <Link className="mt-2 text-red-700 flex items-center gap-1" href="/sign-in">
            <LogOut />
            <span>Log out</span>
          </Link>
        </div>
      </PopoverContent>
    </Popover>
  );
}
