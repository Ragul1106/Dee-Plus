import React from "react";
import { Link, useNavigate } from "react-router-dom";
import oilPastelGreen from "../assets/images/oil-pastel-green-image.jpg";
import teamImage from "../assets/images/teamimage.jpg";
import meetButton from "../assets/images/meet_our_team_button.png";

const AboutSection = () => {
  const navigate = useNavigate();
  return (
    <section className="relative w-full px-4 sm:px-6 mt-64 md:mt-80 lg:mt-0">
      <div className="relative w-full">
        <img
          src={oilPastelGreen}
          alt="Pastel Background"
          className="w-full h-[580px] object-cover"
        />
        <div className="absolute bottom-0 left-0 w-full h-[180px] md:h-[108px] bg-[#5A8D92]" />
      </div>

      <div className="absolute -top-16 left-0 w-full h-full flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-2 px-4 sm:px-8 lg:px-16">
        <div className="w-full md:w-[800px] lg:w-[800px] h-[220px] sm:h-[280px] md:h-[400px] flex justify-center">
          <img
            src={teamImage}
            alt="Therapy Team"
            className="w-full h-full object-contain rounded-md "
          />
        </div>

        <div className="text-center lg:text-left max-w-2xl mb-72 md:mb-72 lg:mb-0 mt-12 md:mt-6 lg:mt-0">
          <p className="text-black font-medium text-base sm:text-lg lg:ml-20">
            Welcome To
          </p>
          <h2 className="text-[#6F145F] font-semibold lg:ml-36 text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-snug mt-2">
            Private Psychiatry <br /> & Therapy Clinic
          </h2>
          <p className="text-black text-center  lg:text-left text-sm sm:text-base md:text-lg leading-6 md:leading-7 px-4 sm:px-8 md:px-16 lg:px-16 mt-4">
            A specialized healthcare facility offering confidential, personalized
            mental health services, including psychiatric evaluations, medication
            management, and psychotherapy. Designed to provide discreet,
            compassionate care for individuals seeking support for emotional,
            behavioral, or psychological challenges.
          </p>
          <div className="mt-6 mb-10 md:mb-10 lg:mb-0 flex justify-center ">
            <button
              onClick={() => navigate("/meditation")} >
            <img
              src={meetButton}
              alt="Join Now"
              className="w-[140px] sm:w-[160px] md:w-[180px] cursor-pointer transition-transform hover:scale-105"
            />
            </button>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[95%] sm:w-[90%]  rounded-lg py-6 px-4 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-10">
        <div className="text-center">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">1586</h3>
          <p className="text-vlack text-sm sm:text-lg">Sessions Per Year</p>
        </div>
        <div className="text-center">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">20</h3>
          <p className="text-black text-sm sm:text-lg">Years Experience</p>
        </div>
        <div className="text-center">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">5000+</h3>
          <p className="text-black text-sm sm:text-lg">Successful Therapies</p>
        </div>
        <div className="text-center">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">18</h3>
          <p className="text-black text-sm sm:text-lg">Specialists in Our Team</p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
