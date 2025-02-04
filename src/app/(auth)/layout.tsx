import AuthNavHeader from "@/components/common/AuthNavHeader";

interface AuthLayoutProps {
  children: React.ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <main className="bg-background transition-all w-screen h-screen overflow-hidden">
      <div className="mx-auto w-full p-4">
        <AuthNavHeader />
        <div className="mt-5">{children}</div>
      </div>
    </main>
  );
}
