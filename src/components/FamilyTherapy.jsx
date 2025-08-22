import React from "react";
import { Link, useNavigate } from "react-router-dom";
import ft1 from "../assets/images/fam1.jpg";
import ft2 from "../assets/images/fam2.jpg";
import ft3 from "../assets/images/fam3.jpg";
import ft4 from "../assets/images/fam4.jpg";
import ft5 from "../assets/images/fam5.jpg";
import ft6 from "../assets/images/fam6.png";

const therapies = [
  {
    id: 1,
    title: "Understanding ‘Family Of Origin‘ Work in Therapy",
    img: ft1,
    reviewedBy: "Rotary- LCP",
  },
  {
    id: 2,
    title: "How structural Family Therapy Works",
    img: ft2,
    reviewedBy: "Camo- MD",
  },
  {
    id: 3,
    title: "What to Know About Internal Family System (IFS) Therapy",
    img: ft3,
    reviewedBy: "Rotary- MD",
  },
  {
    id: 4,
    title: "What Is Filial Therapy?",
    img: ft4,
    reviewedBy: "Rotary- LCP",
  },
  {
    id: 5,
    title: "Parent - Child Interaction Therapy",
    img: ft5,
    reviewedBy: "Rotary- LCP",
  },
  {
    id: 6,
    title:
      "How to Mentally Prepare For Motherhood, According to Parenting Coach",
    img: ft6,
    reviewedBy: "Rotary- LCP",
  },
];

const FamilyTherapy = () => {
    const navigate = useNavigate();
  return (
    <section className="bg-pink-100 py-12 px-6 md:px-16">
      <h2 className="text-center text-4xl md:text-3xl font-bold text-[#6F145F] mb-4">
        Family Therapy
      </h2>
      <p className="text-center text-2xl text-black max-w-4xl mx-auto mb-10 leading-relaxed">
        Family issues can be one of the biggest mental health stressors in a
        person's life. Seeking help through family therapy can be an important
        step toward healing for you and your loved ones.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-18">
        {therapies.map(({ id, title, img, reviewedBy }) => (
          <div
            key={id}
            className="bg-white  rounded-lg shadow-[8px_5px_3px_0px_#8E2727] transition overflow-hidden flex flex-col"
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
                className="bg-[#6F145F] text-white px-15 py-2 cursor-pointer rounded-md font-semibold mx-auto mb-4 hover:bg-[#5a0f5a] transition">
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

export default FamilyTherapy;
