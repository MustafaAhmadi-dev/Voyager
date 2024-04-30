import styled from "styled-components";
import { MdLocationCity } from "react-icons/md";
import { IoIosMail, IoMdMailOpen } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";

import Footer from "../components/Footer";
import HeroPages from "../components/HeroPages";
import BookBanner from "../components/BookBanner";

import Container from "../ui/Container";

const StyledDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  margin: 0 auto;
  color: var(--color-grey-900);
  padding: 10rem 2rem;
  background-image: url("/src/assets/banners/bg-contact.png");
  background-size: auto;
  background-position: center center;
  background-repeat: no-repeat;

  @media (max-width: 950px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const StyledText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 41rem;

  @media (max-width: 950px) {
    margin: 0 auto;
    margin-bottom: 2rem;
  }

  h2 {
    line-height: 1.3;
    margin-bottom: 2rem;
  }

  p {
    color: var(--color-grey-700);
    line-height: 1.6;
    margin-bottom: 2rem;
  }

  a {
    text-decoration: none;
    color: var(--color-grey-900);
    font-size: 1.6rem;
    font-weight: 500;
    transition: all 0.2s;
    margin-bottom: 0.5rem;

    &:hover {
      color: var(--color-orange-100);
    }
  }
`;

const StyledForm = styled.div`
  display: flex;
  flex-direction: column;

  form {
    display: flex;
    flex-direction: column;

    label {
      font-size: 1.6rem;
      font-weight: 600;
      margin-bottom: 1rem;

      b {
        color: var(--color-orange-100);
      }
    }

    input {
      background-color: var(--color-grey-100);
      padding: 19px 30px 19px 30px;
      font-size: 1.6rem;
      border: none;
      outline: none;
      margin-bottom: 2.3rem;
    }

    textarea {
      background-color: var(--color-grey-100);
      height: 18rem;
      padding: 19px 30px 19px 30px;
      font-size: 1.6rem;
      border: none;
      outline: none;
      margin-bottom: 2.5rem;
    }

    button {
      background-color: var(--color-orange-200);
      padding: 1.8rem 3rem;
      border-radius: 0.3rem;
      box-shadow: 0 10px 15px 0 rgb(255 83 48 / 35%);
      transition: all 0.3s;
      border: var(--border-theme);
      color: var(--color-white);
      font-size: 1.8rem;
      font-weight: 600;
      cursor: pointer;

      &:hover {
        box-shadow: 0 10px 15px 0 rgb(255 83 48 / 60%);
        background-color: var(--color-orange-400);
      }
    }
  }
`;

function Contact() {
  return (
    <>
      <section>
        <HeroPages name="Contact" />

        <Container>
          <StyledDiv>
            <StyledText>
              <h2>Need additional information?</h2>
              <p>
                Just tell us what you want to know and we will get in touch
                ASAP😎 <br /> <br />
                Also we would be glad to hear your ideas 🤩
              </p>
              <a href="/">
                <FaPhone /> &nbsp; (123) 456-7869
              </a>
              <a href="/">
                <IoIosMail /> &nbsp; carrental@carmail.com
              </a>
              <a href="/">
                <MdLocationCity />
                &nbsp; 💞Land, Earth🌎
              </a>
            </StyledText>

            <StyledForm>
              <form>
                <label>
                  Full Name <b>*</b>
                </label>
                <input type="text" placeholder='E.g: "Joe Shmoe"'></input>

                <label>
                  Email <b>*</b>
                </label>
                <input type="email" placeholder="youremail@example.com"></input>

                <label>
                  Tell us about it <b>*</b>
                </label>
                <textarea placeholder="Write Here.."></textarea>

                <button type="submit">
                  <IoMdMailOpen />
                  &nbsp; Send Message
                </button>
              </form>
            </StyledForm>
          </StyledDiv>
        </Container>

        <BookBanner />

        <Footer />
      </section>
    </>
  );
}

export default Contact;
