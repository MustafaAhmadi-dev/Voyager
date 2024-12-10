import { Suspense } from "react";
import Cars from "./_components/Cars";
import HeroPage from "@/_components/HeroPage";
import Spinner from "@/_components/ui/Spinner";
import BookBanner from "@/_components/BookBanner";

export default function page() {
  return (
    <>
      <section className="dark:bg-slate-900">
        <HeroPage sectionName="Vehicle Models" />

        <Suspense fallback={<Spinner />}>
          <Cars />
        </Suspense>

        <BookBanner />
      </section>
    </>
  );
}
