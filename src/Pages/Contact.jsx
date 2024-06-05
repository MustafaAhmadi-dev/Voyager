import styled from "styled-components";

import ContactDetails from "../features/contact/ContactDetails";
import ContactForm from "../features/contact/ContactForm";

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

function Contact() {
  return (
    <section>
      <HeroPages name="Contact" />

      <Container>
        <StyledDiv>
          <ContactDetails />

          <ContactForm />
        </StyledDiv>
      </Container>

      <BookBanner />

      <Footer />
    </section>
  );
}

export default Contact;
