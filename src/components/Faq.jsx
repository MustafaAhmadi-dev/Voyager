import { useState } from "react";
import styled, { css } from "styled-components";
import { FaCaretDown } from "react-icons/fa6";
import Container from "../ui/Container";
import faqData from "../../data/faqData";

const StyledSection = styled.section`
  background-image: url("/src/assets/faq/car.png");
  height: 100dvh;
  padding: 7rem 0;
  margin-top: 3rem;
  background-size: auto;
  background-repeat: no-repeat;
  background-position: 0 70%;

  @media (max-width: 800px) {
    margin-top: 0;
  }
`;

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  color: var(--color-grey-900);
`;

const StyledTitle = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  text-align: center;
  max-width: 80rem;
  line-height: 1.5;

  h5 {
    font-size: 2.2rem;
  }

  h2 {
    margin-bottom: 1.7rem;
  }
`;

const StyledQuestions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5rem;
`;

function Faq() {
  const [curOpen, setCurOpen] = useState(null);

  return (
    <StyledSection>
      <Container>
        <StyledContent>
          <StyledTitle>
            <h5>FAQ</h5>
            <h2>Frequently Asked Questions</h2>
          </StyledTitle>

          <StyledQuestions>
            {faqData.map((data, i) => (
              <FaqItem
                key={i}
                data={data}
                num={"0" + (i + 1)}
                curOpen={curOpen}
                setCurOpen={setCurOpen}
              />
            ))}
          </StyledQuestions>
        </StyledContent>
      </Container>
    </StyledSection>
  );
}

const StyledBox = styled.div`
  display: flex;
  flex-direction: column;
  color: var(--color-grey-900);
  background-color: white;
  box-shadow: 0 10px 15px 0 rgba(0, 0, 0, 0.1);

  width: 80rem;
  cursor: pointer;

  @media (max-width: 850px) {
    width: 100%;
  }
`;

const variations = {
  activeQ: css`
    background-color: var(--color-orange-900);
    color: var(--color-white);
    box-shadow: 0 10px 15px 0 rgb(255 83 48 / 35%);
  `,
  activeA: css`
    max-height: 20rem;
    padding: 2.8rem 4.5rem;
    transition: 0.4s ease;

    @media (max-width: 550px) {
      max-height: 30rem;
    }

    @media (max-width: 420px) {
      max-height: 55rem;
    }
  `,
};

const StyledQuestion = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 3px 6px 0 rgb(0 0 0 / 10%);
  padding: 1.8rem 4.5rem;
  transition: 0.15s ease;

  p {
    font-size: 1.8rem;
    font-weight: 500;
  }

  i {
    font-size: 2rem;
  }
  &:hover {
    background-color: var(--color-orange-100);
  }

  ${(props) => variations[props.variation]}
`;

const StyledAnswer = styled.div`
  font-size: 1.6rem;
  color: var(--color-grey-700);
  line-height: 1.7;
  max-height: 0;
  overflow: hidden;
  transition: 0.4s ease;
  padding: 0 4.5rem;

  ${(props) => variations[props.variation]}
`;

function FaqItem({ data, num, curOpen, setCurOpen }) {
  const isOpen = curOpen === num;

  function handleToggle() {
    setCurOpen(isOpen ? null : num);
  }
  return (
    <StyledBox>
      <StyledQuestion
        onClick={() => handleToggle()}
        variation={`${isOpen ? "activeQ" : ""}`}
      >
        <p>
          {num} {data.question}
        </p>
        <FaCaretDown />
      </StyledQuestion>

      <StyledAnswer variation={`${isOpen ? "activeA" : ""}`}>
        {isOpen && data.answer}
      </StyledAnswer>
    </StyledBox>
  );
}

export default Faq;
