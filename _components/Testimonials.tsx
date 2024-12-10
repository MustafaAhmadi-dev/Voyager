import Image from "next/image";
import { BsFillChatQuoteFill } from "react-icons/bs";
import Img2 from "@/public/assets/testimonials/pfp1.jpg";
import Img3 from "@/public/assets/testimonials/pfp2.jpg";
import Container from "./ui/Container";

function Testimonials() {
  return (
    <>
      <section className="bg-gray-100 dark:bg-slate-800 py-40 px-0 text-gray-800 dark:text-slate-100">
        <Container>
          <div className="flex flex-col">
            <div className="flex flex-col my-0 mx-auto text-center md:w-[70rem] mb-20">
              <h4 className="text-4xl font-semibold mb-6">
                Reviewed by People
              </h4>
              <h2 className="text-4xl mb-6 dark:text-slate-100">
                Client&apos;s Testimonials
              </h2>
              <p className="dark:text-slate-300">
                Discover the positive impact we&apos;ve made on the our clients
                by reading through their testimonials. Our clients have
                experienced our service and results, and they&apos;re eager to
                share their positive experiences with you.
              </p>
            </div>

            <div className="flex justify-center gap-12 w-full p-0 lg:p-12">
              <div className="bg-white dark:bg-gray-900 shadow-xl relative py-20 px-12 md:w-[54rem]">
                <div className="hidden md:block text-8xl text-orange absolute bottom-8 right-14">
                  <BsFillChatQuoteFill width={60} height={60} />
                </div>

                <p className="text-3xl font-semibold dark:text-slate-200">
                  &ldquo;We rented a car from this website and had a{" "}
                  <b>magical</b> experience! The booking was easy and the rates
                  were very affordable.&rdquo;
                </p>

                <div style={{ display: "flex" }}>
                  <div className="flex items-center gap-8 mt-12">
                    <Image
                      src={Img2}
                      alt="user_img"
                      className="w-28 h-28 rounded-full"
                    />
                    <span>
                      <h4 className="text-3xl">Harry Potter</h4>
                      <p className="dark:text-slate-200">Hogwarth</p>
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-900 shadow-xl relative py-20 px-12 md:w-[54rem]">
                <div className="hidden md:block text-8xl text-orange absolute bottom-8 right-14">
                  <BsFillChatQuoteFill width={60} height={60} />
                </div>

                <p className="text-3xl font-semibold dark:text-slate-200">
                  &ldquo;The car was in great condition and made our trip even
                  better. I <b>highly</b> recommend this car rental
                  website!&rdquo;
                </p>

                <div style={{ display: "flex" }}>
                  <div className="flex items-center gap-8 mt-12">
                    <Image
                      src={Img3}
                      alt="user_img"
                      className="w-28 h-28 rounded-full"
                    />
                    <span>
                      <h4 className="text-3xl">Ron Weasley</h4>
                      <p className="dark:text-slate-200">Gryffindor</p>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

export default Testimonials;
