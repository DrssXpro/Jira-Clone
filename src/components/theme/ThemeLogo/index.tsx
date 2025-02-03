import { logoImages } from "@/constants";
import Image from "next/image";

export default function ThemeLogo() {
  return (
    <>
      <Image
        width={40}
        height={40}
        className="dark:hidden"
        src={logoImages.LIGHT}
        alt="logo"
      />
      <Image
        width={40}
        height={40}
        className="hidden dark:block"
        src={logoImages.DARK}
        alt="logo"
      />
    </>
  );
}
