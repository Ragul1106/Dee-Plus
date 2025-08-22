import React, { useState } from "react";
import captchaImg from "../assets/images/captcha.png";
import contactIcon from "../assets/images/meditation_853x480.jpg-min.jpg";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    message: "",
    notRobot: false,
  });

  const [errors, setErrors] = useState({
    name: "",
    mobile: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (name === "name") {
      const regex = /^[A-Za-z\s]+$/;
      if (!value) {
        setErrors((prev) => ({ ...prev, name: "Name is required" }));
      } else if (!regex.test(value)) {
        setErrors((prev) => ({
          ...prev,
          name: "Name must contain only alphabets (no numbers or symbols)",
        }));
      } else {
        setErrors((prev) => ({ ...prev, name: "" }));
      }
    }

    if (name === "mobile") {
      if (!/^[0-9]{10}$/.test(value)) {
        setErrors((prev) => ({
          ...prev,
          mobile: "Mobile number must be exactly 10 digits",
        }));
      } else {
        setErrors((prev) => ({ ...prev, mobile: "" }));
      }
    }

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.notRobot) {
      alert("Please confirm 'I am not a Robot'");
      return;
    }

    if (errors.name || errors.mobile) {
      alert("Please fix the errors before submitting.");
      return;
    }

    setSubmitted(true);
    setFormData({
      name: "",
      mobile: "",
      email: "",
      message: "",
      notRobot: false,
    });
  };

  return (
    <div className="bg-[#feeeee] py-10 px-6 md:px-16">
      <div className="flex flex-col items-center mb-6">
        <div className="relative flex justify-center mb-6">
          <img src={contactIcon} alt="Contact Icon" className="w-[800px] h-96" />
          <p className="absolute text-center text-lg md:text-xl font-bold md:px-4 top-28 md:top-36 -left-20 md:left-16 px-24">
            Reach out — we’re here to <br /> help you find your inner peace.
          </p>
        </div>
        <h2 className="text-center text-3xl font-bold">Contact DEE PLUS</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-7xl mx-auto">
        <div className="text-black space-y-6 text-center md:text-left">
          <p>
            <span className="font-bold text-xl">Address:</span>
            <br />
            <span className="text-lg">
              6, Hethendran Street,
              <br />
              Kongu Nagar,
              <br />
              Karur - 26
            </span>
            <br />
            <span className="font-bold text-xl">Mobile No:</span>
            <br />
            <span className="text-lg">+9532 32556</span>
            <br />
            <span className="font-bold text-xl">E-Mail Id:</span>
            <br />
            <span className="text-lg">deepluswell@gmail.com</span>
          </p>

          <p>
            <span className="font-bold text-xl">General Enquiries</span>
            <br />
            <span className="text-lg">
              Got a general question? <br /> Please use this Contact Form to reach out to us.
            </span>
          </p>

          <p>
            <span className="font-bold text-xl">Feedback</span>
            <br />
            <span className="text-lg">
              Do you have something to say about The Guided Meditation Site? Feel free to give us your feedback via this Contact Form.
            </span>
          </p>

          <p>
            <span className="font-bold text-xl">Opening Time</span>
            <br />
            <span className="text-lg">
              Monday - Sunday
              <br />
              9.00 AM To 9.00PM
            </span>
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-6 flex flex-col items-start"
        >

          <div className="w-full">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
              className={`w-full md:w-[500px] h-[42px] bg-white border-2 rounded-[15px] px-4 placeholder-black text-black ${
                errors.name ? "border-red-500" : "border-black"
              }`}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          <div className="w-full">
            <input
              type="text"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              placeholder="Mobile No"
              required
              maxLength={10}
              className={`w-full md:w-[500px] h-[42px] bg-white border-2 rounded-[15px] px-4 placeholder-black text-black ${
                errors.mobile ? "border-red-500" : "border-black"
              }`}
            />
            {errors.mobile && (
              <p className="text-red-500 text-sm mt-1">{errors.mobile}</p>
            )}
          </div>

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="E-Mail"
            required
            className="w-full md:w-[500px] h-[42px] bg-white border-2 border-black rounded-[15px] px-4 placeholder-black text-black"
          />

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message"
            required
            className="w-full md:w-[500px] h-[150px] bg-white border-2 border-black rounded-[15px] px-4 py-3 placeholder-black text-black resize-none"
          ></textarea>

          <div className="flex flex-wrap md:flex-nowrap items-center bg-white justify-around md:justify-start border-2 border-black rounded-[10px] px-4 py-2 w-full md:w-auto">
            <div className="flex items-center justify-center h-8 w-8 mr-3">
              <input
                type="checkbox"
                name="notRobot"
                checked={formData.notRobot}
                onChange={handleChange}
                className="h-5 w-5 accent-black rounded-sm cursor-pointer"
              />
            </div>
            <span className="text-black mr-4">I am Not a Robot</span>
            <img
              src={captchaImg}
              alt="captcha"
              className="h-12 w-auto border-2 border-black rounded mt-2 md:mt-0"
            />
          </div>

          <button
            type="submit"
            className="w-full h-auto bg-[#6F145F] text-2xl text-white py-2 rounded-[15px] cursor-pointer border-2 border-black md:w-[500px]"
          >
            Contact Us
          </button>

          {submitted && (
            <p className="text-green-600 font-semibold mt-4">
              ✅ Thank you! We will contact you soon.
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
