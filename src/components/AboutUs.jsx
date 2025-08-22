import React, { useEffect } from "react";
import aboutImage from "../assets/images/about1.png";
import whoImg from "../assets/images/about2.png";
import whatImg from "../assets/images/about3.png";
import howImg from "../assets/images/about4.png";
import kessongaImg from "../assets/images/teacher4.png";
import andyImg from "../assets/images/teacher3.png";
import eveImg from "../assets/images/teacher2.png";
import doraImg from "../assets/images/teacher1.png";


function AboutUs() {
   useEffect(() => {
      document.title = 'About Us | Dee Plus';
    }, []);
  const data = [
    {
      title: "Who we are",
      text: "Think of DEE PLUS as your lifelong guide to better mental health. We’re here for you whenever you need us, wherever you are, helping you get through tough times and find joy in every day.",
      img: whoImg,
    },
    {
      title: "What we do",
      text: "Through evidence-based meditation and mindfulness tools, mental health coaching, therapy, psychiatry, DEE PLUS helps you create life-changing habits to support your mental health and find a healthier, happier you.",
      img: whatImg,
    },
    {
      title: "How we do it",
      text: "Our four values inform our decisions and how we operate day-to-day: put members first; bring a beginner's mind; seek truth, speak truth; embrace ownership.",
      img: howImg,
    },
  ];
  const teachers = [
    {
      name: "Kessonga",
      img: kessongaImg,
      desc: "Kessonga is a meditation teacher, therapist, and acupuncturist who has worked with populations of all ages and backgrounds.",
    },
    {
      name: "Andy",
      img: andyImg,
      desc: "A former Buddhist monk and co-founder of the DEE PLUS app, Andy has guided people in meditation for over 20 years.",
    },
    {
      name: "Eve",
      img: eveImg,
      desc: "Eve has been with DEE PLUS since the beginning, teaching mindfulness and overseeing our meditation curriculum.",
    },
    {
      name: "Dora",
      img: doraImg,
      desc: "Dora is a meditation teacher and former psychiatric nurse who is passionate about the healing powers of connection and community.",
    },
  ];

  return (
    <section className="bg-pink-50 py-12 px-6 md:px-16 lg:px-24">
      <h2 className="text-center text-lg sm:text-2xl md:text-3xl font-semibold my-4">
        About <span className="ml-1">DEE PLUS</span>
      </h2>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 mt-12">
        <div className="w-full md:w-1/3 flex justify-center">
          <img
            src={aboutImage}
            alt="Meditation"
            className="rounded-lg shadow-lg w-[280px] h-[300px] md:h-[250px] lg:h-[220px] "
          />
        </div>


        <div className="w-full md:w-2/3">
          <h3 className="text-lg md:text-3xl font-bold mb-2">Our Mission</h3>
          <p className="text-xl md:text-xl text-black leading-relaxed pe-10">
            Our mission is to provide a valuable resource of information and
            downloads to people who want to evolve mentally, emotionally and
            spiritually, and to help people become healthier, happier and more
            peaceful.
          </p>
        </div>
      </div>


      <div className="max-w-6xl mx-auto flex flex-col gap-12 mt-10">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row justify-between items-center gap-6"
          >

            <div className="md:w-3/4 text-center ">
              <h3 className="font-bold text-lg md:text-3xl leading-[36px] text-black mb-2">
                {item.title}
              </h3>
              <p className="text-black text-2xl max-w-[800px] mx-auto">
                {item.text}
              </p>
            </div>

            <div className="md:w-1/4 flex justify-center">
              <img
                src={item.img}
                alt={item.title}
                className="w-[100px] h-[100px] md:w-[140px] md:h-[140px] rounded-full object-cover shadow-md"
              />
            </div>
          </div>
        ))}
      </div>


      <div className="max-w-7xl mx-auto text-center mt-10">
        <h2 className="text-xl md:text-3xl font-bold text-black mb-12">
          Meet DEE PLUS Teachers
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teachers.map((teacher, index) => (
            <div
              key={index}
              className="bg-white rounded-xl  shadow-[8px_5px_3px_0px_#c0c0c0] p-6 flex flex-col items-center text-center max-w-[250px] mx-auto"
            >
              <img
                src={teacher.img}
                alt={teacher.name}
                className="w-[140px] h-[120px] object-cover rounded-[50%_50%_50%_50%] mb-4 shadow-[8px_4px_8px_rgba(0,0,0,0.4)]"
              />
              <h3 className="font-bold text-lg md:text-xl mb-1">{teacher.name}</h3>
              <p className="text-gray-700 text-sm md:text-lg" style={{ lineHeight: '1.2rem' }}>
                {teacher.desc}
              </p>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
}

export default AboutUs;
