import { Button } from "@/components/ui/button";
import ThemeToggleButton from "@/components/theme/ThemeToggleButton";
import ThemeLogo from "@/components/theme/ThemeLogo";

interface AuthLayoutProps {
  children: React.ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <main className="bg-background transition-all w-screen h-screen overflow-hidden">
      <div className="mx-auto w-full p-4">
        <nav className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <ThemeLogo />
            <div className="font-bold text-2xl">Jira Clone</div>
          </div>
          <div className="flex items-center gap-4">
            <ThemeToggleButton />
            <Button>Sign up</Button>
          </div>
        </nav>
        <div className="mt-5">{children}</div>
      </div>
    </main>
  );
}
