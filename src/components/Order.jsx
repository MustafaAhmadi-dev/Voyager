import styled from "styled-components";
import Snow from "react-canvas-confetti/dist/presets/snow";
import { IoCloudDone } from "react-icons/io5";
import { Link } from "react-router-dom";

const StyledMain = styled.main`
  height: 100lvh;
  margin: 0 auto;
  padding: 10rem;
  background-color: var(--color-orange-400);
`;

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 50lvh;
  margin: 0 auto;
  background-color: var(--color-grey-300);
`;

const StyledIcon = styled(IoCloudDone)`
  font-size: 14rem;
  color: #30e2ff;
`;
const StyledText = styled.div`
  font-size: 4rem;
  text-align: center;
  color: var(--color-orange-100);

  @media (max-width: 800px){
    font-size: 3.4rem;
  }

  @media (max-width: 450px){
    font-size: 2.5rem;
  }
`;

const StyledLinkDiv = styled.div`
  background-color: var(--color-grey-200);
  margin: 5rem auto;
  padding: 2rem;
  border-radius: 20px;
  text-align: center;
  width: fit-content;

  &:hover {
    background-color: var(--color-grey-300);
  }
`;

const StyledLink = styled(Link)`
font-size: 3rem;
  text-decoration: none;
  font-weight: 700;
  color: var(--color-orange-100);
`;

function Order() {
  return (
    <StyledMain>
      <StyledDiv>
        <div>
          <Snow autorun={{ speed: 7 }} />
        </div>
        <div>
          <StyledIcon />
        </div>
        <div>
          <StyledText>Your order was successfully Submitted</StyledText>
        </div>
      </StyledDiv>

      <StyledLinkDiv>
        <StyledLink to="/">Home Page</StyledLink>
      </StyledLinkDiv>
    </StyledMain>
  );
}

export default Order;
