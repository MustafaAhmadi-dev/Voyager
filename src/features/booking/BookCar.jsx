import styled from "styled-components";
import BookCarForm from "./BookCarForm";
import Container from "../../ui/Container";
import Heading from "../../ui/Heading";

const StyledSection = styled.section`
  position: relative;
  background: linear-gradient(
    to bottom,
    var(--color-grey-100) 20%,
    var(--color-white) 80%
  );

  @media (max-width: 800px) {
    background: linear-gradient(
      to bottom,
      var(--color-grey-300) 35%,
      var(--color-orange-100) 65%
    );
  }
`;

const Box = styled.div`
  margin: 0 auto;
  width: 90dvw;
  padding: 4rem 4.5rem 5rem 5.5rem;
  box-shadow: var(--shadow-lg);
  height: auto;
  position: relative;
  z-index: 4;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  color: var(--color-grey-900);

  @media (max-width: 800px) {
    padding: 4rem 3.5rem 5rem 4rem;
  }

  @media (max-width: 450px) {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 4rem 2.5rem 5rem 2.5rem;
  }
`;

function BookCar() {
  return (
    <>
      <StyledSection>
        <Container>
          <Box>
            <Heading as="h2" style={{ marginBottom: "2.7rem" }}>
              Book a car
            </Heading>

            <BookCarForm />
          </Box>
        </Container>
      </StyledSection>
    </>
  );
}

export default BookCar;
