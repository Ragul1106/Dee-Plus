import React from "react";
import { useNavigate } from "react-router-dom";
import gt1 from "../assets/images/gt1.jpg";
import gt2 from "../assets/images/gt2.jpg";
import gt3 from "../assets/images/gt3.jpg";
import gt4 from "../assets/images/gt4.jpg";
import gt5 from "../assets/images/gt5.jpg";
import gt6 from "../assets/images/gt6.jpg";

const therapies = [
  {
    id: 1,
    title: "What Is Group Therapy and How Does It Work?",
    img: gt1,
    reviewedBy: "Dr. Collins - PhD",
  },
  {
    id: 2,
    title: "Sharing Experiences: The Power of Support Groups",
    img: gt2,
    reviewedBy: "Dr. Rivera - MD",
  },
  {
    id: 3,
    title: "Group Therapy for Anxiety and Depression",
    img: gt3,
    reviewedBy: "Dr. Murphy - LCP",
  },
  {
    id: 4,
    title: "Learning from Others in a Safe Space",
    img: gt4,
    reviewedBy: "Dr. Nguyen - PsyD",
  },
  {
    id: 5,
    title: "Building Social Skills Through Group Counseling",
    img: gt5,
    reviewedBy: "Dr. Patel - MD",
  },
  {
    id: 6,
    title: "Healing Together: The Benefits of Group Therapy",
    img: gt6,
    reviewedBy: "Dr. Thompson - LCP",
  },
];

const GroupTherapy = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-[#FEEEEE] py-12 px-6 md:px-16">
      <h2 className="text-center text-4xl md:text-3xl font-bold text-[#6F145F] mb-4">
        Group Therapy
      </h2>
      <p className="text-center text-2xl text-black max-w-4xl mx-auto mb-10 leading-relaxed">
        Group therapy brings people together in a supportive setting to share
        their experiences and learn from one another. It helps individuals build
        connections, develop coping strategies, and realize they are not alone
        in their struggles.
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

export default GroupTherapy;
