import React, { useState } from "react";

const faqs = [
  {
    question: "1. How do I know if I need therapy?",
    answer:
      "If you're feeling overwhelmed, anxious, low, or stuck—or simply want to better understand yourself—therapy can help. You don’t need a crisis to benefit from mental health support.",
  },
  {
    question: "2. What is mental wellness?",
    answer:
      "Mental wellness is a state of well-being in which you can cope with normal stresses of life, work productively, and contribute to your community.",
  },
  {
    question: "3. What types of therapy do you offer?",
    answer:
      "We offer individual therapy, group therapy, couples therapy, and specialized sessions depending on your needs.",
  },
  {
    question: "4. What can I expect in a therapy session?",
    answer:
      "During a therapy session, you can expect open conversations in a safe space, where your therapist will listen and help you work through your challenges.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-center text-3xl font-bold text-[#6F145F] mb-10">
        FAQs
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-400 pb-4">
            <button
              className="w-full flex justify-between items-center text-left"
              onClick={() => toggleFAQ(index)}
            >
              <span className="font-bold text-lg md:text-xl lg:text-2xl">{faq.question}</span>
              <span className="text-2xl font-bold">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>
            {openIndex === index && (
              <p className="mt-2 font-semibold text-gray-700 text-md md:text-md lg:text-xl">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
