/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaChevronCircleRight } from "react-icons/fa";

import Container from "../ui/Container";
import MainImg from "../assets/chooseUs/main.png";
import Box1 from "../assets/chooseUs/icon1.png";
import Box2 from "../assets/chooseUs/icon2.png";
import Box3 from "../assets/chooseUs/icon3.png";
import RevealOnScroll from "../ui/RevealOnScroll";

const StyledSection = styled.section`
  background-color: var(--color-white);
  padding: 2rem 0 10rem 0;
  background-image: url("/src/assets/chooseUs/bg.png");
  background-position: -225px 255px;
  background-size: cover;
  background-repeat: no-repeat;
`;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledImage = styled.img`
  width: 90%;
  height: auto;
  margin: 0 auto;

  @media (max-width: 550px) {
    width: 100%;
  }
`;

const StyledText = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 3rem;
  width: 100%;

  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 5.5rem;
  }
`;

const StyledTextLeft = styled.div`
  text-align: left;
  display: flex;
  flex-direction: column;
  max-width: 50rem;
  color: var(--color-grey-900);

  @media (max-width: 1000px) {
    align-items: center;
    text-align: center;
  }

  h4 {
    font-size: 2.2rem;
    margin-bottom: 0.7rem;
    font-weight: 600;
  }

  h2 {
    line-height: 1.2;
    margin-bottom: 2rem;
  }

  p {
    line-height: 1.5;
    margin-bottom: 3.3rem;
  }

  a {
    text-decoration: none;
    color: var(--color-white);
    font-weight: 700;
    background-color: var(--color-orange-200);
    padding: 1.5rem 2.5rem;
    border-radius: 0.3rem;
    box-shadow: 0 10px 15px 0 rgb(255 83 48 / 35%);
    transition: all 0.3s;
    border: var(--border-theme);
    font-size: 1.6rem;
    width: fit-content;

    &:hover {
      box-shadow: 0 10px 15px 0 rgb(255 83 48 / 60%);
      background-color: var(--color-orange-400);
    }
  }
`;

const StyledTextRight = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4.5rem;
  max-width: 44rem;
`;

const StyledBox = styled.div`
  display: flex;

  @media (max-width: 550px) {
    flex-direction: column;
    align-items: center;
  }

  img {
    width: 11rem;
    height: 11rem;
    margin-right: 1.1rem;
  }
`;

const StyledBoxText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;

  h4 {
    font-size: 2.4rem;
  }

  p {
    line-height: 1.3;
  }
`;

function ChooseUs() {
  return (
    <>
      <StyledSection>
        <Container>
          <StyledContainer>
            <StyledImage src={MainImg} alt="car_img" />

            <RevealOnScroll>
              <StyledText>
                <StyledTextLeft>
                  <h4>Why Choose Us</h4>
                  <h2>Best valued deals you will ever find</h2>
                  <p>
                    Discover the best deals you'll ever find with our unbeatable
                    offers. We're dedicated to providing you with the best value
                    for your money, so you can enjoy top-quality services and
                    products without breaking the bank. Our deals are designed
                    to give you the ultimate renting experience, so don't miss
                    out on your chance to save big.
                  </p>
                  <Link to="/">
                    Book a Car &nbsp;
                    <FaChevronCircleRight />
                  </Link>
                </StyledTextLeft>

                <StyledTextRight>
                  <StyledBox>
                    <img src={Box1} alt="car-img" />

                    <StyledBoxText>
                      <h4>Cross Country Drive</h4>
                      <p>
                        Take your driving experience to the next level with our
                        top-notch vehicles for your cross-country adventures.
                      </p>
                    </StyledBoxText>
                  </StyledBox>

                  <StyledBox>
                    {" "}
                    <img src={Box2} alt="coin-img" />
                    <StyledBoxText>
                      <h4>All Inclusive Pricing</h4>
                      <p>
                        Get everything you need in one convenient, transparent
                        price with our all-inclusive pricing policy.
                      </p>
                    </StyledBoxText>
                  </StyledBox>

                  <StyledBox>
                    {" "}
                    <img src={Box3} alt="coin-img" />
                    <StyledBoxText>
                      <h4>No Hidden Charges</h4>
                      <p>
                        Enjoy peace of mind with our no hidden charges policy.
                        We believe in transparent and honest pricing.
                      </p>
                    </StyledBoxText>
                  </StyledBox>
                </StyledTextRight>
              </StyledText>
            </RevealOnScroll>
          </StyledContainer>
        </Container>
      </StyledSection>
    </>
  );
}

export default ChooseUs;
