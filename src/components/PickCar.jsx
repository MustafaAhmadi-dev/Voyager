import { useState } from "react";
import { CAR_DATA } from "../../data/CarData";
import CarBox from "./CarBox";

function PickCar() {
  const [selectedCar, setSelectedCar] = useState(null);

  function handleSelection(car) {
    setSelectedCar((cur) => (cur?.id === car.id ? null : car));
  }
  return (
    <section className="pick-section">
      <div className="container">
        <div className="pick-container">
          <div className="pick-container__title">
            <h3>Vehicle Models</h3>
            <h2>Our rental fleet</h2>
            <p>
              Choose from a variety of our amazing vehicles to rent for your
              next adventure or business trip
            </p>
          </div>

          <div className="pick-container__car-content">
            <div className="pick-box">
              {CAR_DATA.map((car) => (
                <button
                  className={selectedCar?.id === car.id ? "active" : ""}
                  key={car.id}
                  onClick={() => {
                    handleSelection(car);
                  }}
                >
                  {car.name}
                </button>
              ))}

            </div>
            {selectedCar && <CarBox selectedCar={selectedCar} />}

          </div>
        </div>
      </div>
    </section>
  );
}

export default PickCar;
