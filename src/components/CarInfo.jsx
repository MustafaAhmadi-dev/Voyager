import { IconMapPinFilled } from "@tabler/icons-react";

import CarAudi from "../images/cars-big/audia1.jpg";
import CarGolf from "../images/cars-big/golf6.jpg";
import CarToyota from "../images/cars-big/toyotacamry.jpg";
import CarBmw from "../images/cars-big/bmw320.jpg";
import CarMercedes from "../images/cars-big/benz.jpg";
import CarPassat from "../images/cars-big/passatcc.jpg";

function CarInfo({ order }) {
  const { pickTime, dropTime, pickUp, dropOff, carType } = order;
  // based on value name show car img
  let imgUrl;
  switch (carType) {
    case "Audi A1 S-Line":
      imgUrl = CarAudi;
      break;
    case "VW Golf 6":
      imgUrl = CarGolf;
      break;
    case "Toyota Camry":
      imgUrl = CarToyota;
      break;
    case "BMW 320 ModernLine":
      imgUrl = CarBmw;
      break;
    case "Mercedes-Benz GLK":
      imgUrl = CarMercedes;
      break;
    case "VW Passat CC":
      imgUrl = CarPassat;
      break;
    default:
      imgUrl = "";
  }

  return (
    <>
      <div className="booking-modal__car-info">
        <div className="dates-div">
          <CarInfoBox
            header="Location & Date"
            Icon={IconMapPinFilled}
            title="Pick-Up Date & Time"
          >
            {pickTime} / <input type="time" className="input-time"></input>
          </CarInfoBox>

          <CarInfoBox Icon={IconMapPinFilled} title="Drop-Off Date & Time">
            {dropTime} / <input type="time" className="input-time"></input>
          </CarInfoBox>

          <CarInfoBox Icon={IconMapPinFilled} title="Pick-Up Location">
            {pickUp || "Belgrade"}
          </CarInfoBox>

          <CarInfoBox Icon={IconMapPinFilled} title="Drop-Off Location">
            {dropOff || "Belgrade"}
          </CarInfoBox>
        </div>

        <div className="booking-modal__car-info__model">
          <h5>
            <span>Car -</span> {carType || "VW Golf 6"}
          </h5>
          <img src={imgUrl || CarGolf} alt="car_img" />
        </div>
      </div>
    </>
  );
}

function CarInfoBox({ header, Icon, title, children }) {
  return (
    <div className="booking-modal__car-info__dates">
      {header && <h5>{header}</h5>}
      <span>
        <Icon />
        <div>
          <h6>{title}</h6>
          <p>{children}</p>
        </div>
      </span>
    </div>
  );
}
export default CarInfo;
