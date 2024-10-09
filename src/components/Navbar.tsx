import { useState } from "react";
import { Link } from "react-router-dom";
import { useColorMode } from "../context/ColorModeContext";
import useUser from "../features/authentication/useUser";
import { IoMdClose, IoMdMenu } from "react-icons/io";
import { FaMoon, FaSun } from "react-icons/fa";
import Logo from "../assets/logo/logo.png";
import UserAvatar from "../features/authentication/UserAvatar";
import Logout from "../features/authentication/Logout";

export default function Navbar() {
  const [nav, setNav] = useState(false);
  const { isAuthenticated } = useUser();
  const { toggleColorMode, isDarkMode } = useColorMode();

  function openNav() {
    setNav(!nav);
    console.log(nav);
  }

  return (
    <>
      <nav className="w-full h-24 bg-gray-100 dark:bg-slate-900 dark:text-white mb-4">
        <div className="flex justify-between items-center  pt-4 px-8 absolute top-0 left-0 right-0 my-0 mx-auto">
          <DesktopNavbar
            isAuthenticated={isAuthenticated}
            toggleColorMode={toggleColorMode}
            isDarkMode={isDarkMode}
          />

          <div
            onClick={openNav}
            className=" text-5xl flex md:hidden transition-all cursor-pointer hover:text-orange"
          >
            <IoMdMenu width={30} height={40} />
          </div>
        </div>
      </nav>

      {nav && (
        <MobileNavber
          open={nav}
          openNav={openNav}
          isAuthenticated={isAuthenticated}
        />
      )}
    </>
  );
}

type DesktopNavbarProps = {
  isAuthenticated: boolean;
  isDarkMode: boolean;
  toggleColorMode: () => void;
};
function DesktopNavbar({
  isAuthenticated,
  isDarkMode,
  toggleColorMode,
}: DesktopNavbarProps) {
  return (
    <>
      <div className="flex gap-12 items-center justify-center">
        <div className=" md:block w-40 dark:bg-slate-600 rounded-xl">
          <Link to="/">
            <img src={Logo} alt="Logo" className="w-full h-full" />
          </Link>
        </div>

        <ul className="hidden md:flex no-underline gap-8 font-serif dark:text-white text-gray-800">
          {isAuthenticated ? (
            <>
              {" "}
              <li>
                <Link
                  to="/bookings"
                  className="text-2xl font-semibold transition-all cursor-pointer hover:text-orange"
                >
                  Dashborad
                </Link>
              </li>
              <li>
                <Link
                  to="/cars"
                  className="text-2xl font-semibold transition-all cursor-pointer hover:text-orange"
                >
                  Vehicles
                </Link>
              </li>
              <li>
                <Link
                  to="/users"
                  className="text-2xl font-semibold transition-all cursor-pointer hover:text-orange"
                >
                  Users
                </Link>
              </li>
              <li>
                <Link
                  to="/account"
                  className="text-2xl font-semibold transition-all cursor-pointer hover:text-orange"
                >
                  Account Settings
                </Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link
                  to="/"
                  className="text-2xl font-semibold transition-all cursor-pointer hover:text-orange"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/cars"
                  className="text-2xl font-semibold transition-all cursor-pointer hover:text-orange"
                >
                  Vehicle Models
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-2xl font-semibold transition-all cursor-pointer hover:text-orange"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  className="text-2xl font-semibold transition-all cursor-pointer hover:text-orange"
                >
                  Faq & Download
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>

      <div className="flex gap-8 items-center justify-center">
        {isAuthenticated ? (
          <>
            <UserAvatar />
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
                to="/login"
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

type MobileNavberProps = {
  isAuthenticated: boolean;
  open: boolean;
  openNav: () => void;
};
function MobileNavber({ openNav, open, isAuthenticated }: MobileNavberProps) {
  return (
    <div
      className={`flex flex-col justify-center items-center w-full h-dvh fixed top-0 z-50 transition-all bg-gradient-to-br from-gray-400 to-orange ${
        open ? "left-0" : "left-[-100%]"
      }`}
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
              to="/bookings"
              onClick={openNav}
              className="no-underline text-gray-600 font-semibold transition-all hover:text-gray-800"
            >
              Dashboard
            </Link>
          </li>
        ) : (
          <li>
            <Link
              to="/"
              onClick={openNav}
              className="no-underline text-gray-600 font-semibold transition-all hover:text-gray-800"
            >
              Home
            </Link>
          </li>
        )}

        <li>
          <Link
            to="/cars"
            onClick={openNav}
            className="no-underline text-gray-600 font-semibold transition-all hover:text-gray-800"
          >
            Vehicle Models
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            onClick={openNav}
            className="no-underline text-gray-600 font-semibold transition-all hover:text-gray-800"
          >
            About Us
          </Link>
        </li>
        <li>
          <Link
            to="/faq"
            onClick={openNav}
            className="no-underline text-gray-600 font-semibold transition-all hover:text-gray-800"
          >
            Faq & Download
          </Link>
        </li>
      </ul>
    </div>
  );
}
