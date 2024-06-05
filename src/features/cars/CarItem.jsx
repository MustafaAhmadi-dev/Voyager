import styled from "styled-components";
import { FaCarSide, FaGasPump } from "react-icons/fa6";
import { GiGearStick } from "react-icons/gi";
import { MdAirlineSeatReclineNormal } from "react-icons/md";

import PersonalInfo from "../../components/PersonalInfo";
import Modal from "../../ui/Modal";
import { useVoyager } from "../../contexts/VoyagerContext";

const StyledBox = styled.div`
  border: 1px solid #d5d5d5;
  border-radius: 0.3rem;
  display: flex;
  width: 35rem;
  flex-direction: column;

  @media (max-width: 400px) {
    grid-template-columns: 1fr;
    width: 100%;
  }
`;
const StyledImage = styled.div`
  width: 100%;
  height: auto;
  border-radius: 0.3rem;

  img {
    width: 100%;
    height: 17rem;
    object-fit: cover;
  }
`;
const StyledDescr = styled.div`
  padding: 2rem 3rem;
  display: flex;
  flex-direction: column;
  color: var(--color-text-grey-900);
`;
const StyledDescrBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const StyledName = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  gap: 0.5rem;

  p {
    font-size: 2.4rem;
    font-weight: 700;
  }

  span {
    display: flex;
    gap: 0.4rem;

    i {
      font-size: 1.4rem;
      color: #ffc933;
    }
  }
`;
const StyledPrice = styled.div`
  display: flex;
  flex-direction: column;
  text-align: right;

  h4 {
    font-size: 2.8rem;
  }
`;
const StyledDetails = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 2rem;
  column-gap: 7rem;
  margin-top: 2.5rem;
  margin: 2rem auto;
  padding-bottom: 2.5rem;
  border-bottom: 1px solid #c6c6c6;

  span {
    font-size: 1.8rem;
    font-weight: 500;
    color: var(--color-grey-900);
    text-align: left;

    i {
      color: var(--color-black);
    }
  }
`;
const StyledButton = styled.button`
  background-color: var(--color-orange-200);
  padding: 1.8rem 3rem;
  border-radius: 0.3rem;
  box-shadow: 0 10px 15px 0 rgb(255 83 48 / 35%);
  transition: all 0.3s;
  border: var(--border-theme);
  font-size: 1.8rem;
  cursor: pointer;
  text-decoration: none;
  color: var(--color-white);
  font-weight: 700;

  &:hover {
    box-shadow: 0 10px 15px 0 rgb(255 83 48 / 60%);
    background-color: var(--color-orange-400);
  }
`;

function CarItem({ car }) {
  const { dispatch,  } = useVoyager();

  function handleClick() {
    dispatch({ type: "carChosen", payload: car });
  }


  return (
    <StyledBox>
      <StyledImage>
        <img src={car.image} alt="car_img" />

        <StyledDescr>
          <StyledDescrBox>
            <StyledName>
              <p>{car.name}</p>
            </StyledName>

            <StyledPrice>
              <h4>${car.regular_price}</h4>
              <p>per day</p>
            </StyledPrice>
          </StyledDescrBox>

          <StyledDetails>
            <span>
              <FaCarSide /> &nbsp; {car.mark}
            </span>

            <span style={{ textAlign: "right" }}>
              {car.num_seats} &nbsp; <MdAirlineSeatReclineNormal />
            </span>

            <span>
              <GiGearStick /> &nbsp; {car.transmission}
            </span>

            <span style={{ textAlign: "right" }}>
              {car.fuel} &nbsp; <FaGasPump />
            </span>

            <span>is Available in </span>

            <span style={{ textAlign: "right" }}>{car.location}</span>
          </StyledDetails>

          <Modal>
            <Modal.Open opens="Book-Car">
              <div>
                <StyledButton onClick={() => handleClick()}>
                  Book Ride
                </StyledButton>
              </div>
            </Modal.Open>

            <Modal.Window name="Book-Car">
              <PersonalInfo />
            </Modal.Window>
          </Modal>
        </StyledDescr>
      </StyledImage>
    </StyledBox>
  );
}

export default CarItem;
