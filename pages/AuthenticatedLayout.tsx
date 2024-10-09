import { Outlet } from "react-router-dom";

function AuthenticatedLayout() {
  return (
    <>
      <Outlet />
    </>
  );
}

export default AuthenticatedLayout;
