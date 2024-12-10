"use client";

import Button from "@/_components/ui/Button";
import Modal from "@/_components/ui/Modal";
import { useVoyager } from "@/app/voyagerContext";
import { Car } from "@/types";
import Image from "next/image";
import BookCarForm from "./BookCarForm";
import PersonalInfo from "@/_components/PersonalInfo";
import { useState } from "react";

function CarItem({ car }: { car: Car }) {
  const { chooseCar, resetOrder, pickUpDate, dropOffDate, pickUp, dropOff } =
    useVoyager();
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const noCarChosen =
    pickUpDate === "" || dropOffDate === "" || pickUp === "" || dropOff === "";

  function handleClick() {
    chooseCar(car);
    setModalIsOpen(true);
  }

  return (
    <div className="rounded-lg border-solid border-slate-200 dark:border-slate-800 border-2 bg-slate-100 dark:bg-slate-700 flex flex-col justify-between">
      <div className=" rounded-md relative aspect-video">
        <Image src={car.image} alt="car_img" className="object-cover" fill />
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

        <div>
          <CarBox label="Brand" details={car.mark} />
          <CarBox label="Seats" details={car.num_seats} />
          <CarBox label="Transmission" details={car.transmission} />
          <CarBox label="Fuel" details={car.fuel} />
          <CarBox label="Location" details={car.location} />
        </div>
      </div>

      <Modal>
        <Modal.Open opens="form">
          <Button size="large" onClick={() => handleClick()}>
            Book Ride
          </Button>
        </Modal.Open>

        {modalIsOpen && (
          <Modal.Window name="form">
            <>
              {noCarChosen ? (
                <BookCarForm modal={true} />
              ) : (
                <PersonalInfo
                  onCloseModal={() => {
                    setModalIsOpen(false);
                    resetOrder();
                  }}
                />
              )}
            </>
          </Modal.Window>
        )}
      </Modal>
    </div>
  );
}

function CarBox({
  label,
  details,
}: {
  label: string;
  details: string | number;
}) {
  return (
    <div className="grid grid-cols-[1fr,3fr] items-center m-4 gap-3 text-center">
      <div className="bg-slate-200 dark:bg-slate-600 text-xl">{label}</div>
      <div className="bg-slate-100 dark:bg-slate-800">{details}</div>
    </div>
  );
}

export default CarItem;
