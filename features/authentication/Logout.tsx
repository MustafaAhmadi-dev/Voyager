import { HiArrowRightOnRectangle } from "react-icons/hi2";
import SpinnerMini from "../../ui/SpinnerMini";
import { useLogOut } from "./useAuth";

function Logout() {
  const { logout, isLoggingOut } = useLogOut();

  return (
    <button
      disabled={isLoggingOut}
      onClick={logout}
      className="bg-none border-none p-2 rounded-sm transition-all hover:bg-gray-200 dark:hover:bg-gray-700"
    >
      {!isLoggingOut ? (
        <HiArrowRightOnRectangle className="w-16 h-11 text-gray-800 dark:text-slate-100" />
      ) : (
        <SpinnerMini />
      )}
    </button>
  );
}

export default Logout;
