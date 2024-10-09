import Hero from "../components/Hero";
import BookCar from "../features/bookings/BookCar";

function Home() {

  return (
    <main className="max-w-[100dvw] flex flex-col items-center justify-center bg-gray-200 dark:bg-gray-800 -mt-4">
      <Hero />
      <BookCar />
    </main>
  );
}

export default Home;
