import React, { useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import heroBanner from "../assets/images/hero_banner.jpg";
import joinNowButton from "../assets/images/join_now_button.png";
import DeePlus from "../components/DeePlus";
import whiteBox from "../assets/images/white-box.png";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import Testimonials from "../components/Testimonials";
import OurTeam from "../components/OurTeam";
import BlogSection from "../components/BlogSection";
import FAQ from "../components/FAQ";

const HeroSection = () => {
  useEffect(() => {
    document.title = 'Home | Dee Plus';
  }, []);
  const navigate = useNavigate();
  const location = useLocation();
  const faq = useRef(null);

   useEffect(() => {
    if (location.hash === "#faq" && faq.current) {
      faq.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return (
    <div className="bg-[#feeeee] ">
      <section className="relative w-full flex items-center justify-center py-8">
        <div className="relative w-full px-4 sm:px-6 md:px-10 lg:px-12">
          <img
            src={heroBanner}
            alt="Hero Banner"
            className="w-full h-[182px] sm:h-[300px] md:h-[450px] lg:h-[600px] object-cover rounded-2xl"
          />

          <div
            className="absolute bottom-4 right-4 sm:bottom-6 sm:right-8 md:bottom-12 md:right-16 lg:bottom-16 lg:right-24
                 w-[240px] sm:w-[300px] md:w-[500px] h-[140px] sm:h-[180px] md:h-[300px]"
          >
            <img
              src={whiteBox}
              alt="White Box"
              className="w-full h-full object-contain"
            />

            <p
              className="absolute top-8 sm:top-10 md:top-20 left-6 sm:left-10 md:left-20 text-center
                   text-[#6F145F] font-semibold text-xs sm:text-base md:text-xl px-1 sm:px-2"
            >
              “When you realize nothing is lacking, <br />
              the whole world belongs to you.”
            </p>


            <img
              src={joinNowButton}
              alt="Join Now"
              onClick={() => navigate("/therapy")}
              className="absolute bottom-6 sm:bottom-10 md:bottom-16 left-20 sm:left-28 md:left-44
                   w-[90px] sm:w-[130px] md:w-[180px] cursor-pointer transition-transform hover:scale-105"
            />
          </div>
        </div>
      </section>
      <DeePlus />
      <AboutSection />
      <ServicesSection />
      <Testimonials />
      <OurTeam />
      <BlogSection />
      <div id="faq" ref={faq}>
        <FAQ />
      </div>
    </div>
  );
};

export default HeroSection;
