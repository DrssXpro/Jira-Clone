import MobileSideBarButton from "../MobileSideBarButton";
import UserButton from "../UserButton";

export default function DashNavHeader() {
  return (
    <div className="w-full flex justify-between items-center p-4">
      <div>
        <MobileSideBarButton />
      </div>
      <UserButton />
    </div>
  );
}
