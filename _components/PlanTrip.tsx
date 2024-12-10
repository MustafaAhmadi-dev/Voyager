import Image from "next/image";
import SelectCar from "@/public/assets/plan/icon1.png";
import Contact from "@/public/assets/plan/icon2.png";
import Drive from "@/public/assets/plan/icon3.png";
import Container from "./ui/Container";
import GridBox from "./ui/GridBox";

function PlanTrip() {
  return (
    <>
      <section className="bg-gray-100 dark:bg-slate-900 dark:text-slate-100 py-20 px-0">
        <Container>
          <div className="flex flex-col">
            <div className="my-0 mx-auto text-center text-gray-800 dark:text-slate-100">
              <h3 className="font-semibold">Plan your trip now</h3>
              <h2 className="mx-0 mt-5 ml-12 dark:text-slate-100">
                Quick & easy car rental
              </h2>
            </div>

            <GridBox>
              <div className="text-center py-4 px-4 md:px-24 flex flex-col items-center">
                <Image
                  src={SelectCar}
                  alt="icon_img"
                  className="w-64 text-center h-auto"
                />
                <h3 className="mb-4">Select Car</h3>
                <p className="text-gray-700 dark:text-slate-300">
                  We offer a big range of vehicles for all your driving needs.
                  We have the perfect car to meet your needs
                </p>
              </div>

              <div className="text-center py-4 px-4 md:px-24 flex flex-col items-center">
                <Image src={Contact} alt="icon_img" className="w-64 h-auto" />
                <h3 className="mb-4">Contact Operator</h3>
                <p className="text-gray-700 dark:text-slate-300">
                  Our knowledgeable and friendly operators are always ready to
                  help with any questions or concerns
                </p>
              </div>

              <div className="text-center py-4 px-4 md:px-24 flex flex-col items-center">
                <Image src={Drive} alt="icon_img" className="w-64 h-auto" />
                <h3 className="mb-4">{`Let's Drive`}</h3>
                <p className="text-gray-700 dark:text-slate-300">
                  {`Whether you're hitting the open road, we've got you covered
                  with our wide range of cars`}
                </p>
              </div>
            </GridBox>
          </div>
        </Container>
      </section>
    </>
  );
}

export default PlanTrip;
