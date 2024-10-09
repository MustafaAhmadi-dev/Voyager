import { useNavigate } from "react-router-dom";
import { useBooking } from "./useBooking";
import { useDeleteBooking } from "./useDeleteBooking";
import ConfirmDelete from "../../ui/ConfirmDelete";
import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import Row from "../../ui/Row";
import Spinner from "../../ui/Spinner";
import BookingDataBox from "./BookingDataBox";

function BookingDetail() {
  const { booking, isLoading } = useBooking();
  const { id: bookingId } = booking;

  const { deleteBooking, isDeleting } = useDeleteBooking();
  const navigate = useNavigate();

  if (isLoading) return <Spinner />;

  if (!booking) {
    return <p>No booking could be found.</p>;
  }

  return (
    <>
      <Row variant="horizontal">
        <div className="flex gap-10 items-center">
          <h1>Booking #{bookingId}</h1>
        </div>
        <button
          className="font-[500] text-sky-800 dark:text-sky-400 text-center transition-all bg-none border-none rounded-sm hover:text-sky-900 dark:hover:text-sky-500"
          onClick={() => navigate(-1)}
        >
          &larr; Back
        </button>
      </Row>

      <BookingDataBox booking={booking} />

      <div className="flex justify-end gap-5">
        <Modal>
          <Modal.Open opens="delete">
            <Button variant="danger">Delete booking</Button>
          </Modal.Open>
          <Modal.Window name="delete">
            <ConfirmDelete
              resourceName="booking"
              disabled={isDeleting}
              onConfirm={() =>
                deleteBooking(bookingId, {
                  onSettled: () => navigate(-1),
                })
              }
            />
          </Modal.Window>
        </Modal>
        <Button variant="secondary" onClick={() => navigate(-1)}>
          Back
        </Button>
      </div>
    </>
  );
}

export default BookingDetail;
