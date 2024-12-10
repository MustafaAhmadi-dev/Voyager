import { FaPhoneVolume } from "react-icons/fa";
import Container from "./ui/Container";

function BookBanner() {
  return (
    <>
      <div
        className="flex w-full py-4 h-fit md:h-80 relative mt-28"
        style={{
          backgroundImage: 'url("/assets/banners/book-banner.png")',
        }}
      >
        <div className="opacity-40 w-full h-full absolute top-0 right-0 bg-slate-800"></div>

        <Container>
          <div className="flex flex-col md:flex-row justify-center md:justify-start items-center gap-4 md:gap-20 text-center">
            <h2 className=" text-5xl text-white">
              Book a car by getting in touch with us
            </h2>
            <span className="flex text-4xl gap-4 items-center text-orange now whitespace-nowrap">
              <FaPhoneVolume width={40} height={40} />
              <h3>(123) 456-7869</h3>
            </span>
          </div>
        </Container>
      </div>
    </>
  );
}

export default BookBanner;
