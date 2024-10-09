import Download from "../components/Download";
import Faq from "../components/Faq";
import Footer from "../components/Footer";
import HeroPage from "../components/HeroPage";

function FaqDownload() {
  return (
    <main className="dark:bg-slate-900">
      <HeroPage sectionName="F A Q"/>
      <Faq />
      <Download />
      <Footer />
    </main>
  );
}

export default FaqDownload;
