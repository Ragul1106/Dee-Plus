import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import it1 from "../assets/images/it1.jpg";
import it2 from "../assets/images/it2.jpg";
import it3 from "../assets/images/it3.jpg";
import it4 from "../assets/images/it4.jpg";
import it5 from "../assets/images/it5.jpg";
import it6 from "../assets/images/it6.jpg";

const therapies = [
  {
    id: 1,
    title: "What Is Individual Therapy and How Does It Work?",
    img: it1,
    reviewedBy: "Dr. Smith - PhD",
  },
  {
    id: 2,
    title: "Benefits of One-on-One Counseling Sessions",
    img: it2,
    reviewedBy: "Dr. Johnson - MD",
  },
  {
    id: 3,
    title: "CBT in Individual Therapy: A Beginner’s Guide",
    img: it3,
    reviewedBy: "Dr. Lee - LCP",
  },
  {
    id: 4,
    title: "Exploring Mindfulness in Personal Therapy",
    img: it4,
    reviewedBy: "Dr. Miller - PsyD",
  },
  {
    id: 5,
    title: "How Individual Therapy Helps with Anxiety & Stress",
    img: it5,
    reviewedBy: "Dr. Brown - MD",
  },
  {
    id: 6,
    title: "Breaking Stigma: Why Individual Therapy Matters",
    img: it6,
    reviewedBy: "Dr. Wilson - LCP",
  },
];

const IndividualTherapy = () => {
   useEffect(() => {
      document.title = 'Individual Therapy | Dee Plus';
    }, []);
  const navigate = useNavigate();

  return (
    <section className="bg-[#FEEEEE] py-12 px-6 md:px-16">
      <h2 className="text-center text-4xl md:text-3xl font-bold text-[#6F145F] mb-4">
        Individual Therapy
      </h2>
      <p className="text-center text-2xl text-black max-w-4xl mx-auto mb-10 leading-relaxed">
        Individual therapy offers a safe and private space for people to explore 
        their thoughts, feelings, and behaviors. It can help individuals overcome 
        personal struggles, improve self-awareness, and build healthier coping 
        strategies.
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

export default IndividualTherapy;
