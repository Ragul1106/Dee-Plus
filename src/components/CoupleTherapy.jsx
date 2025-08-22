import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ct1 from "../assets/images/ct1.jpg";
import ct2 from "../assets/images/ct2.jpg";
import ct3 from "../assets/images/ct3.jpg";
import ct4 from "../assets/images/ct4.jpg";
import ct5 from "../assets/images/ct5.jpg";
import ct6 from "../assets/images/ct6.jpg";

const therapies = [
  {
    id: 1,
    title: "What Is Couples Therapy and How Does It Work?",
    img: ct1,
    reviewedBy: "Dr. Anderson - PhD",
  },
  {
    id: 2,
    title: "Building Better Communication in Relationships",
    img: ct2,
    reviewedBy: "Dr. Roberts - MD",
  },
  {
    id: 3,
    title: "Conflict Resolution Through Couples Counseling",
    img: ct3,
    reviewedBy: "Dr. Carter - LCP",
  },
  {
    id: 4,
    title: "Rebuilding Trust After Challenges",
    img: ct4,
    reviewedBy: "Dr. Martinez - PsyD",
  },
  {
    id: 5,
    title: "Couples Therapy for Pre-Marital Counseling",
    img: ct5,
    reviewedBy: "Dr. Evans - MD",
  },
  {
    id: 6,
    title: "How Therapy Can Strengthen Emotional Intimacy",
    img: ct6,
    reviewedBy: "Dr. Taylor - LCP",
  },
];

const CouplesTherapy = () => {
   useEffect(() => {
      document.title = 'Couples Therapy | Dee Plus';
    }, []);
  const navigate = useNavigate();

  return (
    <section className="bg-[#FEEEEE] py-12 px-6 md:px-16">
      <h2 className="text-center text-4xl md:text-3xl font-bold text-[#6F145F] mb-4">
        Couples Therapy
      </h2>
      <p className="text-center text-2xl text-black max-w-4xl mx-auto mb-10 leading-relaxed">
        Couples therapy provides a supportive environment for partners to
        improve communication, resolve conflicts, and deepen their connection.
        It helps strengthen relationships by fostering trust, respect, and
        emotional understanding.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-18">
        {therapies.map(({ id, title, img, reviewedBy }) => (
          <div
            key={id}
            className="bg-white rounded-lg shadow-[8px_5px_3px_0px_#8E2727] transition overflow-hidden flex flex-col"
          >
            <img
              src={img}
              alt={title}
              className="w-full p-5 h-90 object-contain rounded-tl-[130px] rounded-br-[120px]"
            />

            <div className="p-4 flex flex-col flex-1">
              <h3 className="text-lg font-semibold text-[#6F145F] mb-4 text-center">
                {title}
              </h3>

              <button
                onClick={() => navigate(`/approach-form`)}
                className="bg-[#6F145F] text-white px-15 py-2 cursor-pointer rounded-md font-semibold mx-auto mb-4 hover:bg-[#5a0f5a] transition"
              >
                I Get This
              </button>

              <p className="text-sm text-[#6F145F] text-center mt-auto">
                Medically reviewed By{" "}
                <span className="font-medium">{reviewedBy}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CouplesTherapy;
