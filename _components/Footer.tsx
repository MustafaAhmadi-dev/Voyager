import { FaPhoneVolume } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import Container from "./ui/Container";

function Footer() {
  return (
    <>
      <footer className="bg-gray-50 dark:bg-gray-800 pt-10">
        <Container>
          <div className="text-slate-700 dark:text-slate-200 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[27fr_21fr_21fr_21fr] md:items-start gap-32 text-left ">
            <ul className="list-none text-center md:text-justify flex flex-col items-center justify-center">
              <li className="pb-4">
                <span className="text-3xl font-semibold uppercase">
                  CAR Rental
                </span>
              </li>
              <li className="pb-4">
                We offers a big range of vehicles for all your driving needs. We
                have the perfect car to meet your needs.
              </li>
              <li className="pb-4">
                <a href="tel:123456789">
                  <FaPhoneVolume />{" "}
                  <span className="transition-all hover:text-orange">
                    &nbsp; (123) -456-789
                  </span>
                </a>
              </li>

              <li>
                <a
                  href="mailto: 
                carrental@gmail.com"
                >
                  <IoIosMail />
                  <span className="transition-all hover:text-orange">
                    &nbsp; carrental@gmail.com
                  </span>
                </a>
              </li>
            </ul>

            <ul className="list-none text-center md:text-justify flex flex-col items-center justify-center">
              <li className="text-3xl font-semibold uppercase pb-3">Company</li>
              <li className="pb-3">
                <a href="#home" className="transition-all hover:text-orange">
                  New York
                </a>
              </li>
              <li className="pb-3">
                <a href="#home" className="transition-all hover:text-orange">
                  Careers
                </a>
              </li>
              <li className="pb-3">
                <a href="#home" className="transition-all hover:text-orange">
                  Mobile
                </a>
              </li>
              <li className="pb-3">
                <a href="#home" className="transition-all hover:text-orange">
                  Blog
                </a>
              </li>
              <li>
                <a href="#home" className="transition-all hover:text-orange">
                  How we work
                </a>
              </li>
            </ul>

            <ul className="list-none text-center md:text-justify gap-6 flex flex-col md:items-start justify-center">
              <li>
                <span className="text-3xl font-semibold uppercase">
                  Working Hours
                </span>
              </li>
              <li>Mon - Fri: 9:00AM - 9:00PM</li>
              <li>Sat: 9:00AM - 19:00PM</li>
              <li>Sun: Closed</li>
            </ul>

            <ul className="list-none text-center md:text-justify flex flex-col gap-6">
              <li>
                <span className="text-5xl font-semibold uppercase">
                  Subscription
                </span>
              </li>
              <li>
                <p className="dark:text-slate-300">
                  Subscribe your Email address for latest news & updates.
                </p>
              </li>
              <li>
                <input
                  type="email"
                  placeholder="Enter Email Address"
                  className="w-full outline-none mt-4 py-3 px-12 dark:bg-gray-600"
                ></input>
              </li>
              <li>
                <button className="text-white bg-orange w-full no-underline font-semibold rounded shadow-sm transition-all border-2 border-solid border-orange cursor-pointer py-6 px-10 hover:bg-orange-dark">
                  Submit
                </button>
              </li>
            </ul>
          </div>
        </Container>
      </footer>
    </>
  );
}

export default Footer;
