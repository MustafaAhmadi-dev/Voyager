import React from "react";
import { GiPositionMarker } from "react-icons/gi";
import { CarInfoBoxProps, CarInfoProps } from "@/types";
import Image from "next/image";

function CarInfo({
  pickUp,
  pickUpDate,
  dropOff,
  dropOffDate,
  car,
}: CarInfoProps) {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 text-center md:text-left p-12 bg-gray-700 text-slate-200 border-b-gray-900 dark:border-b-slate-400">
        <div className="flex flex-col gap-12">
          <CarInfoBox header="Location & Date" title="Pick-Up Date ">
            {pickUpDate}
          </CarInfoBox>

          <CarInfoBox title="Drop-Off Date ">{dropOffDate}</CarInfoBox>

          <CarInfoBox title="Pick-Up Location">{pickUp}</CarInfoBox>

          <CarInfoBox title="Drop-Off Location">{dropOff}</CarInfoBox>
        </div>

        <div className="flex flex-col gap-12 mt-14 md:mt-0 relative aspect-video">
          <h5 className="text-2xl  text-gray-800 dark:text-slate-200">
            <span className="text-orange">VEHICLE :</span> {car.name}
          </h5>
          <Image src={car.image} alt="car_img" fill className="w-full h-auto" />
        </div>
      </div>
    </>
  );
}

function CarInfoBox({ header, title, children }: CarInfoBoxProps) {
  return (
    <div className="text-center md:text-left md:flex md:flex-col gap-8">
      {header && <h5 className="text-3xl text-orange">{header}</h5>}
      <span className="flex md:flex-col gap-4 items-center md:items-start justify-between md:justify-start">
        <div className="flex items-center justify-center">
          <GiPositionMarker className="text-3xl pt-1 text-orange" />
          <h6 className="text-2xl mb-1">{title}</h6>
        </div>
        <p className="dark:text-slate-300 pl-16">{children}</p>
      </span>
    </div>
  );
}

export default CarInfo;
