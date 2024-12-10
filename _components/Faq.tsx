'use client'

import { useState } from "react";
import faqData from "@/data/faqData";
import Container from "./ui/Container";
import FaqItem from "./FaqItem";

function Faq() {
  const [curOpen, setCurOpen] = useState<string>("");

  return (
    <section
      className="h-dvh bg-no-repeat bg-auto"
      style={{
        backgroundImage: "url('/assets/faq/car.png')",
        backgroundPosition: "0 70%",
      }}
    >
      <Container>
        <div className="flex flex-col text-gray-900 dark:text-slate-100">
          <div className="flex flex-col my-0 mx-auto text-center max-w-7xl">
            <h5 className="text-3xl md:text-4xl leading-[6rem]">FAQ</h5>
            <h2 className="mb-7 text-6xl md:text-[5rem] md:mt-8 dark:text-slate-100">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="flex flex-col items-center md:mt-20">
            {faqData.map((data, i) => (
              <FaqItem
                key={i}
                data={data}
                num={"0" + (i + 1)}
                curOpen={curOpen}
                setCurOpen={setCurOpen}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Faq;
