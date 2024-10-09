import styled from "styled-components";
import { GiPositionMarker } from "react-icons/gi";

import { useVoyager } from "../contexts/VoyagerContext";

const StyledInfo = styled.div`
  background-color: var(--color-grey-50);
  padding: 3rem 3rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  border-bottom: var(--border-dark);

  @media (max-width: 650px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

const StyledModel = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;

  @media (max-width: 650px) {
    margin-top: 3.5rem;
  }

  h5 {
    font-size: 1.8rem;
    color: var(--color-orange-100);

    span {
      color: var(--color-grey-900);
    }
  }

  img {
    width: 100%;
    height: auto;
  }
`;

function CarInfo() {
  const { dropOffDate, pickUpDate, pickUp, dropOff, car } = useVoyager();


  return (
    <>
      <StyledInfo>
        <StyledDiv>
          <CarInfoBox header="Location & Date" title="Pick-Up Date ">
            {pickUpDate}
          </CarInfoBox>

          <CarInfoBox title="Drop-Off Date ">{dropOffDate}</CarInfoBox>

          <CarInfoBox title="Pick-Up Location">{pickUp}</CarInfoBox>

          <CarInfoBox title="Drop-Off Location">{dropOff}</CarInfoBox>
        </StyledDiv>

        <StyledModel>
          <h5>
            <span>Car -</span> {car.name}
          </h5>
          <img src={car.image} alt="car_img" />
        </StyledModel>
      </StyledInfo>
    </>
  );
}

const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  h5 {
    font-size: 1.8rem;
    color: var(--color-orange-100);
  }

  span {
    display: flex;
    gap: 1rem;

    @media (max-width: 650px) {
      grid-template-columns: 1fr;
      text-align: center;
      justify-content: center;
    }

    h6 {
      font-size: 1.5rem;
      margin-bottom: 0.2rem;
    }
  }
`;

const StyledIcon = styled(GiPositionMarker)`
  font-size: 1.8rem;
  padding-top: 0.2rem;
  color: var(--color-orange-100);

  @media (max-width: 650px) {
    display: none;
  }
`;

function CarInfoBox({ header, title, children }) {
  return (
    <InfoBox>
      {header && <h5>{header}</h5>}
      <span>
        <StyledIcon />
        <div>
          <h6>{title}</h6>
          <p>{children}</p>
        </div>
      </span>
    </InfoBox>
  );
}
export default CarInfo;
