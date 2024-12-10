import Container from "@/_components/ui/Container";
import BookCarForm from "./BookCarForm";

function BookCar() {
  return (
    <section className=" w-full bg-gradient-to-b from-gray-300 dark:from-gray-300 from-35% to-orange dark:to-gray-600 to-65% md:bg-gradient-to-b md:from-gray-200 dark:sm:from-gray-600 md:from-20% md:to-white dark:sm:to-gray-800 md:to-80% dark:bg-gray-800">
      <Container>
        <div className="flex justify-center items-center pt-16 pb-20 px-10 md:pt-16 md:pr-14 md:pb-20 md:pl-20 lg:pr-[4.5rem] lg:pl-[5.5rem] my-0 mx-auto w-[90dvw] h-auto shadow-lg z-40  rounded-md text-gray-800 flex-col relative">
          <BookCarForm />
        </div>
      </Container>
    </section>
  );
}

export default BookCar;
