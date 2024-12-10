"use client";

import { HiArrowRightOnRectangle } from "react-icons/hi2";
import { logOut } from "@/_lib/actions/user.actions";
import { useState } from "react";
import { handleError } from "@/_lib/utils";
import SpinnerMini from "./ui/SpinnerMini";

export default function Logout() {
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  function handleLogOut() {
    setIsLoggingOut(true);
    try {
      logOut();
    } catch (error) {
      handleError(error, "Failed to log out user!!!");
    } finally {
      setIsLoggingOut(false);
    }
  }
  return (
    <button
      disabled={isLoggingOut}
      onClick={handleLogOut}
      className="bg-none border-none p-2 rounded-sm transition-all hover:bg-gray-200 dark:hover:bg-gray-700"
    >
      {isLoggingOut ? (
        <SpinnerMini />
      ) : (
        <HiArrowRightOnRectangle className="w-16 h-11 text-gray-800 dark:text-slate-100" />
      )}
    </button>
  );
}
