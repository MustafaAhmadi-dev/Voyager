import { FaCarSide, FaGasPump } from "react-icons/fa";
import { GiGearStick } from "react-icons/gi";
import { MdAirlineSeatReclineNormal } from "react-icons/md";
import { Car } from "./useCars";
import { useVoyager } from "../../context/VoyagerContext";
import BookCarForm from "../bookings/BookCarForm";
import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import PersonalInfo from "../bookings/PersonalInfo";

type CarItemPops = {
  car: Car;
};
function CarItem({ car }: CarItemPops) {
  const { chooseCar, pickUpDate, dropOffDate, pickUp, dropOff } = useVoyager();

  const noCarChosen =
    pickUpDate === "" || dropOffDate === "" || pickUp === "" || dropOff === "";

  function handleClick() {
    chooseCar(car);
  }

  return (
    <div className="rounded-lg border-solid border-slate-200 dark:border-slate-800 border-2 bg-slate-100 dark:bg-slate-700 flex flex-col justify-between">
      <div className="w-full h-auto rounded-md">
        <img
          src={car.image}
          alt="car_img"
          className="w-full h-60 object-cover"
        />{" "}
      </div>

      <div className="py-8 px-8 flex flex-col justify-between">
        <div className="flex justify-between items-center">
          <div className="flex flex-col text-left gap-2">
            <p className="text-3xl md:text-4xl font-semibold dark:text-slate-100">
              {car.name}
            </p>
          </div>

          <div className="flex flex-col text-center dark:text-slate-100">
            <h4 className="text-2xl md:text-3xl">{car.regular_price}$</h4>
            <p className="dark:text-slate-100">per day</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-y-8 gap-x-28 mt-10 mb-8 mx-auto pb-10 rounded-b text-2xl md:text-3xl text-gray-600 dark:text-gray-300">
          <span className="flex justify-between items-center font-semibold text-left">
            <FaCarSide /> &nbsp; {car.mark}
          </span>

          <span className="flex justify-between items-center font-semibold text-right">
            {car.num_seats} &nbsp; <MdAirlineSeatReclineNormal />
          </span>

          <span className="flex justify-between items-center font-semibold text-left">
            <GiGearStick /> &nbsp; {car.transmission}
          </span>

          <span className="flex justify-between items-center font-semibold text-right">
            {car.fuel} &nbsp; <FaGasPump />
          </span>

          <span className="font-semibold text-left">Available in</span>

          <span className="font-semibold text-center">{car.location}</span>
        </div>
      </div>

      <Modal>
        <Modal.Open opens="form">
          <Button size="large" onClick={() => handleClick()}>
            Book Ride
          </Button>
        </Modal.Open>

        <Modal.Window name="form">
          <>{noCarChosen ? <BookCarForm modal={true} /> : <PersonalInfo />}</>
        </Modal.Window>
      </Modal>
    </div>
  );
}

export default CarItem;
