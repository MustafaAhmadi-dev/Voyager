import { IconChevronDown } from "@tabler/icons-react";
import { useState } from "react";

const faqData = [
  {
    question: "What is special about comparing rental car deals?",
    answer:
      "Comparing rental car deals is important as it helps find the best deal that fits your budget and requirements, ensuring you get the most value for your money. By comparing various options, you can find deals that offer lower prices, additional services, or better car models. You can find car rental deals by researching online and comparing prices from different rental companies.",
  },
  {
    question: "How do I find the car rental deals?",
    answer:
      "You can find car rental deals by researching online and comparing prices from different rental companies. Websites such as Expedia, Kayak, and Travelocity allow you to compare prices and view available rental options. It is also recommended to sign up for email newsletters and follow rental car companies on social media to be informed of any special deals or promotions.",
  },
  {
    question: "How do I find such low rental car prices?",
    answer:
      "Book in advance: Booking your rental car ahead of time can often result in lower prices. Compare prices from multiple companies: Use websites like Kayak, Expedia, or Travelocity to compare prices from multiple rental car companies. Look for discount codes and coupons: Search for discount codes and coupons that you can use to lower the rental price. Renting from an off-airport location can sometimes result in lower prices.",
  },
];

function Faq() {
  const [curOpen, setCurOpen] = useState(null);

  return (
    <section className="faq-section">
      <div className="container">
        <div className="faq-content">
          <div className="faq-content__title">
            <h5>FAQ</h5>
            <h2>Frequently Asked Questions</h2>
            <p>
              Frequently Asked Questions About the Car Rental Booking Process on
              Our Website: Answers to Common Concerns and Inquiries.
            </p>
          </div>

          <div className="all-questions">
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
      </div>
    </section>
  );
}

function FaqItem({ data, num, curOpen, setCurOpen }) {
  const isOpen = curOpen === num;

  function handleToggle() {
    setCurOpen(isOpen ? null : num);
  }
  return (
    <div className="faq-box">
      <div
        onClick={() => handleToggle()}
        className={`faq-box__question ${isOpen ? "active-question" : ""}`}
      >
        <p>
          {num} {data.question}
        </p>
        <IconChevronDown />
      </div>
      <div className={`faq-box__answer ${isOpen ? "active-answer" : ""}`}>
        {isOpen && data.answer}
      </div>
    </div>
  );
}

export default Faq;
