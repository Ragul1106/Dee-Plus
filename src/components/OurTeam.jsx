import React, { useState } from "react";
import leftArrow from "../assets/images/prev-arrow.png";
import rightArrow from "../assets/images/next-arrow.png";
import therapist1 from "../assets/images/therapist1.png";
import therapist2 from "../assets/images/therapist2.png";
import therapist3 from "../assets/images/therapist3.png";
import therapist4 from "../assets/images/therapist4.png";

const team = [
  { name: "JansiMerry", role: "Clinical Director / Psychologist", img: therapist1 },
  { name: "Rizza", role: "Psychologist", img: therapist2 },
  { name: "John Smith", role: "Clinical Director / Psychologist", img: therapist3 },
  { name: "Brady John", role: "Psychologist", img: therapist4 },
  { name: "Maria", role: "Psychologist", img: therapist1 },
  { name: "David", role: "Clinical Director / Psychologist", img: therapist2 },
  { name: "Sophia", role: "Psychologist", img: therapist3 },
  { name: "Chris", role: "Clinical Director / Psychologist", img: therapist4 },
  { name: "Ella", role: "Psychologist", img: therapist1 },
];

export default function OurTeam() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [desktopStartIndex, setDesktopStartIndex] = useState(0);

  const itemsPerPage = 4;
  const visibleTeam = team.slice(desktopStartIndex, desktopStartIndex + itemsPerPage);

  const maxIndex = team.length - itemsPerPage;
  const paginationBars = 5;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % team.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + team.length) % team.length);
  };

  const nextPage = () => {
    setDesktopStartIndex((prev) => (prev < maxIndex ? prev + 1 : prev));
  };

  const prevPage = () => {
    setDesktopStartIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const activePage = Math.floor(desktopStartIndex / itemsPerPage);
  const totalPages = Math.ceil(team.length / itemsPerPage);

  return (
    <div className="py-12 px-4 relative">
      {/* Section Header */}
      <div className="text-center mb-10">
        <h3 className="text-gray-700 font-medium text-base">Meet Our Therapist</h3>
        <h2 className="text-3xl md:text-4xl font-bold text-[#6F145F] mt-2">Our Team</h2>
      </div>

      {/* ✅ Mobile & Tablet Carousel */}
      <div className="block lg:hidden max-w-sm mx-auto relative overflow-hidden">
        <div className="rounded-2xl bg-green-100 shadow-md overflow-hidden text-center">
          <img
            src={team[currentIndex].img}
            alt={team[currentIndex].name}
            className="w-full h-64 object-cover rounded-t-2xl"
          />
          <div className="py-4">
            <h3 className="text-lg font-bold">{team[currentIndex].name}</h3>
            <p className="text-gray-700">{team[currentIndex].role}</p>
          </div>
        </div>

        {/* ✅ Responsive Arrow Controls */}
        <div className="absolute top-1/2 left-0 w-full px-4 flex justify-between -translate-y-1/2">
          <button onClick={prevSlide} className="bg-green-200 p-2 rounded-full shadow-lg">
            <img src={leftArrow} alt="Previous" className="w-6 h-6" />
          </button>
          <button onClick={nextSlide} className="bg-green-200 p-2 rounded-full shadow-lg">
            <img src={rightArrow} alt="Next" className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* ✅ Desktop Grid */}
      <div className="hidden lg:block relative max-w-7xl mx-auto">
        <div className="grid grid-cols-4 gap-8">
          {visibleTeam.map((member, i) => (
            <div
              key={i}
              className="rounded-2xl bg-[#E3FFD4] shadow-md overflow-hidden text-center mt-10"
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-full h-64 object-cover rounded-t-2xl"
              />
              <div className="py-4">
                <h3 className="text-lg font-bold">{member.name}</h3>
                <p className="text-gray-700">{member.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* ✅ Desktop Arrows */}
        <button
          onClick={prevPage}
          className="absolute -top-10 right-[8rem] -translate-y-1/2 bg-[#E3FFD4] p-3 rounded-full shadow-lg"
          disabled={desktopStartIndex === 0}
        >
          <img src={leftArrow} alt="Previous" className="w-8 h-6" />
        </button>
        <button
          onClick={nextPage}
          className="absolute -top-10 right-0 -translate-y-1/2 bg-[#E3FFD4] p-3 rounded-full shadow-lg"
          disabled={desktopStartIndex === maxIndex}
        >
          <img src={rightArrow} alt="Next" className="w-8 h-6" />
        </button>
      </div>

      {/* ✅ Pagination for Mobile */}
      <div className="flex justify-center mt-6 space-x-2 lg:hidden">
        {team.map((_, idx) => (
          <span
            key={idx}
            className={`h-2 w-6 rounded-md transition-all ${
              currentIndex === idx ? "bg-[#9747FF]" : "bg-purple-300"
            }`}
          ></span>
        ))}
      </div>

      {/* ✅ Pagination for Desktop */}
      <div className="hidden lg:flex justify-center mt-10 space-x-8">
        {Array.from({ length: paginationBars }).map((_, idx) => {
          const actualPage = Math.floor(desktopStartIndex / itemsPerPage);
          const startPage = Math.max(0, actualPage - 2);
          const pageNumber = startPage + idx;
          const isActive = pageNumber === actualPage;

          return pageNumber < totalPages ? (
            <span
              key={idx}
              onClick={() => setDesktopStartIndex(pageNumber * itemsPerPage)}
              className={`h-3 w-16 cursor-pointer rounded-md transition-all ${
                isActive ? "bg-[#9747FF]" : "bg-purple-300"
              }`}
            ></span>
          ) : null;
        })}
      </div>
    </div>
  );
}
