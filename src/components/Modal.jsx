import styled from "styled-components";
import { TfiClose } from "react-icons/tfi";
import { TiInfo } from "react-icons/ti";

import CarInfo from "./CarInfo";
import PersonalInfo from "./PersonalInfo";

import { useVoyager } from "../contexts/VoyagerContext";

const StyledModal = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 999999999;
  top: 0;
  right: 0;
`;

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  overflow-x: hidden;
  overflow-y: scroll;
  z-index: 999999999999;
  top: 54%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 83rem;
  height: 100vh;
  border: var(--border-light);
  background-color: var(--color-grey-50);
  padding-right: 2px;
  color: var(--color-grey-900);

  @media (max-width: 800px) {
    width: 100%;
  }

  @media (max-width: 600px) {
    top: 50%;
  }
`;

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 1.5rem;
  background-color: var(--color-orange-50);
  color: var(--color-white);
  align-items: center;

  h2 {
    font-size: 2.4rem;
    text-transform: uppercase;
  }
`;

const StyledIcon = styled(TfiClose)`
  font-size: 2.5rem;
  color: rgba(255, 255, 255, 0.919);
  cursor: pointer;
  transition: all 0.4;

  &:hover {
    color: var(--color-brand-200);
  }
`;

const Message = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 2rem 3rem;
  background-color: var(--color-orange-0);

  h4 {
    font-size: 1.9rem;
    font-weight: 700;
    color: var(--color-orange-50);

    i {
      font-size: 2.5rem;
    }
  }

  p {
    font-size: 1.7rem;
    font-weight: 500;
    line-height: 1.6;
  }
`;

function Modal() {
  const { dispatch } = useVoyager();

  return (
    <>
      <StyledModal>
        <StyledContent>
          {/* title */}
          <Title>
            <h2>Complete Reservation</h2>
            <StyledIcon onClick={() => dispatch({ type: "modalClosed" })} />
          </Title>

          {/* message */}
          <Message>
            <h4>
              <TiInfo /> Upon completing this reservation enquiry, you will
              receive:
            </h4>
            <p>
              Your rental voucher to produce on arrival at the rental desk and a
              toll-free customer support number.
            </p>
          </Message>

          <CarInfo />

          <PersonalInfo />
        </StyledContent>
      </StyledModal>
    </>
  );
}

export default Modal;
