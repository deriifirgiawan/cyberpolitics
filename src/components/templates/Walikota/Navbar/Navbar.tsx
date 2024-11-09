import { ImageConstant } from "@/constants";
import Image from "next/image";

export const Navbar = () => {
  return (
    <nav className="nav-background flex top-0 fixed transition-all duration-300 w-full justify-center items-center py-6 md:px-8 lg:px-8 px-4 z-50">
      <Image
        src={ImageConstant.LOGO}
        alt="CyberPolitics.AI"
        width={200}
        height={200}
        priority
      />
    </nav>
  );
};
