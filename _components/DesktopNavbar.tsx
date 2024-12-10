import Image from "next/image";
import Link from "next/link";
import { FaMoon, FaSun } from "react-icons/fa6";
import { DesktopNavbarProps } from "@/types";
import Logo from "@/public/assets/logo/logo.png";
import { dashboardNavItems, desktopNavItems } from "@/constants";
import UserAvatar from "./ui/UserAvatar";
import { User } from "@supabase/supabase-js";
import Logout from "./LogOut";

export default function DesktopNavbar({
  user,
  isAuthenticated,
  isDarkMode,
  toggleColorMode,
}: DesktopNavbarProps) {
  return (
    <>
      <div className="flex gap-12 items-center justify-center">
        <div className=" md:block w-40 dark:bg-slate-600 rounded-xl">
          <Link href="/">
            <Image src={Logo} alt="Logo" className="w-full h-full" />
          </Link>
        </div>

        <ul className="hidden md:flex no-underline gap-8 font-serif dark:text-white text-gray-800">
          {isAuthenticated ? (
            <>
              {dashboardNavItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.url}
                    className="text-2xl font-semibold transition-all cursor-pointer hover:text-orange"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </>
          ) : (
            <>
              {desktopNavItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.url}
                    className="text-2xl font-semibold transition-all cursor-pointer hover:text-orange"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </>
          )}
        </ul>
      </div>

      <div className="flex gap-8 items-center justify-center">
        {isAuthenticated ? (
          <>
            <UserAvatar user={user as User} />
            <div className="flex gap-10 font-semibold items-center text-gray-800 dark:text-white">
              <div>
                <Logout />
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="flex gap-10 font-semibold items-center">
              <Link
                href="/sign-in"
                className="py-2 px-4 font-serif text-gray-800 dark:text-white transition-all cursor-pointer hover:text-orange"
              >
                Log in
              </Link>
            </div>
          </>
        )}
        <div
          onClick={() => toggleColorMode()}
          className="text-gray-600 dark:text-white text-5xl shadow-sm transition-all cursor-pointer hover:text-gray-900 dark:hover:text-slate-300"
        >
          {isDarkMode ? <FaSun /> : <FaMoon />}
        </div>
      </div>
    </>
  );
}
