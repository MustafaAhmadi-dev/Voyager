import { format, isToday } from "date-fns";
import ReactCountryFlag from "react-country-flag";
import { HiOutlineCurrencyDollar, HiOutlineHomeModern } from "react-icons/hi2";
import {
  formatCurrency,
  formatDistanceFromNow,
  subtractDates,
} from "../../utils/helper";
import DataItem from "../../ui/DataItem";
import { BookingPlus } from "../bookings/BookingRow";

function BookingDataBox({ booking }: { booking: BookingPlus }) {
  const {
    // id,
    created_at,
    dropOffDate,
    pickUpDate,
    totalPrice,
    cars: { name: carName },
    customers: { fullName: customerName, email, country },
  } = booking;
  const daysRide = subtractDates(dropOffDate, pickUpDate);

  return (
    <section className=" bg-gray-100 dark:bg-gray-800 dark:text-slate-200 rounded-md border-2 border-solid border-gray-200 overflow-hidden">
      <header className="flex items-center justify-between py-8 px-8 text-slate-200 bg-sky-500 text-3xl">
        <div className="flex items-center justify-center">
          <HiOutlineHomeModern className="w-12 h-12" />
          <p className="flex items-center gap-6 font=[600] text-2xl">
            {daysRide} days enjoying the ride with
            <span className="text-4xl ml-16">{carName}</span>
          </p>
        </div>

        <p>
          {format(new Date(pickUpDate), "EEE, MMM dd yyyy")} (
          {isToday(new Date(pickUpDate))
            ? "Today"
            : formatDistanceFromNow(pickUpDate)}
          ) &mdash; {format(new Date(dropOffDate), "EEE, MMM dd yyyy")}
        </p>
      </header>
      <section className="pt-12 pr-16 pb-5">
        <div className="flex flex-col items-center gap-8 mb-9 text-gray-500 dark:text-slate-200">
          <ReactCountryFlag
            countryCode={country as string}
            style={{ fontSize: "2em" }}
          />
          <p className="font-[500] text-gray-700 dark:text-slate-100">
            {customerName}
          </p>
          <p className="dark:text-slate-200">{email}</p>
        </div>

        <div className="flex items-center justify-between py-6 px-12 mt-10 rounded-sm bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-slate-200">
          <DataItem Icon={HiOutlineCurrencyDollar} label={`Total price`}>
            {formatCurrency(totalPrice)}
          </DataItem>
        </div>
      </section>

      <footer className="py-6 px-16 text-gray-500 dark:text-slate-300 text-right">
        <p className="dark:text-slate-200">
          Booked {format(new Date(created_at as string), "EEE, MMM dd yyyy, p")}
        </p>
      </footer>
    </section>
  );
}

export default BookingDataBox;
