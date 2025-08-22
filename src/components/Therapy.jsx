import React from "react";
import { useNavigate } from "react-router-dom";

import image1 from "../assets/images/therapy1.png";
import image2 from "../assets/images/therapy2.png";
import image3 from "../assets/images/therapy3.png";
import image4 from "../assets/images/therapy4.png";
import image5 from "../assets/images/therapy5.png";
import image6 from "../assets/images/therapy6.png";

const TherapySection = () => {
  const navigate = useNavigate();

  // Navigation handler
  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <div className="bg-[#FEEEEE] py-12 px-6 md:px-16">
      <h2 className="text-center text-2xl md:text-3xl font-bold text-[#6F145F] mb-6">
        DEE PLUS Therapy
      </h2>

      <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-8 max-w-5xl mx-auto">
        <p className="text-center md:text-left text-md md:text-2xl text-black leading-relaxed md:w-2/3">
          Therapy is a process where a person works with a trained professional
          to explore thoughts, feelings, and behaviors in order to improve
          mental health, cope with challenges, and promote personal growth. It
          can include talking, practicing new skills, or using specific
          techniques to heal, understand oneself better, or manage life more
          effectively.
        </p>

        <img
          src={image1}
          alt="Therapy"
          className="rounded-lg w-full md:w-1/3 object-cover"
        />
      </div>

      <h3 className="text-center text-xl md:text-2xl font-bold text-[#6F145F] mt-12 mb-8">
        Our Services
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8 max-w-6xl mx-auto">
        <div
          className="lg:col-span-2 text-center cursor-pointer"
          onClick={() => handleNavigate("/individual-therapy")}
        >
          <img src={image2} alt="Individual Therapy" className="w-full h-64 object-contain" />
          <p className="font-semibold text-gray-800 py-4">Individual Therapy</p>
        </div>

        <div
          className="lg:col-span-2 text-center cursor-pointer"
          onClick={() => handleNavigate("/couples-therapy")}
        >
          <img src={image3} alt="Couple Therapy" className="w-full h-64 object-contain" />
          <p className="font-semibold text-gray-800 py-4">Couple Therapy</p>
        </div>

        <div
          className="lg:col-span-2 text-center cursor-pointer"
          onClick={() => handleNavigate("/family-therapy")}
        >
          <img src={image4} alt="Family Therapy" className="w-full h-64 object-contain" />
          <p className="font-semibold text-gray-800 py-4">Family Therapy</p>
        </div>

        <div
          className="lg:col-span-2 lg:col-start-2 text-center cursor-pointer"
          onClick={() => handleNavigate("/group-therapy")}
        >
          <img src={image5} alt="Group Therapy" className="w-full h-64 object-contain" />
          <p className="font-semibold text-gray-800 py-4">Group Therapy</p>
        </div>

        <div
          className="lg:col-span-2 lg:col-start-4 text-center cursor-pointer"
          onClick={() => handleNavigate("/online-therapy")}
        >
          <img src={image6} alt="Online Therapy" className="w-full h-64 object-contain" />
          <p className="font-semibold text-gray-800 py-4">Online Therapy</p>
        </div>
      </div>
    </div>
  );
};

export default TherapySection;
