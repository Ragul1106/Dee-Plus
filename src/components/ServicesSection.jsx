import React from "react";
import { useNavigate } from "react-router-dom"; 
import individualImg from "../assets/images/individual.png";
import twoPersonImg from "../assets/images/twopeople.png";
import groupImg from "../assets/images/group-of-people-icon-simple-outline-style-staff-crowd-people-organisation-management-group-meeting-man-business-team-teamwork-concept-thin-line-symbol-illustration-isolated-vector.jpg";
import familyImg from "../assets/images/family.png";
import devicesImg from "../assets/images/devices.png";
import cardImage1 from "../assets/images/it3.jpg";
import cardImage2 from "../assets/images/6b4f38eb6dc217eecf8511c7c100fc72-family-young-daughter-therapy-couch_l.jpg";
import cardImage3 from "../assets/images/group_hands_in_circle.jpg";

const ServicesSection = () => {
  const navigate = useNavigate(); 

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-center text-2xl md:text-3xl font-bold text-[#6F145F] mb-10">
          Our Services
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white rounded-xl shadow-md border border-[#6F145F] p-6 flex flex-col justify-between text-center">
            <h3 className="text-xl font-bold mb-2 text-gray-900">
              Individual Therapy
            </h3>
            <p className="text-gray-700 text-base mb-4">
              A private, one-on-one session with a therapist to explore personal
              challenges, improve mental health, and support emotional well-being.
            </p>
            <div
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => navigate("/individual-therapy")}
            >
              <p className="text-[#5a8d92] font-medium">Read more</p>
              <img
                src={individualImg}
                alt="Individual Therapy"
                className="w-32 h-32"
              />
            </div>
          </div>

          <div>
            <img
              src={cardImage1}
              alt="Therapy session"
              className="w-full h-full object-cover rounded-xl shadow-md"
            />
          </div>

          <div className="bg-[#6a6aab] text-white rounded-xl shadow-md p-6 flex flex-col justify-between text-center">
            <h3 className="text-xl font-bold mb-2">Couples Therapy</h3>
            <p className="text-base mb-4">
              A type of counseling that helps partners improve communication,
              resolve conflicts, and strengthen their relationship in a supportive,
              guided setting.
            </p>
            <div
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => navigate("/couples-therapy")}
            >
              <p className="text-white font-medium">Read more</p>
              <img
                src={twoPersonImg}
                alt="Couples Therapy"
                className="w-32 h-32"
              />
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md border border-[#6F145F] p-6 flex flex-col justify-between text-center">
            <h3 className="text-xl font-bold mb-2 text-gray-900">
              Group Therapy
            </h3>
            <p className="text-gray-700 text-base mb-4">
              A form of therapy where individuals with similar issues meet
              together with a therapist to share experiences, gain support, and
              develop coping skills in a safe, group setting.
            </p>
            <div
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => navigate("/group-therapy")}
            >
              <p className="text-[#5a8d92] font-medium">Read more</p>
              <img
                src={groupImg}
                alt="Group Therapy"
                className="w-32 h-32"
              />
            </div>
          </div>

          <div>
            <img
              src={cardImage2}
              alt="Family Therapy"
              className="w-full h-full object-cover rounded-xl shadow-md"
            />
          </div>

          <div className="bg-white rounded-xl shadow-md border border-[#6F145F] p-6 flex flex-col justify-between text-center">
            <h3 className="text-xl font-bold mb-2 text-gray-900">
              Family Therapy
            </h3>
            <p className="text-gray-700 text-base mb-4">
              A type of counseling that helps families improve communication,
              resolve conflicts, and strengthen relationships by working together
              with a licensed therapist.
            </p>
            <div
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => navigate("/family-therapy")}
            >
              <p className="text-[#5a8d92] font-medium">Read more</p>
              <img
                src={familyImg}
                alt="Family Therapy"
                className="w-32 h-32"
              />
            </div>
          </div>

          <div>
            <img
              src={cardImage3}
              alt="Group session"
              className="w-full h-full object-cover rounded-xl shadow-md"
            />
          </div>

          <div className="bg-white rounded-xl text-center shadow-md border border-[#6F145F] p-6 flex flex-col justify-between">
            <h3 className="text-xl font-bold mb-2 text-gray-900">
              Online Therapy
            </h3>
            <p className="text-gray-700 text-base mb-4">
              Mental health support provided remotely through video, phone, or
              messaging, allowing individuals to connect with a licensed therapist
              from the comfort of their own space.
            </p>
            <div
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => navigate("online-therapy")}
            >
              <p className="text-[#5a8d92] font-medium">Read more</p>
              <img
                src={devicesImg}
                alt="Online Therapy"
                className="w-32 h-32"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
