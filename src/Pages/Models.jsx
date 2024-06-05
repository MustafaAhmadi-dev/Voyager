import { useLoaderData } from "react-router-dom";
import Footer from "../components/Footer";
import HeroPages from "../components/HeroPages";
import BookBanner from "../components/BookBanner";
import CarItem from "../features/cars/CarItem";

import Container from "../ui/Container";
import { GridBox } from "../ui/GridBox";

import { getAllCars } from "../services/apiCars";

function Models() {
  const cars = useLoaderData();
  return (
    <section>
      <HeroPages name="Vehicle Models" />

      <Container>
        <GridBox>
          {cars.map((car) => (
            <CarItem key={car.id} car={car} />
          ))}
        </GridBox>
      </Container>

      <BookBanner />

      <Footer />
    </section>
  );
}

export async function loader() {
  const cars = await getAllCars();
  return cars;
}

export default Models;
