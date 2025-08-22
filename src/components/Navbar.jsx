import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png";
import searchIcon from "../assets/images/search.png";
import userIcon from "../assets/images/user.png";

const links = [
  { label: "Home", to: "/" },
  { label: "Therapy", to: "/therapy" },
  { label: "About Us", to: "/about" },
  { label: "Meditation", to: "/meditation" },
  { label: "Contact Us", to: "/contact" },
];

const linkBase =
  "block px-3 py-1 rounded-full transition-colors duration-200 hover:text-yellow-300";

const getLinkClass = (label, isActive) => {
  if (label === "Home") {
    return isActive ? "text-[#6F145F]" : "text-[#E3FFD4]"; 
  }
  return isActive ? "text-[#6F145F]" : "text-white"; 
};

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-[#B285C0] rounded-full px-6 lg:px-20 py-3 flex items-center justify-between mt-10 z-50 relative">
      <div className="flex items-center gap-6 lg:gap-14">
        <img
          src={logo}
          alt="Dee Plus Logo"
          className="h-14 w-14 lg:h-20 lg:w-20"
        />

        <ul className="hidden lg:flex items-center gap-6 lg:gap-10 text-lg lg:text-xl xl:text-2xl">
          {links.map(({ label, to }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={to === "/"}
                className={({ isActive }) =>
                  `${linkBase} ${getLinkClass(label, isActive)}`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex items-center gap-6">
        <img
          src={searchIcon}
          alt="Search"
          className="h-7 w-7 lg:h-8 lg:w-8 "
        />
        <img
          src={userIcon}
          alt="User"
          className="h-7 w-7 lg:h-8 lg:w-8 "
        />

        <button
          className="lg:hidden flex flex-col justify-center gap-1.5 p-2 rounded-md"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
        </button>
      </div>

      {open && (
        <ul className="absolute top-full right-4 mt-2 w-56 lg:hidden bg-[#B285C0] rounded-2xl shadow-lg p-4 space-y-2 text-lg">
          {links.map(({ label, to }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={to === "/"}
                className={({ isActive }) =>
                  `${linkBase} ${getLinkClass(label, isActive)}`
                }
                onClick={() => setOpen(false)}
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
