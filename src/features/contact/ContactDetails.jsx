import styled from "styled-components";
import { MdLocationCity } from "react-icons/md";
import { IoIosMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";

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

function ContactDetails() {
  return (
    <StyledText>
      <h2>Need additional information?</h2>
      <p>
        Just tell us what you want to know and we will get in touch ASAP😎{" "}
        <br /> <br />
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
  );
}

export default ContactDetails;
