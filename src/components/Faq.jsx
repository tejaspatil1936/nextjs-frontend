"use client";
import { useState } from "react";

const faqs = [
  {
    question: "What are your fees?",
    answer: "My fees are $200 for individual, $240 for couple",
  },
  {
    question: "Do you accept insurance?",
    answer: "I do not accept insurance at this time, but can provide a superbill upon request.",
  },
  {
    question: "Do you provide online counseling?",
    answer: "Yes, I offer virtual sessions via zoom.",
  },
  {
    question: "What are your office hours?",
    answer: "In-person: Tue & Thu, 10 AM-6 PM Virtual via Zoom: Mon, Wed & Fri, 1 PM-5 PM",
  },
  {
    question: "What is your cancellation policy?",
    answer: "24-hour notice required",
  },
  {
    question: "What services do you offer?",
    answer: "Anxiety & Stress Management, Relationship Counseling, Trauma Recovery",
  },
];

export default function Faq() {
  const [openStates, setOpenStates] = useState(Array(faqs.length).fill(false));

  const toggle = (index) => {
    const updated = [...openStates];
    updated[index] = !updated[index];
    setOpenStates(updated);
  };

  return (
    <section className="bg-[#a9dbdb] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-6xl font-bold mb-16 text-gray-800">
          Frequently Asked Questions
        </h2>

        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border-b border-gray-600 py-8"
          >
            <button
              onClick={() => toggle(index)}
              className="w-full text-left flex justify-between items-center text-2xl font-semibold text-gray-800 focus:outline-none"
            >
              {faq.question}
              <span className="text-3xl">{openStates[index] ? "▲" : "▼"}</span>
            </button>
            {openStates[index] && (
              <p className="mt-4 text-xl text-gray-700 leading-relaxed">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
