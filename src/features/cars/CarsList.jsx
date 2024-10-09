import { useQuery } from "@tanstack/react-query";
import { useVoyager } from "../../contexts/VoyagerContext";
import { getCars } from "../../services/apiCars";
import Spinner from "../../ui/Spinner";
import CarItem from "./CarItem";
import Container from "../../ui/Container";
import { GridBox } from "../../ui/GridBox";
import HeroPages from "../../components/HeroPages";
import Footer from "../../components/Footer";

function CarsList() {
  const { pickUp: location } = useVoyager();

  const { data: cars, isLoading } = useQuery({
    queryKey: ["cars"],
    queryFn: () => getCars(location),
  });

  return (
    <>
      <HeroPages name="List of Available Cars" />

      <Container>
        {isLoading ? (
          <Spinner />
        ) : (
          <GridBox>
            {cars.map((car) => (
              <CarItem key={car.id} car={car} />
            ))}
          </GridBox>
        )}
      </Container>

      <Footer />
    </>
  );
}

export default CarsList;
