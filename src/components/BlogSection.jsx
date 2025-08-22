import React from "react";
import blogImg1 from "../assets/images/Occupation-therapy-1.jpg";
import blogImg2 from "../assets/images/couples-therapist-1080x675.jpeg";
import blogImg3 from "../assets/images/Trauma-therapy.jpg";

const articles = [
  {
    id: 1,
    date: "April 21 2025",
    category: "News",
    title: "Therapy Isn’t Just for Crisis—Here’s Why It Matters Every Day",
    image: blogImg1,
  },
  {
    id: 2,
    date: "April 14 2025",
    category: "News",
    title: "Can Online Therapy Be as Effective? Here’s What Research Says",
    image: blogImg2,
  },
  {
    id: 3,
    date: "April 02 2025",
    category: "News",
    title: "Breaking the Stigma: Why Seeing a Therapist Is a Strength",
    image: blogImg3,
  },
];

export default function BlogSection() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-gray-600 text-sm md:text-lg">From the Blog</p>
        <h2 className="text-2xl md:text-3xl font-bold text-[#6F145F] mt-2">
          Latest Articles
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 justify-items-center">
          {articles.map((article) => (
            <div
              key={article.id}
              className="bg-[#E3FFD4] rounded-3xl shadow-md overflow-hidden flex flex-col"
              style={{
                width: "300px", 
                height: "420px",
              }}
            >
              <img
                src={article.image}
                alt={article.title}
                className="h-48 w-full object-cover"
              />
              <div className="p-6 flex flex-col justify-between flex-1">
                <p className="text-gray-600 text-base">
                  {article.category} | {article.date}
                </p>
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 mt-2 line-clamp-3">
                  "{article.title}"
                </h3>
                <button className="mt-4 text-gray-700 font-medium hover:text-[#6F145F] transition">
                  Read more
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
