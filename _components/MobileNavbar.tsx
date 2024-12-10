import { mobileNavItems } from "@/constants";
import { MobileNavbarProps } from "@/types";
import Link from "next/link";
import { IoMdClose } from "react-icons/io";

export default function MobileNavbar({
  openNav,
  open,
  isAuthenticated,
}: MobileNavbarProps) {
  return (
    <div
      className={
        open
          ? "flex flex-col justify-center items-center w-1/2 h-dvh fixed top-0 z-50 transition-all bg-gradient-to-br from-gray-400 to-orange opacity-90"
          : "hidden"
      }
    >
      <div
        onClick={openNav}
        className="text-5xl absolute top-14 right-14 transition-all cursor-pointer hover:text-orange"
      >
        <IoMdClose width={30} height={30} />
      </div>

      <ul className="flex flex-col text-center list-none text-4xl gap-24">
        {isAuthenticated ? (
          <li>
            <Link
              href="/bookings"
              onClick={openNav}
              className="no-underline text-gray-600 font-semibold transition-all hover:text-gray-800"
            >
              Dashboard
            </Link>
          </li>
        ) : (
          <li>
            <Link
              href="/"
              onClick={openNav}
              className="no-underline text-gray-600 font-semibold transition-all hover:text-gray-800"
            >
              Home
            </Link>
          </li>
        )}

        {mobileNavItems.map((item) => (
          <li key={item.url}>
            <Link
              href={item.url}
              onClick={openNav}
              className="no-underline text-gray-600 font-semibold transition-all hover:text-gray-800"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
