import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import meditationImage from "../assets/images/meditation.jpg";

const MeditationSection = () => {
     useEffect(() => {
        document.title = 'Meditation | Dee Plus';
      }, []);
    const navigate = useNavigate();
    const duration = "5:00";
    return (
        <section className="bg-[#FEEEEE] py-12 px-6 md:px-16">
            <h2 className="text-center text-2xl md:text-3xl font-bold text-[#6F145F] mb-4">
                Meditation
            </h2>

            <p className="text-center text-gray-800 max-w-5xl mx-auto mb-6 text-md md:text-2xl leading-relaxed">
                Meditation is a practice of focusing the mind and achieving a state of
                calm and clarity, often through techniques like breathing,
                mindfulness, or visualization.
            </p>

            <div className="flex justify-center mb-12">
                <button
                    onClick={() => navigate("/popular-meditations")}
                    className="bg-black text-white cursor-pointer font-semibold px-15 py-2 rounded-2xl hover:bg-gray-800 transition">
                    Start Your Free Trial
                </button>
            </div>

            <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-8 max-w-5xl mx-auto">

                <div className="md:w-1/2 text-center md:text-center">
                    <p className="text-sm font-medium text-gray-600">Featured Meditation</p>
                    <h3 className="text-xl font-bold text-[#6F145F] mb-4">
                        Sleep Meditation
                    </h3>
                    <p className="text-gray-800 text-2xl text-center leading-relaxed mb-6">
                        The sleep struggle is very real. Nighttime meditation can help.
                        This dreamy practice reduces stress, calms the mind, and improves
                        sleep quality, so you can actually get a good night's rest. Try it
                        here and tell us how you feel in the morning.
                    </p>
                    <button
                        onClick={() => navigate("/popular-meditations")}
                        className="bg-black text-white cursor-pointer font-semibold px-15 py-2 rounded-2xl hover:bg-gray-800 transition">
                        Start Your Free Trial
                    </button>
                </div>

                <div className="md:w-1/2 flex flex-col items-center">
                    <div className="relative w-80 h-96 rounded-lg p-2 overflow-hidden">

                        <img
                            src={meditationImage}
                            alt="Meditation"
                            className="w-full rounded-4xl h-full object-cover"
                        />

                        <div className="absolute top-40 left-60 z-50 w-16 h-16 rounded-full bg-white/30  flex items-center justify-center shadow-md">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                className="w-13 h-13 text-white"
                            >
                                <path d="M8 5v14l11-7z" />
                            </svg>
                        </div>

                        <div className="absolute bottom-6 left-6 right-6 bg-white/70 backdrop-blur-md p-3">
                            <p className="text-center font-semibold text-gray-800 mb-2">
                                Soothe Anxiety to Sleep
                            </p>

                            <div className="flex-1 relative">
                                <div className="h-[1px] bg-black rounded-full">
                                    <div className="w-0 h-[2px] bg-gray-800 rounded-full"></div>
                                </div>

                                <div className="absolute -left-0 top-1/45 transform -translate-y-1/2 w-4 h-4 rounded-full border-1 border-black bg-white"></div>

                                <div className="flex justify-between text-xs text-black mt-3">
                                    <span>0:00</span>
                                    <span>{duration}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-3xl mx-auto mt-12">
                <h4 className="text-center font-bold text-lg md:text-xl text-gray-900 mb-6">
                    Daily Themes (5–10 minutes each)
                </h4>
                <ul className="space-y-4 text-gray-800 text-center md:text-center">
                    <li>
                        <strong>Day 1 – Gratitude</strong><br />
                        Focus on 3 things you're thankful for. Feel the warmth they bring.
                    </li>
                    <li>
                        <strong>Day 2 – Loving-Kindness</strong><br />
                        Silently repeat: "May I be happy. May others be happy."
                    </li>
                    <li>
                        <strong>Day 3 – Present Moment Joy</strong><br />
                        Mindfully notice small joys—breath, light, sound—with full attention.
                    </li>
                    <li>
                        <strong>Day 4 – Smile Meditation</strong><br />
                        Gently smile while breathing slowly. Let the feeling of ease spread.
                    </li>
                    <li>
                        <strong>Day 5 – Positive Memories</strong><br />
                        Recall a joyful moment. Re-experience it with all your senses.
                    </li>
                    <li>
                        <strong>Day 6 – Self-Compassion</strong><br />
                        Send kindness to yourself. Affirm: "I am enough. I deserve joy."
                    </li>
                    <li>
                        <strong>Day 7 – Intentional Joy</strong><br />
                        Visualize a joyful life. Imagine waking up smiling, living freely.
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default MeditationSection;
