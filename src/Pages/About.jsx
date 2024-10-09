import styled from "styled-components";

import HeroPages from "../components/HeroPages";
import PlanTrip from "../components/PlanTrip";
import Testimonials from "../components/Testimonials";
import BookBanner from "../components/BookBanner";
import Footer from "../components/Footer";
import ChooseUs from "../components/ChooseUs";

import Container from "../ui/Container";
import RevealOnScroll from "../ui/RevealOnScroll";

const StyledMain = styled.div`
  margin: 10rem auto;
  display: flex;
  gap: 5rem;
  max-width: 90rem;
  align-items: center;

  @media (max-width: 960px) {
    display: grid;
    grid-template-columns: 1fr;
    text-align: center;
    max-width: 49rem;
  }

  @media (max-width: 520px) {
    margin: 1rem auto;
    max-width: 100%;
  }
`;

function About() {
  return (
    <>
      <section>
        <HeroPages name="Voyager" />
        <Container>
          <StyledMain>
            <ChooseUs />
          </StyledMain>

          <RevealOnScroll>
            <PlanTrip />
          </RevealOnScroll>
        </Container>
      </section>

      <RevealOnScroll>
        <Testimonials />
      </RevealOnScroll>

      <RevealOnScroll>
        <BookBanner />
      </RevealOnScroll>

      <Footer />
    </>
  );
}

export default About;
