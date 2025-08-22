import React from "react";
import { Link, useNavigate } from "react-router-dom";
export default function HappinessWeek() {
    const navigate = useNavigate();
  return (
    <div className="bg-[#feeeee] min-h-screen py-16 px-6">

      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-5xl font-bold text-pink-600 mb-4">
          🎉 Happiness Week 2025 🎉
        </h1>
        <p className="text-lg text-gray-700">
          Join us at <span className="font-semibold text-pink-500">Dee Plus</span> as we
          celebrate the power of joy, gratitude, and positivity!  
          A week full of activities, wellness sessions, and happiness challenges.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            title: "Mindfulness Monday",
            desc: "Start your week with guided meditation & breathing exercises.",
            icon: "🧘",
          },
          {
            title: "Wellness Wednesday",
            desc: "Join fitness & mental health workshops for better living.",
            icon: "💪",
          },
          {
            title: "Feel-Good Friday",
            desc: "Celebrate with gratitude journaling and community sharing.",
            icon: "🌸",
          },
        ].map((event, idx) => (
          <div
            key={idx}
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition"
          >
            <div className="text-4xl mb-3">{event.icon}</div>
            <h2 className="text-xl font-semibold text-pink-600 mb-2">
              {event.title}
            </h2>
            <p className="text-gray-600">{event.desc}</p>
          </div>
        ))}
      </div>

      <div className="text-center mt-16">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Spread Happiness, Spread Love ❤️
        </h2>
        <p className="text-gray-600 mb-6">
          Be part of this joyful movement and let’s make happiness contagious.
        </p>
        <button 
        onClick={() => navigate("/approach-form")}
        className="px-8 py-3 bg-pink-600 text-white cursor-pointer font-semibold rounded-full shadow hover:bg-pink-700 transition">
          Join Happiness Week
        </button>
      </div>
    </div>
  );
}
