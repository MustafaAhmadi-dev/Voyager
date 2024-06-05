import styled from "styled-components";

import SelectCar from "../assets/plan/icon1.png";
import Contact from "../assets/plan/icon2.png";
import Drive from "../assets/plan/icon3.png";

import Container from "../ui/Container";
import { GridBox } from "../ui/GridBox";

const StyledSection = styled.section`
  background-color: var(--color-grey-50);
  padding: 5.3rem 0;
`;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledTitle = styled.div`
  margin: 0 auto;
  text-align: center;
  color: var(--color-grey-900);

  h3 {
    font-weight: 500;
  }

  h2 {
    margin: 1.3rem 0 3rem 0;
  }
`;

const StyledBox = styled.div`
  text-align: center;
  padding: 1rem 6rem;

  @media (max-width: 500px) {
    padding: 1rem 1rem;
  }

  img {
    width: 17rem;
    height: auto;
  }

  h3 {
    margin-bottom: 1rem;
  }

  p {
    color: var(--color-grey-700);
    line-height: 1.43;
  }
`;

function PlanTrip() {
  return (
    <>
      <StyledSection>
        <Container>
          <StyledContainer>
            <StyledTitle>
              <h3>Plan your trip now</h3>
              <h2>Quick & easy car rental</h2>
            </StyledTitle>

            <GridBox>
              <StyledBox>
                <img src={SelectCar} alt="icon_img" />
                <h3>Select Car</h3>
                <p>
                  We offers a big range of vehicles for all your driving needs.
                  We have the perfect car to meet your needs
                </p>
              </StyledBox>

              <StyledBox>
                <img src={Contact} alt="icon_img" />
                <h3>Contact Operator</h3>
                <p>
                  Our knowledgeable and friendly operators are always ready to
                  help with any questions or concerns
                </p>
              </StyledBox>

              <StyledBox>
                <img src={Drive} alt="icon_img" />
                <h3>{`Let's Drive`}</h3>
                <p>
                  {`Whether you're hitting the open road, we've got you covered
                  with our wide range of cars`}
                </p>
              </StyledBox>
            </GridBox>
          </StyledContainer>
        </Container>
      </StyledSection>
    </>
  );
}

export default PlanTrip;
