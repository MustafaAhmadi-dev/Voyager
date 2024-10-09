import styled from "styled-components";

import Container from "../ui/Container";
import Heading from "../ui/Heading";

import BgShape from "../assets/hero/hero-bg.png";
import HeroCar from "../assets/hero/main-car.png";

const StyledHero = styled.section`
  width: 100%;
  height: 68dvh;
  background-color: var(--color-grey-50);
  position: relative;

  @media (max-width: 450px) {
    height: 50dvh;
    background: linear-gradient(
      to top,
      var(--color-grey-300) 35%,
      var(--color-orange-50) 65%
    );
  }
`;

const StyledBG = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;

  @media (max-width: 800px) {
    display: none;
  }
`;

const HeroContent = styled.div`
  width: 100%;
  height: 68dvh;
  display: flex;
  align-items: center;
  position: relative;

  @media (max-width: 800px) {
    justify-content: center;

    /* background-color: var(--color-grey-200); */
  }

  @media (max-width: 450px) {
    height: 60dvh;
    align-items: baseline;
    padding-top: 5rem;
  }
`;

const HeroText = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 3;
  max-width: 50rem;
  margin-top: 5rem;

  @media (max-width: 800px) {
    text-align: center;
    align-items: center;
  }

  span {
    color: var(--color-orange-400);
  }
`;

const CarImage = styled.img`
  z-index: 2;
  position: absolute;
  right: 0;
  width: 65%;
  margin-top: 5rem;

  @media (max-width: 800px) {
    display: none;
  }
`;

function Hero() {
  return (
    <>
      <StyledHero id="home">
        <Container>
          <StyledBG src={BgShape} alt="bg-shape" />

          <HeroContent>
            <HeroText>
              <Heading as="h4">Plan your trip now</Heading>

              <Heading style={{ marginTop: "1rem", marginBottom: "2.3rem" }}>
                Save <span>big</span> with our car rental
              </Heading>

              <Heading as="p" style={{ marginBottom: "4rem" }}>
                Rent the car of your dreams. Unbeatable prices, unlimited miles,
                flexible pick-up options and much more.
              </Heading>
            </HeroText>

            {/* img */}
            <CarImage src={HeroCar} alt="car-img" className="car-img" />
          </HeroContent>
        </Container>
      </StyledHero>
    </>
  );
}

export default Hero;
