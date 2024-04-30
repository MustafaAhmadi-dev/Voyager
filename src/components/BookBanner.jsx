import styled from "styled-components";
import Container from "../ui/Container";
import { FaPhoneVolume } from "react-icons/fa6";

const StyledBookBanner = styled.div`
  display: flex;
  width: 100%;
  height: 20rem;
  assets: url("/src/assets/banners/book-banner.png");
  position: relative;
  margin-top: 7rem;

  @media (max-width: 750px) {
    height: fit-content;
    padding: 1rem 0;
  }
`;

const StyledOverlay = styled.div`
  background-color: #2d2d2d;
  opacity: 0.89;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
`;

const StyledText = styled.div`
  color: var(--color-white);
  z-index: 5;
  position: relative;
  width: 100%;
  height: 20rem;
  display: flex;
  align-items: center;
  gap: 5rem;

  @media (max-width: 750px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    text-align: center;
  }

  h2 {
    font-size: 3.2rem;
  }

  span {
    display: flex;
    font-size: 2.7rem;
    gap: 1rem;
    align-items: center;
    color: var(--color-orange-50);
    white-space: nowrap;
  }
`;

function BookBanner() {
  return (
    <div>
      <StyledBookBanner>
        <StyledOverlay></StyledOverlay>
        <Container>
          <StyledText>
            <h2>Book a car by getting in touch with us</h2>
            <span>
              <FaPhoneVolume width={40} height={40} />
              <h3>(123) 456-7869</h3>
            </span>
          </StyledText>
        </Container>
      </StyledBookBanner>
    </div>
  );
}

export default BookBanner;
