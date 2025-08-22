import React, { useState } from "react";
import leftArrow from "../assets/images/left_arrow.png";
import rightArrow from "../assets/images/right_arrow.png";
import client1 from "../assets/images/client1.png";
import client2 from "../assets/images/client1.png";
import client3 from "../assets/images/client1.png";
import client4 from "../assets/images/client1.png";

const testimonials = [
  {
    id: 1,
    name: "Daniel M.",
    text: "I never thought I could quiet my mind, but the guidance and support made it possible. I now look forward to each session.",
    image: client1,
  },
  {
    id: 2,
    name: "Sophia R.",
    text: "Therapy gave me tools to better manage my stress and anxiety. I feel more confident every day.",
    image: client2,
  },
  {
    id: 3,
    name: "James L.",
    text: "Our family sessions brought us closer together and helped us resolve long-standing conflicts.",
    image: client3,
  },
  {
    id: 4,
    name: "Olivia P.",
    text: "Online therapy is so convenient! I can get the support I need right from my home.",
    image: client4,
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section className="relative bg-gradient-to-b from-[#CBFCFF] via-[#CBFCFF] to-[#C2FEA2] py-8">
      <div className="max-w-4xl mx-auto px-8 text-center relative">
        <p className="text-gray-700 text-base">Testimonials</p>
        <h2 className="text-2xl md:text-3xl font-bold text-[#6F145F] mb-6">
          What Our Clients Says
        </h2>

        <div className="flex flex-col items-center md:flex-row md:justify-between">
          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className="absolute left-8 md:left-10 lg:-left-48 top-1/2 transform -translate-y-1/2"
          >
            <img
              src={leftArrow}
              alt="Previous"
              className="w-8 h-8 md:w-10 md:h-10 hover:scale-110 transition"
            />
          </button>

          <div className="flex-1 px-8">
            <p className="text-lg md:text-xl text-gray-900 mb-4">
              “{testimonials[currentIndex].text}”
            </p>
            <p className="text-gray-800 font-semibold">
              — {testimonials[currentIndex].name}
            </p>
          </div>

          {/* Client Image */}
          <div className="absolute -top-14 right-12 md:-top-4 md:right-16 lg:-top-4 lg:-right-12 mt-6 md:mt-0 md:ml-8">
            <img
              src={testimonials[currentIndex].image}
              alt={testimonials[currentIndex].name}
              className="w-14 h-14 md:w-20 md:h-20 rounded-full mx-auto shadow-md"
            />
          </div>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className="absolute right-8 md:right-10 lg:-right-48 top-1/2 transform -translate-y-1/2"
          >
            <img
              src={rightArrow}
              alt="Next"
              className="w-8 h-8 md:w-10 md:h-10 hover:scale-110 transition"
            />
          </button>
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-4 mt-8">
          {testimonials.map((_, index) => (
            <div
              key={index}
              className={`h-3 w-24 rounded-full ${
                index === currentIndex ? "bg-[#9747FF]" : "bg-gray-300"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
