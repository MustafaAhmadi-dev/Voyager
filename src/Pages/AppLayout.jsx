import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import styled from "styled-components";

const StyledOutlet = styled.div``;

function AppLayout() {
  return (
    <>
      <Navbar />
      <StyledOutlet>
        <Outlet />
      </StyledOutlet>
    </>
  );
}

export default AppLayout;
