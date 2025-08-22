import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ot1 from "../assets/images/ot1.jpg";
import ot2 from "../assets/images/ot2.jpg";
import ot3 from "../assets/images/ot3.jpg";
import ot4 from "../assets/images/ot4.jpg";
import ot5 from "../assets/images/ot5.jpg";
import ot6 from "../assets/images/ot6.jpg";

const therapies = [
  {
    id: 1,
    title: "What Is Online Therapy and How Does It Work?",
    img: ot1,
    reviewedBy: "Dr. Adams - PhD",
  },
  {
    id: 2,
    title: "Benefits of Virtual Counseling Sessions",
    img: ot2,
    reviewedBy: "Dr. Baker - MD",
  },
  {
    id: 3,
    title: "Overcoming Barriers with Online Therapy",
    img: ot3,
    reviewedBy: "Dr. Clark - LCP",
  },
  {
    id: 4,
    title: "How Online Therapy Supports Mental Wellness",
    img: ot4,
    reviewedBy: "Dr. Davis - PsyD",
  },
  {
    id: 5,
    title: "Affordable and Accessible Mental Health Care",
    img: ot5,
    reviewedBy: "Dr. Lewis - MD",
  },
  {
    id: 6,
    title: "Breaking Stigma: Embracing Digital Therapy",
    img: ot6,
    reviewedBy: "Dr. Hall - LCP",
  },
];

const OnlineTherapy = () => {
   useEffect(() => {
      document.title = 'Online Therapy | Dee Plus';
    }, []);
  const navigate = useNavigate();

  return (
    <section className="bg-[#FEEEEE] py-12 px-6 md:px-16">
      <h2 className="text-center text-4xl md:text-3xl font-bold text-[#6F145F] mb-4">
        Online Therapy
      </h2>
      <p className="text-center text-2xl text-black max-w-4xl mx-auto mb-10 leading-relaxed">
        Online therapy makes professional mental health support more accessible 
        than ever. From the comfort of your home, you can connect with licensed 
        therapists, receive guidance, and build coping skills through secure 
        and flexible digital sessions.
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

export default OnlineTherapy;
