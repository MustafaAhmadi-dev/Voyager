import Image from "next/image";
import BGShape from "@/public/assets/hero/hero-bg.png";
import HeroCar from "@/public/assets/hero/main-car.png";
import Container from "./ui/Container";

function Hero() {
  return (
    <>
      <section className="h-[50dvh] md:h-[68dvh] w-full relative bg-gradient-to-t from-gray-300 dark:from-gray-300 from-35% to-orange dark:to-gray-600 to-65% md:bg-none md:bg-gray-200 dark:md:bg-gray-800">
        <Container>
          <Image
            src={BGShape}
            alt="BackGround Image"
            className="hidden md:block absolute top-0 right-0 z-10"
          />
          <div className="h-[60dvh] md:h-[68dvh] w-full flex sm:items-center justify-center sm:justify-start items-baseline relative pt-20 text-3xl dark:text-slate-300">
            <div className="flex flex-col text-center md:text-left items-center justify-center md:items-start z-20 max-w-[28rem] lg:max-w-[40rem]">
              <h4 className="text-4xl font-bold">Plan your trip now</h4>

              <div className="mt-8 mb-10 font-semibold">
                Save <span className="text-orange">big</span> with our car
                rental
              </div>

              <div className="mb-16 dark:text-slate-700 dark:sm:text-slate-300">
                Rent the car of your dreams. Unbeatable prices, unlimited miles,
                flexible pick-up options and much more.
              </div>
            </div>

            <Image
              src={HeroCar}
              alt="Car Image"
              className="hidden md:block z-30 absolute right-0 w-4/6 mt-20"
            />
          </div>
        </Container>
      </section>
    </>
  );
}

export default Hero;
