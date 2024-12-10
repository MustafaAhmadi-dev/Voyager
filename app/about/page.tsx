import BookBanner from "@/_components/BookBanner";
import ChooseUs from "@/_components/ChooseUs";
import HeroPage from "@/_components/HeroPage";
import PlanTrip from "@/_components/PlanTrip";
import Testimonials from "@/_components/Testimonials";
import Container from "@/_components/ui/Container";
import RevealOnScroll from "@/_components/ui/RevealOnScroll";

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
