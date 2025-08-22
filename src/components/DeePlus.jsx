import React from "react";
import deePlusImage from "../assets/images/deeplus.jpg";

const DeePlus = () => {
  const items = [
    ["M", "Mindfulness", "Being aware of the present"],
    ["E", "Equanimity", "Calm and balanced emotions"],
    ["D", "Discipline", "Consistency in practice"],
    ["I", "Inner Peace", "A state of deep tranquility"],
    ["T", "Tranquility", "Soothing the restless mind"],
    ["A", "Awareness", "Conscious observation without reaction"],
    ["T", "Transformation", "Gradual personal growth"],
    ["I", "Intention", "Clarity of purpose"],
    ["O", "Observation", "Watching thoughts without control"],
    ["N", "Now", "Anchoring yourself in the present moment"],
  ];

  return (
    <section className="px-6 md:px-14 lg:px-20 py-12">
      <h2 className="text-center text-[32px] font-bold mb-10">
        <span className="text-[#6F145F]">What DEE PLUS </span>
        <span className="text-white">Stands For</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14">
        <div className="md:pr-10 md:mr-10 md:border-r md:border-[#CBB1B9]">
          <div className="space-y-2">
            {items.map(([k, title, desc]) => (
              <div key={k}>
                <p className="text-[24px] leading-[40px] text-center">
                  <span className="font-bold text-[#6F145F] mr-6">{k}</span>
                  <span className="font-bold text-[#6F145F]">{title}</span>
                </p>
                <p className="text-[20px] leading-[32px] text-[#1F1F1F] lg:ml-40">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center">
          <img
            src={deePlusImage}
            alt="Meditation"
            className="w-[500px] h-[550px] object-contain mb-6"
          />



          <h3 className="text-[24px] leading-[40px] font-bold text-[#6F145F] text-center mb-1">
            In Therapy Helps With
          </h3>
          <ul className="text-center space-y-2 text-[20px]  text-[#1F1F1F]">
            <li>Reducing stress and anxiety</li>
            <li>Enhancing focus and clarity</li>
            <li>Improving emotional regulation</li>
            <li>Promoting self-awareness</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default DeePlus;
