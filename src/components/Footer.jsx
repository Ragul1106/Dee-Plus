import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logoImg from "../assets/images/logo.png";
import medIcon from "../assets/images/yoga.png";
import locationIcon from "../assets/images/map.png";
import phoneIcon from "../assets/images/phone.png";
import emailIcon from "../assets/images/mail.png";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="bg-[#B285C0] text-white rounded-[20px] py-6 px-4 md:px-10 my-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">

        <div className="flex justify-center md:justify-start">
          <img
            src={logoImg}
            alt="Dee Plus Logo"
            className="w-28 md:w-32 h-28 mt-8 cursor-pointer"
            onClick={() => navigate("/")}
          />
        </div>

        <div>
          <ul className="text-sm md:text-lg space-y-1">
            <li><Link to="/" className="hover:underline">Home</Link></li>
            <li><Link to="/happiness-week" className="hover:underline">Happiness Week</Link></li>
            <li><Link to="/about" className="hover:underline">About Us</Link></li>
            <li><Link to="/contact" className="hover:underline">Contact Us</Link></li>
            <li><Link to="/therapy" className="hover:underline">Course</Link></li>
            <li><Link to="/meditation" className="hover:underline">Meditation</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm md:text-lg font-semibold">Quick Links</h3>
          <ul className="text-sm md:text-lg space-y-1">
            <li><Link to="/faq" className="hover:underline">FAQ</Link></li>
            <li><Link to="/terms-and-conditions" className="hover:underline">Terms & Conditions</Link></li>
            <li><Link to="/help-center" className="hover:underline">Help Center</Link></li>
            <li><Link to="/partnership" className="hover:underline">Partnership</Link></li>
          </ul>
        </div>

        <div className="relative flex flex-col">
          <h3 className="text-sm md:text-lg font-semibold">Opening Time</h3>
          <p className="text-sm md:text-lg">Monday - Sunday</p>
          <p className="text-sm md:text-lg">9.00 AM To 9.00 PM</p>
          <img
            src={medIcon}
            alt="Meditation"
            className="absolute bottom-0 left-36 md:-bottom-8 md:left-4 lg:-bottom-8 lg:left-4 w-16 mx-auto mt-4"
          />
        </div>

        <div className="flex flex-col">
          <h3 className="font-semibold">Contact:</h3>
          <p className="flex items-start gap-2 text-sm md:text-lg">
            <img src={locationIcon} alt="Location" className="w-4 h-4 mt-1" />
            6, Hethendran Street, Kongu Nagar, Karur - 26
          </p>
          <p className="flex items-center gap-2 text-sm md:text-lg cursor-pointer" onClick={() => navigate("tel:+953232556")}>
            <img src={phoneIcon} alt="Phone" className="w-4 h-4" /> 
            +9532 32556
          </p>
          <p className="flex items-center gap-2 text-sm md:text-lg cursor-pointer" onClick={() => navigate("mailto:deepluswell@gmail.com")}>
            <img src={emailIcon} alt="Email" className="w-4 h-4" /> 
            deepluswell@gmail.com
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
