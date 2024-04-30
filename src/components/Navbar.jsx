import { useState } from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { IoMdClose, IoMdMenu } from "react-icons/io";
import Logo from "../assets/logo/logo.png";

const variations = {
  open: css`
    left: 0;
  `,
};
const StyledMobileNavbar = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: -100%;
  background: linear-gradient(
    to bottom right,
    var(--color-grey-300) 75%,
    var(--color-orange-100) 25%
  );
  z-index: 999999;
  justify-content: center;
  align-items: center;
  transition: all 0.5s ease-in-out;

  ${(props) => variations[props.variation]}
`;

const StyledIcon = styled.div`
  font-size: 3rem;
  position: absolute;
  top: 3.5rem;
  right: 3.5rem;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    color: var(--color-orange-100);
  }
`;

const StyledMobileLinks = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  font-size: 2.5rem;
  gap: 6rem;
  text-align: center;

  li {
    a {
      text-decoration: none;
      color: var(--color-grey-900);
      font-weight: 500;
      transition: all 0.3s;

      &:hover {
        color: var(--color-orange-100);
      }
    }
  }
`;

const StyledNavbar = styled.div`
  max-width: 133rem;
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  background-color: transparent;
  z-index: 99999;
  margin: 0 auto;
`;

const StyledHamb = styled.div`
  font-size: 2.8rem;
  display: none;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    color: var(--color-orange-100);
  }

  @media (max-width: 1000px) {
    display: flex;
  }
`;

function Navbar() {
  const [nav, setNav] = useState(false);

  const openNav = () => {
    setNav(!nav);
  };

  return (
    <>
      <nav>
        {/* mobile */}
        <StyledMobileNavbar variation={`${nav ? "open" : ""}`}>
          <StyledIcon onClick={openNav}>
            <IoMdClose width={30} height={30} />
          </StyledIcon>

          <StyledMobileLinks>
            <li>
              <Link onClick={openNav} to="/">
                Home
              </Link>
            </li>

            <li>
              <Link onClick={openNav} to="/about">
                About
              </Link>
            </li>

            <li>
              <Link onClick={openNav} to="/contact">
                Contact
              </Link>
            </li>

            <li>
              <Link onClick={openNav} to="/models">
                Vehicle Models
              </Link>
            </li>

            <li>
              <Link onClick={openNav} to="/faq">
                Faq & Download
              </Link>
            </li>
          </StyledMobileLinks>
        </StyledMobileNavbar>

        <StyledNavbar>
          {/* desktop */}
          <DesktopNavbar />

          {/* mobile */}
          <StyledHamb onClick={openNav}>
            <IoMdMenu width={30} height={40} />
          </StyledHamb>
        </StyledNavbar>
      </nav>
    </>
  );
}

export default Navbar;

const StyledImage = styled.div`
  width: 14.5rem;
  img {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 450px) {
    display: none;
  }
`;

const StyledLinks = styled.ul`
  display: flex;
  list-style: none;
  gap: 2.1rem;

  a {
    font-size: 1.6rem;
    font-weight: 500;
    color: var(--color-grey-900);
    text-decoration: none;
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
      color: var(--color-orange-100);
    }
  }

  @media (max-width: 1000px) {
    display: none;
  }
`;

// const StyledBtns = styled.div`
//   display: flex;
//   gap: 2.5rem;
//   font-size: 1.6rem;
//   font-weight: 500;
//   align-items: center;

//   @media (max-width: 1000px) {
//     display: none;
//   }
// `;

// const StyledSignInBtn = styled(Link)`
//   color: var(--color-grey-900);
//   cursor: pointer;
//   transition: all 0.3s;
//   text-decoration: none;

//   &:hover {
//     color: var(--color-orange-100);
//   }
// `;

// const StyledRegisterBtn = styled(Link)`
//   background-color: var(--color-orange-100);
//   color: var(--color-white);
//   padding: 1.5rem 3rem;
//   border-radius: 3px;
//   box-shadow: 0 10px 15px 0 rgb(255 83 48 / 35%);
//   transition: all 0.3s;
//   text-decoration: none;

//   &:hover {
//     box-shadow: 0 10px 15px 0 rgb(255 83 48 / 50%);
//     background-color: var(--color-orange-600);
//   }
// `;

function DesktopNavbar() {
  return (
    <>
      <StyledImage>
        <Link to="/" onClick={() => window.scrollTo(0, 0)}>
          <img src={Logo} alt="logo-img" />
        </Link>
      </StyledImage>

      <StyledLinks>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/about">About</Link>
        </li>

        <li>
          <Link to="/contact">Contact</Link>
        </li>

        <li>
          <Link to="/models">Vehicle Models</Link>
        </li>

        <li>
          <Link to="/faq">Faq & Download</Link>
        </li>
      </StyledLinks>

      {/* <StyledBtns>
        <StyledSignInBtn to="/">Sign In</StyledSignInBtn>

        <StyledRegisterBtn to="/">Register</StyledRegisterBtn>
      </StyledBtns> */}
    </>
  );
}
