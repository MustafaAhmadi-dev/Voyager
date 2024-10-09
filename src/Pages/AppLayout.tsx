import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

function AppLayout() {
  
  return (
    <section className="flex flex-col bg-gray-100 dark:bg-gray-900 dark:text-slate-100 min-h-dvh">
      <Navbar />
      <Outlet />
    </section>
  );
}

export default AppLayout;
