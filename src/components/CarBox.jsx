import { useState } from "react";
import { Link } from "react-router-dom";

function CarBox({ selectedCar }) {
  const [carLoading, setCarLoading] = useState(false);
  const car = selectedCar;

  return (
    <div className="box-cars">
      <div className="pick-car">
        {carLoading && <span className="loader"></span>}
        <img
          style={{ display: carLoading ? "none" : "block" }}
          src={car.img}
          alt="car_img"
          onLoad={() => setCarLoading(false)}
        />
      </div>

      {/* description */}
      <div className="pick-description">
        <div className="pick-description__price">
          <span>${car.price}</span>/ rent per day
        </div>

        <div className="pick-description__table">
          <Details name="Model" value={car.model} />
          <Details name="Mark" value={car.mark} />
          <Details name="Year" value={car.year} />
          <Details name="Doors" value={car.doors} />
          <Details name="AC" value={car.air} />
          <Details name="Transmission" value={car.transmission} />
          <Details name="Fuel" value={car.fuel} />
        </div>

        {/* btn cta */}
        <Link className="cta-btn" to="/booking-section">
          Reserve Now
        </Link>
        {/* <a  href="#">

            </a> */}
      </div>
    </div>
  );
}

function Details({ name, value }) {
  return (
    <div className="pick-description__table__col">
      <span>{name}</span>
      <span>{value}</span>
    </div>
  );
}

export default CarBox;
