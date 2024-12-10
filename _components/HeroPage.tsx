import Link from "next/link";
import Container from "./ui/Container";

function HeroPage({ sectionName }: { sectionName: string }) {
  //   const { isDarkMode } = useColorMode();
  return (
    <>
      <section
        className="w-full h-60 sm:h-[41rem] relative bg-cover bg-no-repeat bg-center"
        style={{
          backgroundImage: 'url("/assets/hero/heroes-bg.png")',
          marginTop: "-1rem",
        }}
      >
        <div
          className="w-full h-full absolute top-0 right-0 bg-[rgba(255, 255, 255, 0.1)]"
          //   style={{
          //     backgroundColor: `${
          //       isDarkMode
          //         ? "rgba(255, 255, 255, 0.1)"
          //         : "rgba(255, 255, 255, 0.5)"
          //     }`,
          //   }}
        ></div>

        <Container>
          <div className="flex flex-col z-10 relative w-full h-60 sm:h-[41rem] justify-start sm:justify-center text-gray-800">
            <h3 className="mb-4 text-5xl md:text-4xl md:mb-9">{sectionName}</h3>
            <p className="font-bold">
              <Link
                href="/"
                className="h-60 transition-all hover:text-orange md:text-6xl"
              >
                Home
              </Link>
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}

export default HeroPage;
