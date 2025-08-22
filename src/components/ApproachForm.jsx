import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import modalImage from "../assets/images/approachImage.png";

const ApproachForm = () => {
   useEffect(() => {
      document.title = 'Approach Form | Dee Plus';
    }, []);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  const handlePaymentRedirect = () => {
    navigate("/payment");
  };

  return (
    <div className="bg-[#FEEEEE] py-12 px-6 md:px-16">
      <h2 className="text-center text-xl md:text-2xl font-bold text-[#6F145F] mb-2">
        How to Mentally Prepare for Fatherhood, According to a Parenting Coach
      </h2>
      <h3 className="text-center text-xl md:text-2xl font-semibold text-black mb-8">
        Approach Form
      </h3>

      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              First Name
            </label>
            <input
              type="text"
              required
              pattern="^[A-Za-z\s]+$"
              title="First name should only contain alphabets"
              className="w-full px-4 py-2 rounded-md bg-[#DDBAE7] focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Last Name
            </label>
            <input
              type="text"
              required
              pattern="^[A-Za-z\s]+$"
              title="Last name should only contain alphabets"
              className="w-full px-4 py-2 rounded-md bg-[#DDBAE7] focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Mobile No
          </label>
          <input
            type="text"
            required
            pattern="[0-9]{10}"
            title="Enter a valid 10-digit mobile number"
            className="w-full px-4 py-2 rounded-md bg-[#DDBAE7] focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">
            E-Mail Id
          </label>
          <input
            type="email"
            required
            className="w-full px-4 py-2 rounded-md bg-[#DDBAE7] focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">
            No. Of Therapy Day
          </label>
          <select
            required
            className="w-full px-4 py-2 rounded-md bg-[#DDBAE7] text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-600"
          >
            <option value="" disabled selected>
              Select
            </option>
            <option>1 Day</option>
            <option>2 Days</option>
            <option>Weekly</option>
          </select>
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Family Members Count
          </label>
          <input
            type="number"
            required
            min="1"
            className="w-full px-4 py-2 rounded-md bg-[#DDBAE7] focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Address
          </label>
          <textarea
            rows="3"
            required
            className="w-full px-4 py-2 rounded-md bg-[#DDBAE7] focus:outline-none focus:ring-2 focus:ring-purple-600"
          ></textarea>
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Time Availability
          </label>
          <select
            required
            className="w-full px-4 py-2 rounded-md bg-[#DDBAE7] text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-600"
          >
            <option value="" disabled selected>
              Select
            </option>
            <option>Morning</option>
            <option>Afternoon</option>
            <option>Evening</option>
          </select>
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Current City
          </label>
          <input
            type="text"
            required
            className="w-full px-4 py-2 rounded-md bg-[#DDBAE7] focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 mt-5 text-3xl rounded-md cursor-pointer bg-gradient-to-b from-[#6F145F] to-[#AB2192] text-white font-bold shadow-lg"
        >
          Submit
        </button>
      </form>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/80 z-999">
          <div className="bg-[#FF6A6A] rounded-lg p-6 w-[90%] max-w-md text-center shadow-xl relative">
            <img
              src={modalImage}
              alt="Accepted"
              className="w-40 h-40 mx-auto mb-4"
            />

            <h2 className="text-xl font-bold text-white mb-2">
              Your Approach Has been Accepted
            </h2>
            <p className="text-white text-md mb-4">
              Complete your Payment Process Quickly
            </p>

            <p className="text-black font-semibold mb-2">Click Here</p>

            <p
              className="text-blue-900 underline cursor-pointer break-all"
              onClick={handlePaymentRedirect}
            >
              gfjhgfj263h52kdzgbs56gfhgc
            </p>

            <button
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-3 text-white text-lg font-bold"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ApproachForm;
