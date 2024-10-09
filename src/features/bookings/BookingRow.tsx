import { useNavigate } from "react-router-dom";
import { format, isToday } from "date-fns";
import { HiEye, HiTrash } from "react-icons/hi2";
import { Booking } from "../../services/apiBooking";
import { useDeleteBooking } from "../booking/useDeleteBooking";
import {
  formatCurrency,
  formatDistanceFromNow,
  subtractDates,
} from "../../utils/helper";
import Modal from "../../ui/Modal";
import Menus from "../../ui/Menus";
import Table from "../../ui/Table";
import ConfirmDelete from "../../ui/ConfirmDelete";

export type BookingPlus = {
  cars: { name: string };
  customers: { fullName: string; email: string; country?: string };
  id: number;
} & Booking;

function BookingRow({ booking }: { booking: BookingPlus }) {
  const {
    cars: { name: car },
    customers: { fullName: customerName, email: email },
    id: bookingId,
    pickUpDate,
    dropOffDate,
    pickUpLocation,
    dropOffLocation,
    totalPrice,
  } = booking;
  const navigate = useNavigate();
  const { deleteBooking, isDeleting } = useDeleteBooking();

  const daysRide = subtractDates(dropOffDate, pickUpDate);

  return (
    <Table.Row>
      <div className="text-gray-600 font-semibold text-3xl">{car}</div>

      <div className="flex flex-col gap-1">
        <span className="font-[500]">{customerName || "Unknown"}</span>
        <span className="text-gray-500 text-xl">
          {email || "Not Registered"}
        </span>
      </div>

      <div className="flex flex-col gap-1">
        {isToday(new Date(pickUpDate))
          ? "Today"
          : formatDistanceFromNow(pickUpDate)}{" "}
        &rarr; {daysRide === 0 ? 1 : daysRide} day ride
        <span>
          {format(new Date(pickUpDate), "MMM dd yyyy")} &mdash;{" "}
          {format(new Date(dropOffDate), "MMM dd yyyy")}
        </span>
      </div>

      <div className="flex flex-col gap-1">
        {pickUpLocation} &rarr; {dropOffLocation}
      </div>
      {/* 
          
     */}

      <div className="font-[500]">{formatCurrency(totalPrice)}</div>

      <Modal>
        <Menus.Menu>
          <Menus.Toggle id={bookingId.toString()} />
          <Menus.List id={bookingId.toString()}>
            <Menus.Button
              icon={<HiEye />}
              onClick={() => navigate(`/bookings/${bookingId}`)}
            >
              See details
            </Menus.Button>

            <Modal.Open opens="delete">
              <Menus.Button icon={<HiTrash />} disabled={isDeleting}>
                delete Booking
              </Menus.Button>
            </Modal.Open>
          </Menus.List>
        </Menus.Menu>

        <Modal.Window name="delete">
          <ConfirmDelete
            resourceName="booking"
            onConfirm={() => deleteBooking(bookingId)}
            disabled={isDeleting}
          />
        </Modal.Window>
      </Modal>
    </Table.Row>
  );
}

export default BookingRow;
