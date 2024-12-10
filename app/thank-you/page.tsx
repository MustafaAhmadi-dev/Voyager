"use client";

import Button from "@/_components/ui/Button";
import { TiInfo } from "react-icons/ti";
import { useVoyager } from "../voyagerContext";
import { useRouter } from "next/navigation";
import CarInfo from "@/_components/CarInfo";

export default function Thank_you() {
  const router = useRouter();
  const { pickUp, pickUpDate, dropOff, dropOffDate, car } = useVoyager();
  const orderIsEmpty = pickUp === "";

  return (
    <>
      <div className="px-12 pt-6 bg-gray-100 dark:bg-gray-800">
        {/* title */}
        <div className="flex items-center justify-between py-4 px-6 bg-gray-700 text-slate-200">
          <h2 className="text-4xl uppercase">
            {orderIsEmpty ? "No Order has been registered" : "Order Registered"}
          </h2>
        </div>

        {orderIsEmpty ? (
          <div className="flex flex-col gap-20 pt-60 my-0 mx-auto">
            <h3>Choose a car and start your delightful journey</h3>
            <Button onClick={() => router.push("/")}>Start Journey</Button>
          </div>
        ) : (
          <>
            <div className="flex flex-col gap-6 py-6 px-12 bg-sky-200">
              <h4 className="text-3xl font-[700] dark:text-slate-500">
                <TiInfo className="text-4xl" /> Upon completing the payment, you
                will receive:
              </h4>
              <p className="text-3xl font-[500] dark:text-slate-700">
                Your rental voucher to produce on arrival at the rental desk and
                a toll-free customer support number.
              </p>
            </div>

            <CarInfo
              pickUp={pickUp}
              pickUpDate={pickUpDate}
              dropOff={dropOff}
              dropOffDate={dropOffDate}
              car={car}
            />

            <div className="flex flex-col gap-6 py-8 px-12 bg-sky-200">
              <p className="text-3xl font-[500] dark:text-slate-700">
                Unfortuanetly, currently we can only accept pay at desk{" "}
              </p>
            </div>
            <Button size="large" style={{ cursor: "not-allowed" }}>
              Pay Online
            </Button>
          </>
        )}
      </div>
    </>
  );
}
