import Container from "../ui/Container";
import styled from "styled-components";
import { FaPhoneVolume } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";

const StyledFooter = styled.footer`
  background-color: var(--color-grey-50);
  padding: 10rem 0;
`;

const StyledContent = styled.div`
  display: grid;
  color: #010103;
  grid-template-columns: 27fr 21fr 21fr 21fr;
  gap: 8rem;
  justify-content: center;
  text-align: left;
  color: var(--color-grey-900);

  @media (max-width: 1100px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 650px) {
    grid-template-columns: 1fr;
  }
`;
const StyledContent1 = styled.ul`
  list-style: none;
  // max-width: 30rem;

  @media (max-width: 650px) {
    text-align: center;
  }

  li {
    a {
      text-decoration: none;
      color: var(--color-grey-900);
      transition: all 0.2s;

      &:hover {
        color: var(--color-orange-100);
      }
    }

    &:nth-child(1) {
      font-size: 2.4rem;
      margin-bottom: 1.5rem;

      span {
        font-weight: 700;
      }
    }

    &:nth-child(2) {
      font-size: 1.6rem;
      color: var(--color-grey-700);
      line-height: 1.7;
      margin-bottom: 3rem;
    }

    &:nth-child(3),
    &:nth-child(4) {
      font-size: 1.6rem;
      font-weight: 500;
      margin-bottom: 1rem;
    }
  }
`;

const StyledContent2 = styled.ul`
  list-style: none;

  @media (max-width: 650px) {
    text-align: center;
  }

  a {
    text-decoration: none;
    color: var(--color-grey-900);
    transition: all 0.2s;

    &:hover {
      color: var(--color-orange-100);
    }
  }

  li {
    font-size: 1.6rem;
    margin-bottom: 1rem;

    &:nth-child(1) {
      font-size: 2.4rem;
      font-weight: 700;
      text-transform: uppercase;
      font-family: var(--font-title);
      cursor: auto;
    }
  }

  input {
    font-size: 14px;
    font-weight: 400;
    line-height: 26px;
    background-color: var(--color-grey-50);
    border-width: 1px;
    border-color: transparent;
    padding: 10px 60px;
    outline: none;
    margin-top: 1rem;

    @media (max-width: 1100px) {
      width: 100%;
    }
  }
`;

const StyledButton = styled.button`
  text-decoration: none;
  color: var(--color-white);
  font-weight: 700;
  background-color: var(--color-orange-200);
  padding: 1.5rem 2.5rem;
  border-radius: 0.3rem;
  box-shadow: 0 10px 15px 0 rgb(255 83 48 / 25%);
  transition: all 0.3s;
  border: 2px solid var(--color-orange-200);
  font-size: 1.6rem;
  width: fit-content;
  cursor: pointer;
  width: 100%;

  &:hover {
    box-shadow: 0 10px 15px 0 rgb(255 83 48 / 40%);
    background-color: var(--color-orange-600);
  }
`;

function Footer() {
  return (
    <>
      <StyledFooter>
        <Container>
          <StyledContent>
            <StyledContent1>
              <li>
                <span>CAR</span> Rental
              </li>
              <li>
                We offers a big range of vehicles for all your driving needs. We
                have the perfect car to meet your needs.
              </li>
              <li>
                <a href="tel:123456789">
                  <FaPhoneVolume /> &nbsp; (123) -456-789
                </a>
              </li>

              <li>
                <a
                  href="mailto: 
                carrental@gmail.com"
                >
                  <IoIosMail />
                  &nbsp; carrental@gmail.com
                </a>
              </li>

              <li>
                <a
                  style={{ fontSize: "14px" }}
                  target="_blank"
                  rel="noreferrer"
                  href="https://xpeedstudio.com/"
                >
                  Design by XpeedStudio
                </a>
              </li>
            </StyledContent1>

            <StyledContent2>
              <li>Company</li>
              <li>
                <a href="#home">New York</a>
              </li>
              <li>
                <a href="#home">Careers</a>
              </li>
              <li>
                <a href="#home">Mobile</a>
              </li>
              <li>
                <a href="#home">Blog</a>
              </li>
              <li>
                <a href="#home">How we work</a>
              </li>
            </StyledContent2>

            <StyledContent2>
              <li>Working Hours</li>
              <li>Mon - Fri: 9:00AM - 9:00PM</li>
              <li>Sat: 9:00AM - 19:00PM</li>
              <li>Sun: Closed</li>
            </StyledContent2>

            <StyledContent2>
              <li>Subscription</li>
              <li>
                <p>Subscribe your Email address for latest news & updates.</p>
              </li>
              <li>
                <input type="email" placeholder="Enter Email Address"></input>
              </li>
              <li>
                <StyledButton>Submit</StyledButton>
              </li>
            </StyledContent2>
          </StyledContent>
        </Container>
      </StyledFooter>
    </>
  );
}

export default Footer;
