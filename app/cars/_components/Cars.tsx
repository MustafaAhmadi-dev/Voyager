import { getAllCars } from "@/_lib/actions/cars.actions";
import { getCurrentUser } from "@/_lib/actions/user.actions";
import CarTableOperations from "./CarTableOperations";
import CarTable from "./CarTable";
import AddCar from "./AddCar";
import GridBox from "@/_components/ui/GridBox";
import Row from "@/_components/ui/Row";
import CarList from "./CarList";
import Container from "@/_components/ui/Container";

export default async function Cars() {
  const cars = await getAllCars();
  const user = await getCurrentUser();
  const isAuthenticated = user?.role === "authenticated";
  //   const isAuthenticated = true;

  return (
    <>
      {isAuthenticated ? (
        <div className="pt-12">
          <Row variant="horizontal">
            <h1>All vehicles</h1>
            <CarTableOperations />
          </Row>

          <Row>
            {/* <CarTable cars={cars} /> */}
            <CarTable />
            <AddCar />
          </Row>
        </div>
      ) : (
        <Container>
          <GridBox>
            <CarList cars={cars} />
          </GridBox>
        </Container>
      )}
    </>
  );
}
