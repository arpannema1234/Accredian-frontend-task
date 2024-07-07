import React, { useState } from "react";
import "./FAQ.css";
const FAQS = [
  {
    faq: [
      {
        question:
          "Q. Do I need to have prior Product Management experience to enroll in the program?",
        answer:
          "No, you don't need to have prior Product Management experience to enroll in the program",
      },
    ],
  },

  {
    faq: [
      {
        question: "Q. How do I access the course?",
        answer:
          "To access the course you need to first buy it and then access it",
      },
    ],
  },
  {
    conditions:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium quibusdam sapiente modi delectus consequatur vitae ab blanditiis facilis, vero incidunt ullam eligendi odit. Distinctio temporibus ut neque placeat dolorem quis.",
  },
];

const FAQ = () => {
  const [index, setIndex] = useState(0);
  function activeSection(index) {
    setIndex(index);
  }
  return (
    <section className="faq">
      <div className="container2">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-section">
          <div className="leftfaq">
            <div
              className={"faq-type" + (index === 0 ? " active" : "")}
              onClick={() => activeSection(0)}
            >
              Eligibility
            </div>
            <div
              className={"faq-type" + (index === 1 ? " active" : "")}
              onClick={() => activeSection(1)}
            >
              How to use
            </div>
            <div
              className={"faq-type" + (index === 2 ? " active" : "")}
              onClick={() => activeSection(2)}
            >
              Terms & condotions
            </div>
          </div>
          <div className="faq-item">
            {index === 2 && (
              <div>
                <h3>Terms & Comditions</h3> <p>{FAQS[2].conditions}</p>
              </div>
            )}
            {index < 2 &&
              FAQS[index].faq.map((obj, index) => (
                <div key={index}>
                  <h3>{obj.question}</h3>
                  <p>{obj.answer}</p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
