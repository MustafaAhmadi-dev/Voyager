import BookingTable from "../features/bookings/BookingTable";
import BookingTableOperations from "../features/bookings/BookingTableOperations";
import Row from "../ui/Row";

function Bookings() {
  return (
    <div className=" h-dvh pt-12 -mt-4 bg-gray-200 dark:bg-gray-800 dark:text-slate-200">
      <Row variant="horizontal">
        <h1>All Bookings</h1>
        <BookingTableOperations />
      </Row>
      <BookingTable />
    </div>
  );
}

export default Bookings;
