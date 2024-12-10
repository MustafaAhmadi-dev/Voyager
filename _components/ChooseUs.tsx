import Image from "next/image";
import Link from "next/link";
import { FaChevronCircleRight } from "react-icons/fa";
import MainImg from "@/public/assets/chooseUs/main.png";
import Box1 from "@/public/assets/chooseUs/icon1.png";
import Box2 from "@/public/assets/chooseUs/icon2.png";
import Box3 from "@/public/assets/chooseUs/icon3.png";
import Container from "./ui/Container";
import RevealOnScroll from "./ui/RevealOnScroll";

function ChooseUs() {
  return (
    <>
      <section
        className="bg-white dark:bg-slate-800 dark:text-slate-100 pt-8 pb-40 px-0 bg-cover bg-no-repeat"
        style={{
          backgroundImage: 'url("/assets/chooseUs/bg.png")',
          backgroundPosition: "-225px 255px",
        }}
      >
        <Container>
          <div className="flex flex-col">
            <Image
              src={MainImg}
              alt="Main Image"
              className="flex flex-col w-full sm:w-11/12 h-auto my-0 mx-auto"
            />

            <RevealOnScroll>
              <div className="flex flex-col lg:flex-row items-center text-center gap-20 justify-around mt-12 w-full">
                <div className="flex flex-col text-center lg:text-left items-center text-gray-800 dark:text-slate-300 max-w-[50rem]">
                  <h4 className="text-4xl mb-3 font-semibold">Why Choose Us</h4>
                  <h2 className=" mb-8 dark:text-slate-100">
                    Best valued deals you will ever find
                  </h2>
                  <p className="mb-14 dark:text-slate-300">
                    Discover the best deals you&apos;ll ever find with our
                    unbeatable offers. We&apos;re dedicated to providing you
                    with the best value for your money, so you can enjoy
                    top-quality services and products without breaking the bank.
                    Our deals are designed to give you the ultimate renting
                    experience, so don&apos;t miss out on your chance to save
                    big.
                  </p>
                  <Link
                    href="/"
                    className="text-white text-center flex items-center font-semibold bg-orange py-6 px-10
                  rounded shadow-lg  transition-all text-2xl w-fit hover:bg-orange-dark"
                  >
                    Book a Car &nbsp;
                    <FaChevronCircleRight />
                  </Link>
                </div>

                <div className="flex flex-col gap-16 max-w-[44rem]">
                  <div className="flex flex-col items-center md:flex-row md:items-start">
                    <Image src={Box1} alt="icon" className="w-44 h-44 mr-4" />

                    <div className="flex flex-col gap-4 justify-center">
                      <h4 className="text-4xl">Cross Country Drive</h4>
                      <p className="dark:text-slate-300">
                        Take your driving experience to the next level with our
                        top-notch vehicles for your cross-country adventures.
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col items-center md:flex-row md:items-start">
                    <Image src={Box2} alt="icon" className="w-44 h-44 mr-4" />

                    <div className="flex flex-col gap-4 justify-center">
                      <h4 className="text-4xl">All Inclusive Pricing</h4>
                      <p className="dark:text-slate-300">
                        Get everything you need in one convenient, transparent
                        price with our all-inclusive pricing policy.
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col items-center md:flex-row md:items-start">
                    <Image src={Box3} alt="icon" className="w-44 h-44 mr-4" />

                    <div className="flex flex-col gap-4 justify-center">
                      <h4 className="text-4xl">No Hidden Charges</h4>
                      <p className="dark:text-slate-300">
                        Enjoy peace of mind with our no hidden charges policy.
                        We believe in transparent and honest pricing.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </Container>
      </section>
    </>
  );
}

export default ChooseUs;
