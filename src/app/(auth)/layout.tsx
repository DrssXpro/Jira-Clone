import Image from "next/image";
import { logoImages } from "@/constants";
import { Button } from "@/components/ui/button";

interface AuthLayoutProps {
  children: React.ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <main className="bg-neutral-100 w-screen h-screen overflow-hidden">
      <div className="mx-auto w-full p-4">
        <nav className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Image width={40} height={40} src={logoImages.LIGHT} alt="logo" />
            <div className="font-bold text-2xl">Jira Clone</div>
          </div>
          <Button>Sign up</Button>
        </nav>
        {children}
      </div>
    </main>
  );
}
