import ThemeLogo from "@/components/theme/ThemeLogo";
import { Separator } from "@/components/ui/separator";
import Menu from "../Menu";


export default function SideBar() {
  return (
    <aside className="h-full bg-neutral-100 flex flex-col p-4">
      <div className="flex items-center gap-2">
        <ThemeLogo />
        <div className="font-bold text-2xl">Jira Clone</div>
      </div>
      <Separator className="my-4" />
      <Menu />
    </aside>
  );
}
