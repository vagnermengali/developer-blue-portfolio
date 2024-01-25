import {
  RiAlignJustify
} from "react-icons/ri";

import Nav from "@/components/Other/Nav/Nav";
import Logo from "@/components/Other/Logo/Logo";
import Socials from "@/components/Other/Socials/Socials";
import { Sheet, SheetContent, SheetTrigger } from "@/components/Other/UI/sheet";

export const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <RiAlignJustify className="cursor-pointer" />
      </SheetTrigger>
      <SheetContent>
        <div
          className="flex flex-col items-center justify-between 
        h-full py-8"
        >
          <div className="flex flex-col items-center gap-y-32">
            <Logo />
            <Nav
              containerStyles="flex flex-col items-center 
            gap-y-6"
              linkStyles="text-2xl"
            />
          </div>
          <Socials containerStyles="flex gap-x-4" iconsStyles="text-2xl" />
        </div>
      </SheetContent>
    </Sheet>
  );
};
