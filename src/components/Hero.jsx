import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { IconChevronRight, IconCircleCheck } from "@tabler/icons-react";

import BgShape from "../images/hero/hero-bg.png";
import HeroCar from "../images/hero/main-car.png";

function Hero() {
  const [goUp, setGoUp] = useState(false);

  useEffect(() => {
    const onPageScroll = () => {
      if (window.scrollY > 600) {
        setGoUp(true);
      } else {
        setGoUp(false);
      }
    };
    window.addEventListener("scroll", onPageScroll);

    return () => {
      window.removeEventListener("scroll", onPageScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: (0, 0), behavior: "smooth" });
  };

  const bookBtn = () => {
    document
      .querySelector(".booking-section")
      .scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <section id="home" className="hero-section">
        <div className="container">
          <img className="bg-shape" src={BgShape} alt="bg-shape" />
          <div className="hero-content">
            <div className="hero-content__text">
              <h4>Plan your trip now</h4>
              <h1>
                Save <span>big</span> with our car rental
              </h1>
              <p>
                Rent the car of your dreams. Unbeatable prices, unlimited miles,
                flexible pick-up options and much more.
              </p>
              <div className="hero-content__text__btns">
                <Link
                  className="hero-content__text__btns__book-ride"
                  to="/"
                  onClick={() => bookBtn()}
                >
                  Book Ride &nbsp; <IconCircleCheck />
                </Link>
                <Link
                  className="hero-content__text__btns__learn-more"
                  to="/about"
                >
                  Learn More &nbsp; <IconChevronRight />
                </Link>
              </div>
            </div>

            {/* img */}
            <img
              src={HeroCar}
              alt="car-img"
              className="hero-content__car-img"
            />
          </div>
        </div>

        {/* page up */}
        <div
          onClick={scrollToTop}
          className={`scroll-up ${goUp ? "show-scroll" : ""}`}
        >
          ^
        </div>
      </section>
    </>
  );
}

export default Hero;
