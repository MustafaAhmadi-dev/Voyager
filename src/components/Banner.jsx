import styled from "styled-components";
import Container from "../ui/Container";

const StyledBanner = styled.section`
  width: 100%;
  height: auto;
  display: flex;
  background-color: #2d2d2d;
  margin: 8rem 0;
  padding: 6rem 0;
  text-align: center;
`;

const StyledContent = styled.div`
  color: white;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  align-items: center;
`;

const StyledText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  h2 {
    font-size: 5.2rem;
    line-height: 1.3;

    @media (max-width: 550px) {
      font-size: 4.2rem;
    }
  }

  p {
    font-size: 2.4rem;

    @media (max-width: 550px) {
      font-size: 2rem;
    }
  }

  span {
    color: var(--color-orange-50);
    font-weight: 500;
  }
`;
function Banner() {
  return (
    <>
      <StyledBanner>
        <Container>
          <StyledContent>
            <StyledText>
              <h2>Save big with our cheap car rental!</h2>
              <p>
                Top Airports. Local Suppliers. <span>24/7</span> Support.
              </p>
            </StyledText>
          </StyledContent>
        </Container>
      </StyledBanner>
    </>
  );
}

export default Banner;
