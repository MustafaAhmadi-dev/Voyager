"use client";

import { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { User } from "@supabase/supabase-js";
import { useOutsideClick } from "@/_lib/hooks/useoOutsideClick";
import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";
import { useColorMode } from "@/app/colorModeContext";

export default function Navbar({ user }: { user?: User | null }) {
  const isAuthenticated = user?.role === "authenticated";
  const [nav, setNav] = useState(false);
  const { toggleColorMode, isDarkMode } = useColorMode();
  const ref = useOutsideClick(() => setNav(false));

  function openNav() {
    setNav(!nav);
  }

  return (
    <>
      <nav
        className="w-full h-24 bg-gray-100 dark:bg-slate-900 dark:text-white mb-4"
        ref={ref}
      >
        <div className="flex justify-between items-center  pt-4 px-8 absolute top-0 left-0 right-0 my-0 mx-auto">
          <div
            onClick={openNav}
            className=" text-5xl flex md:hidden transition-all cursor-pointer hover:text-orange"
          >
            <IoMdMenu width={30} height={40} />
          </div>
          <DesktopNavbar
            isAuthenticated={isAuthenticated}
            isDarkMode={isDarkMode}
            toggleColorMode={toggleColorMode}
            user={user}
          />
        </div>
      </nav>

      {nav && (
        <MobileNavbar
          open={nav}
          openNav={openNav}
          isAuthenticated={isAuthenticated}
        />
      )}
    </>
  );
}
