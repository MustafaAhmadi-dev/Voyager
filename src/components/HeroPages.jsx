import { Link } from "react-router-dom";
import styled from "styled-components";
import Container from "../ui/Container";

const StyledSection = styled.section`
  width: 100%;
  height: 41rem;
  background-image: url("/src/assets/hero/heroes-bg.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;

  @media (max-width: 450px) {
    height: 15rem;
  }
`;

const StyledOverlay = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  background-color: rgba(255, 255, 255, 0.92);
`;

const StyledText = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 3;
  position: relative;
  width: 100%;
  height: 41rem;
  justify-content: center;
  color: var(--color-grey-900);

  h3 {
    font-size: 3.6rem;
    margin-bottom: 0.5rem;
  }

  p {
    font-weight: 600;

    a {
      color: var(--color-grey-900);
      text-decoration: none;
      transition: all 0.2s;

      &:hover {
        color: var(--color-orange-100);
      }
    }
  }

  @media (max-width: 450px) {
    height: 15rem;
  }
`;

function HeroPages({ name }) {
  return (
    <>
      <StyledSection>
        <StyledOverlay></StyledOverlay>
        <Container>
          <StyledText>
            <h3>{name}</h3>
            <p>
              <Link to="/">Home</Link> /
            </p>
          </StyledText>
        </Container>
      </StyledSection>
    </>
  );
}

export default HeroPages;
