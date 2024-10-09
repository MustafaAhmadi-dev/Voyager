import Img1 from "../assets/download/appstore.svg";
import Img2 from "../assets/download/googleapp.svg";
import Container from "../ui/Container";

function Download() {
  return (
    <>
      <section
        className="bg-gray-100 dark:bg-gray-900 bg-top bg-no-repeat bg-cover w-full h-auto py-10 px-0"
        style={{ backgroundImage: 'url("/src/assets/banners/bg02.png")' }}
      >
        <Container>
          <div className="flex flex-col dark:text-slate-100 gap-8 max-w-[55rem] text-center md:text-left ">
            <h2 className="dark:text-slate-100">Download our app to get most out of it</h2>
            <p className="text-gray-600 dark:text-slate-300">
              Thrown shy denote ten ladies though ask saw. Or by to he going
              think order event music. Incommode so intention defective at
              convinced. Led income months itself and houses you.
            </p>

            <div className="flex flex-col md:flex-row items-center md:items-stretch gap-12 mt-8">
              <a href="https://play.google.com/store/games">
                <img alt="download_img" src={Img2} />
              </a>
              <a href="https://www.apple.com/app-store">
                <img alt="download_img" src={Img1} />
              </a>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

export default Download;
