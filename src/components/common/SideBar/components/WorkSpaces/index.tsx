"use client";

import { RiAddCircleFill } from "react-icons/ri";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Avatar,AvatarFallback } from "@/components/ui/avatar";


function WorkSpaceItem() {
  return (
    <div className="flex items-center gap-2">
      <Avatar className="text-white">
        <AvatarFallback className="bg-sky-600">CN</AvatarFallback>
      </Avatar>
      <span>Test workspace</span>
    </div>
  );
}

export default function WorkSpaces() {
  return (
    <>
      <div className="text-neutral-500 text-sm font-semibold flex items-center justify-between mb-2">
        <span>WORKSPACES</span>
        <RiAddCircleFill size={20} className="cursor-pointer" />
      </div>
      <Select>
        <SelectTrigger className="bg-neutral-200 h-14 p-2">
          <SelectValue placeholder="No workspace selected" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="light">
            <WorkSpaceItem />
          </SelectItem>
          <SelectItem value="dark">
            <WorkSpaceItem />
          </SelectItem>
          <SelectItem value="system">
            <WorkSpaceItem />
          </SelectItem>
        </SelectContent>
      </Select>
    </>
  );
}
