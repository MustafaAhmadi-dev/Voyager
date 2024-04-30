import styled from "styled-components";

import Footer from "../components/Footer";
import HeroPages from "../components/HeroPages";
import BookBanner from "../components/BookBanner";

import Container from "../ui/Container";
import { CAR_DATA } from "../../data/CarData";
import Model from "../components/Model";

const StyledDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  gap: 3rem;
  align-items: center;
  text-align: center;
  padding: 10rem 0;
  width: 110rem;
  margin: 0 auto;

  @media (max-width: 1150px) {
    grid-template-columns: 1fr 1fr;
    width: fit-content;
  }

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    width: fit-content;
  }
`;

function Models() {
  const cars = CAR_DATA;
  return (
    <section>
      <HeroPages name="Vehicle Models" />

      <Container>
        <StyledDiv>
          {cars.map((car) => (
            <Model key={car.id} car={car} />
          ))}
        </StyledDiv>
      </Container>

      <BookBanner />

      <Footer />
    </section>
  );
}

export default Models;
