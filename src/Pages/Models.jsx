import { Link } from "react-router-dom";
import { IconCar, IconPhone } from "@tabler/icons-react";

import Footer from "../components/Footer";
import HeroPages from "../components/HeroPages";
import { CAR_DATA } from "../../data/CarData";

function Models() {
  const cars = CAR_DATA;
  return (
    <section>
      <HeroPages name="Vehicle Models" />

      <div className="container">
        <div className="models-div">
          {cars.map((car) => (
            <Model key={car.id} car={car} />
          ))}
        </div>
      </div>

      <div className="book-banner">
        <div className="book-banner__overlay"></div>
        <div className="container">
          <div className="text-content">
            <h2>Book a car by getting in touch with us</h2>
            <span>
              <IconPhone width={40} height={40} />
              <h3>(123) 456-7869</h3>
            </span>
          </div>
        </div>
      </div>

      <Footer />
    </section>
  );
}

function Model({ car }) {
  return (
    <div className="models-div__box">
      <div className="models-div__box__img">
        <img src={car.img} alt="car_img" />
        <div className="models-div__box__descr">
          <div className="models-div__box__descr__name-price">
            <div className="models-div__box__descr__name-price__name">
              <p>{car.name}</p>
            </div>
            <div className="models-div__box__descr__name-price__price">
              <h4>${car.price}</h4>
              <p>per day</p>
            </div>
          </div>

          <div className="models-div__box__descr__name-price__details">
            <span>
              <IconCar /> &nbsp; {car.mark}
            </span>

            <span style={{ textAlign: "right" }}>
              {car.doors} &nbsp; <IconCar />
            </span>

            <span>
              <IconCar /> &nbsp; {car.transmission}
            </span>

            <span style={{ textAlign: "right" }}>
              {car.fuel} &nbsp; <IconCar />
            </span>
          </div>

          <div className="models-div__box__descr__name-price__btn">
            <Link onClick={() => window.scrollTo(0, 0)} to="/">
              Book Ride
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Models;
