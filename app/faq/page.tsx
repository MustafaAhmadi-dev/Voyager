import HeroPage from "@/_components/HeroPage";
import Faq from "@/_components/Faq";
import Download from "@/_components/Download";
import Footer from "@/_components/Footer";

function FaqDownload() {
  return (
    <main className="dark:bg-slate-900">
      <HeroPage sectionName="F A Q" />
      <Faq />
      <Download />
      <Footer />
    </main>
  );
}

export default FaqDownload;
