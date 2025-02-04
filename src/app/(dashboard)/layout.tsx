import SideBar from "@/components/common/SideBar";
import DashBoardHeader from "@/components/common/DashBoardHeader";

export default function DashboardLayout(props: { children: React.ReactNode }) {
  const { children } = props;
  return (
    <main className="bg-background transition-all w-screen h-screen overflow-hidden">
      <div className="h-full">
        <div className="fixed left-0 top-0 hidden lg:block lg:w-[250px] h-full">
          <SideBar />
        </div>
        <div className="lg:pl-[250px] w-full">
          <DashBoardHeader />
          {children}
        </div>
      </div>
    </main>
  );
}
