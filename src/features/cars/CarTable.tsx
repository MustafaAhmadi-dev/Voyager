import { useSearchParams } from "react-router-dom";
import { Car } from "./useCars";
import CarRow from "./CarRow";
import Menus from "../../ui/Menus";
import Table from "../../ui/Table";

function CarTable({ cars }: { cars: Car[] | undefined }) {
  const [searchParams] = useSearchParams();

  // 1) FILTER
  const filterValue = searchParams.get("type") || "all";
  let filteredCars: Car[] | undefined;

  if (filterValue === "all") filteredCars = cars;
  if (filterValue === "luxury")
    filteredCars = cars?.filter((car) => car.car_type === "Luxury");
  if (filterValue === "medium-cars")
    filteredCars = cars?.filter((car) => car.car_type === "Medium Cars");
  if (filterValue === "people-carrier")
    filteredCars = cars?.filter((car) => car.car_type === "People Carrier");

  // 2) SORT
  const sortBy = searchParams.get("sortBy") || "startDate-asc";
  const [field, direction] = sortBy.split("-");
  const modifier = direction === "asc" ? 1 : -1;
  const sortedCars =
    filteredCars?.sort((a, b) => (a[field] - b[field]) * modifier) || [];

  return (
    <Menus>
      <Table columns="0.6fr 1.7fr 1.7fr 1.6fr 1fr 1fr">
        <Table.Header>
          <div></div>
          <div>Car</div>
          <div>Seats</div>
          <div>Type of Car</div>
          <div>Price</div>
          <div></div>
        </Table.Header>

        <Table.Body
          data={sortedCars}
          render={(car) => <CarRow car={car} key={car.id} />}
        />
      </Table>
    </Menus>
  );
}

export default CarTable;
