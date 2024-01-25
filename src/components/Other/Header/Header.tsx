import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

import Logo from "@/components/Other/Logo/Logo";
import Nav from "@/components/Other/Nav/Nav";
import { MobileNav } from "@/components/Other/Nav/MobileNav";


const Header = () => {
  const [header, setHeader] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const scrollYPos: any = window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setHeader(true) : setHeader(false);
    });

    return () => window.removeEventListener("scroll", scrollYPos);
  });

  return (
    <header
      className={`${header
          ? "py-6 shadow-lg bg-tertiary"
          : "py-6 bg-transparent"
        } sticky top-0 z-30 transition-all 
              ${pathname === "/" && "bg-[#fef9f5]"}`}
    >
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Logo />
          <div className="flex items-center gap-x-6">
            <Nav
              containerStyles="hidden xl:flex gap-x-8 items-center"
              linkStyles="relative hover:text-primary transition-all"
              underlineStyles="absolute left-0 top-full h-[2px] 
                        bg-primary w-full"
            />

            <div className="xl:hidden">
              <MobileNav />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
