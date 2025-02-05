import MobileSideBarButton from "./components/MobileSideBarButton";
import NavTitle from "./components/NavTitle";
import UserButton from "./components/UserButton";

export default function DashNavHeader() {
  return (
    <div className="w-full flex justify-between items-center p-4">
      <div className="flex items-center gap-2">
        <MobileSideBarButton />
        <NavTitle />
      </div>
      <UserButton />
    </div>
  );
}
