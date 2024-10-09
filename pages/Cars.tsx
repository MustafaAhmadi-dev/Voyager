import { useCars } from "../features/cars/useCars";
import CarItem from "../features/cars/CarItem";
import useUser from "../features/authentication/useUser";

import BookBanner from "../components/BookBanner";
import HeroPage from "../components/HeroPage";

import CarTableOperations from "../features/cars/CarTableOperations";
import CarTable from "../features/cars/CarTable";
import AddCar from "../features/cars/AddCar";

import Container from "../ui/Container";
import GridBox from "../ui/GridBox";
import Spinner from "../ui/Spinner";
import Row from "../ui/Row";

function Cars() {
  const { cars, isLoading } = useCars();
  const { isAuthenticated } = useUser();

  if (isLoading) return <Spinner />;

  return (
    <>
      <section className="dark:bg-slate-900">
        <HeroPage sectionName="Vehicle Models" />

        {isAuthenticated ? (
          <div className="pt-12">
            <Row variant="horizontal">
              <h1>All vehicles</h1>
              <CarTableOperations />
            </Row>

            <Row>
              <CarTable cars={cars} />
              <AddCar />
            </Row>
          </div>
        ) : (
          <Container>
            <GridBox>
              {cars?.map((car) => (
                <CarItem key={car.id} car={car} />
              ))}
            </GridBox>
          </Container>
        )}

        <BookBanner />
      </section>
    </>
  );
}

export default Cars;
