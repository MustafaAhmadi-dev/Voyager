import styled from "styled-components";
import Hero from "../components/Hero";
import BookCar from "../features/booking/BookCar";

const StyledHome = styled.main`
  max-width: 100dvw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function Home() {
  return (
    <>
      {" "}
      <StyledHome>
        <Hero />
        <BookCar />
      </StyledHome>
    </>
  );
}

export default Home;
