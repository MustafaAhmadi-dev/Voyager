import BookBanner from "../components/BookBanner";
import ChooseUs from "../components/ChooseUs";
import HeroPage from "../components/HeroPage";
import PlanTrip from "../components/PlanTrip";
import Testimonials from "../components/Testimonials";
import RevealOnScroll from "../ui/RevealOnScroll";
import Container from "../ui/Container";

function About() {
  

  return (
    <>
      <HeroPage sectionName="About" />
      <section className="dark:bg-slate-900">
        <Container>
          <ChooseUs />

          <RevealOnScroll>
            <PlanTrip />
          </RevealOnScroll>
        </Container>

        <RevealOnScroll>
          <Testimonials />
        </RevealOnScroll>

        <RevealOnScroll>
          <BookBanner />
        </RevealOnScroll>
      </section>
    </>
  );
}

export default About;
