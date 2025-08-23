import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Partnership = () => {
  useEffect(() => {
    document.title = "Partnership | Dee Plus";
  }, []);

  const [formData, setFormData] = useState({
    fullName: "",
    organization: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const isValidName = (name) => /^[A-Za-z\s]+$/.test(name); 
  const isValidEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email); 

  const handleSubmit = (e) => {
    e.preventDefault();

    const { fullName, organization, email, message } = formData;

    if (!fullName.trim() || !organization.trim() || !email.trim() || !message.trim()) {
      toast.error("⚠️ Please fill out all fields before submitting.");
      return;
    }

    if (!isValidName(fullName)) {
      toast.error("⚠️ Name should only contain letters and spaces.");
      return;
    }

    if (!isValidEmail(email)) {
      toast.error("⚠️ Please enter a valid email address.");
      return;
    }

    toast.success("✅ Partnership request submitted! We will call you soon.");

    setFormData({
      fullName: "",
      organization: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="bg-[#fdf6f9] min-h-screen py-12 px-6 sm:px-12 lg:px-20">
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-[#6F145F] mb-4">
          Partner with Dee Plus
        </h1>
        <p className="text-gray-700 text-base sm:text-lg max-w-3xl mx-auto">
          At Dee Plus, we believe in building meaningful collaborations to
          expand our impact in the mental wellness and therapy ecosystem. Join
          us as a partner and contribute to transforming lives.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <div className="bg-white shadow-md rounded-2xl p-6">
          <h2 className="text-xl font-semibold text-[#6F145F] mb-3">
            Why Partner With Us?
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Access to our growing community of therapy seekers.</li>
            <li>Collaborate with certified therapists and experts.</li>
            <li>Co-branding opportunities on workshops & webinars.</li>
            <li>Data-driven insights for better engagement.</li>
          </ul>
        </div>

        <div className="bg-white shadow-md rounded-2xl p-6">
          <h2 className="text-xl font-semibold text-[#6F145F] mb-3">
            Who Can Partner?
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Healthcare organizations</li>
            <li>Corporate wellness programs</li>
            <li>Universities & educational institutions</li>
            <li>Non-profit organizations</li>
            <li>Individual mental health professionals</li>
          </ul>
        </div>
      </div>

      <div className="bg-white shadow-md rounded-2xl p-8 max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold text-[#6F145F] mb-6 text-center">
          Partnership Inquiry Form
        </h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6F145F]"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Organization / Company
            </label>
            <input
              type="text"
              name="organization"
              value={formData.organization}
              onChange={handleChange}
              placeholder="Enter your organization name"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6F145F]"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6F145F]"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Message
            </label>
            <textarea
              rows="4"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us how you would like to collaborate"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6F145F]"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-[#6F145F] text-white cursor-pointer font-semibold px-6 py-3 rounded-lg hover:bg-[#4a0f42] transition"
          >
            Submit Partnership Request
          </button>
        </form>
      </div>

      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default Partnership;
