import React, { useState } from "react";
import "../App.css";

const Faqs = ({ faq }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h2>Frequently Asked Questions</h2>
      {faq.map((item, index) => (
        <div key={index} className="faq-item">
          <div className="question" onClick={() => toggle(index)}>
            <span>{item.question}</span>
            <span>{openIndex === index ? "−" : "+"}</span>
          </div>
          {openIndex === index && <div className="answer">{item.answer}</div>}
        </div>
      ))}
    </div>
  );
};

export default Faqs;
