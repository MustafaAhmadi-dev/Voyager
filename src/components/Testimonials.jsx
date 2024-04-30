import styled, { css } from "styled-components";
import { BsFillChatQuoteFill } from "react-icons/bs";
import Container from "../ui/Container";
import Img2 from "../assets/testimonials/pfp1.jpg";
import Img3 from "../assets/testimonials/pfp2.jpg";

const StyledSection = styled.section`
  background-color: var(--color-grey-50);
  padding: 10rem 0;
  color: var(--color-grey-900);
`;

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledTitle = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  text-align: center;
  max-width: 70rem;
  margin-bottom: 5rem;

  h4 {
    font-size: 2.2rem;
    font-weight: 500;
  }

  h2 {
    font-size: 2.4rem;
    margin-bottom: 1.4rem;
  }

  p {
    line-height: 1.4;
  }
`;

const StyledTestimonial = styled.div`
  display: flex;
  gap: 3rem;
  width: 100%;
  justify-content: center;
  padding: 3rem;

  @media (max-width: 1000px) {
    padding: 0;
  }
`;

const boxes = {
  secondary: css`
    @media (max-width: 900px) {
      display: none;
    }
  `,
};
const StyledBox = styled.div`
  background-color: var(--color-white);
  box-shadow: 0 20px 40px 0 rgb(0 0 0 / 8%);
  width: 54rem;
  padding: 5.5rem;
  position: relative;

  @media (max-width: 1000px) {
    padding: 5rem 3rem;
  }

  p {
    font-size: 2.2rem;
    font-weight: 500;
  }

  ${(props) => boxes[props.box]}
`;

const StyledIcon = styled.div`
  font-size: 6.2rem;
  color: var(--color-orange-100);
  position: absolute;
  bottom: 33px;
  right: 60px;

  @media (max-width: 470px) {
    display: none;
  }
`;

const StyledProfile = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
  margin-top: 3rem;

  img {
    width: 7rem;
    height: 7rem;
    border-radius: 50%;
  }

  h4 {
    font-size: 1.8rem;
  }

  p {
    font-weight: 400;
  }
`;

function Testimonials() {
  return (
    <>
      <StyledSection >
        <Container>
          <StyledContent>
            <StyledTitle>
              <h4>Reviewed by People</h4>
              <h2>Client's Testimonials</h2>
              <p>
                Discover the positive impact we've made on the our clients by
                reading through their testimonials. Our clients have experienced
                our service and results, and they're eager to share their
                positive experiences with you.
              </p>
            </StyledTitle>

            <StyledTestimonial>
              <StyledBox>
                <StyledIcon>
                  <BsFillChatQuoteFill width={60} height={60} />
                </StyledIcon>
                <p>
                  &ldquo;We rented a car from this website and had a{" "}
                  <b>magical</b> experience! The booking was easy and the rates
                  were very affordable.&rdquo;
                </p>
                <div style={{ display: "flex" }}>
                  <StyledProfile>
                    <img src={Img2} alt="user_img" />
                    <span>
                      <h4>Harry Potter</h4>
                      <p>Hogwarth</p>
                    </span>
                  </StyledProfile>
                </div>
              </StyledBox>

              <StyledBox box="secondary">
                <StyledIcon>
                  <BsFillChatQuoteFill width={60} height={60} />
                </StyledIcon>
                <p>
                  &ldquo;The car was in great condition and made our trip even
                  better. I <b>highly</b> recommend this car rental
                  website!&rdquo;
                </p>
                <div style={{ display: "flex" }}>
                  <StyledProfile>
                    <img src={Img3} alt="user_img" />
                    <span>
                      <h4>Ron Weasley</h4>
                      <p>Gryffindor</p>
                    </span>
                  </StyledProfile>
                </div>
              </StyledBox>
            </StyledTestimonial>
          </StyledContent>
        </Container>
      </StyledSection>
    </>
  );
}

export default Testimonials;
