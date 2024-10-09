import BookingRow, { BookingPlus } from "./BookingRow";
import useBookings from "./useBookings";
import Menus from "../../ui/Menus";
import Table from "../../ui/Table";
import Pagination from "../../ui/Pagination";
import Spinner from "../../ui/Spinner";

function BookingTable() {
  const { bookings, isLoading, count } = useBookings();

  if (isLoading) return <Spinner />;

  if (!bookings?.length) return <p>No bookings could be found.</p>;

  return (
    <Menus>
      <Table columns="0.6fr 2fr 2fr 1.8fr 1fr 3.2rem">
        <Table.Header>
          <div>Car</div>
          <div>Customer</div>
          <div>Dates</div>
          <div>Departure & Return Location</div>
          <div>Amount</div>
          <div></div>
        </Table.Header>

        <Table.Body
          data={bookings as BookingPlus[]}
          render={(booking: BookingPlus) => (
            <BookingRow key={booking.id} booking={booking} />
          )}
        />

        <Table.Footer>
          <Pagination count={count as number} />
        </Table.Footer>
      </Table>
    </Menus>
  );
}

export default BookingTable;
