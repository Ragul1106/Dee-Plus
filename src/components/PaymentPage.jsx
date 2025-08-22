import React, { useState, useEffect } from "react";
import gpay from "../assets/images/gpay.png";
import phonepay from "../assets/images/phonepay.png";
import paytm from "../assets/images/paytm.png";
import amazonpay from "../assets/images/amazonpay.png";
import whatsapp from "../assets/images/whatsapp.png";
import successImg from "../assets/images/paymentsuccess.png";

const PaymentPage = () => {
   useEffect(() => {
      document.title = 'Payment | Dee Plus';
    }, []);
  const [selectedMethod, setSelectedMethod] = useState(""); 
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState(""); 
  
  const paymentMethods = [
    { name: "Debit/ Credit Card", img: null },
    { name: "Google Pay", img: gpay },
    { name: "Phone Pay", img: phonepay },
    { name: "Paytm", img: paytm },
    { name: "Amazon Pay", img: amazonpay },
    { name: "Whats app", img: whatsapp },
  ];

  const handleSelection = (name) => {
    setSelectedMethod(name); 
    setError(""); 
  };

  const handleConfirm = () => {
    if (!selectedMethod) {
      setError("Please select a payment method to continue");
      return;
    }
    setShowModal(true);
  };

  return (
    <div className="min-h-screen bg-[#FEEEEE] flex flex-col items-center py-10 px-4 z-50">
      <div className="w-full max-w-4xl bg-[rgba(178,133,192,0.31)] rounded-[40px] md:rounded-[70px] p-6 md:p-10 mb-10">
        <h2 className="text-xl md:text-2xl font-bold text-[#6F145F] text-center mb-10">
          Payment Details
        </h2>
        <div className="text-sm md:text-base space-y-2">
          <div className="flex md:text-3xl justify-between">
            <span>Therapist Fee Per Session</span>
            <span>Rs.2,500.00</span>
          </div>
          <div className="flex md:text-3xl justify-between">
            <span>No. of Session 25</span>
            <span>Rs.62,500.00</span>
          </div>
          <div className="flex md:text-3xl justify-between">
            <span>Vehicle Fees</span>
            <span>Rs.1,500.00</span>
          </div>
          <div className="flex md:text-3xl justify-between">
            <span>Counselling Fees</span>
            <span>Rs.4,500.00</span>
          </div>
          <div className="flex md:text-3xl justify-between font-bold">
            <span>Total</span>
            <span>Rs.68,500.00</span>
          </div>
        </div>
      </div>

      <h2 className="text-xl md:text-2xl font-bold text-[#6F145F] text-center mb-4">
        Payment Method
      </h2>

      <div className="w-full max-w-4xl bg-[rgba(178,133,192,0.35)] rounded-[40px] md:rounded-[70px] p-6 md:p-10">
        <div className="space-y-4 text-sm md:text-3xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3 md:space-x-10">
              <span>Debit/ Credit Card</span>
            </div>
            <input
              type="radio" 
              name="paymentMethod" 
              checked={selectedMethod === "Debit/ Credit Card"}
              onChange={() => handleSelection("Debit/ Credit Card")}
              className="w-8 h-8 md:me-10 bg-white cursor-pointer rounded-lg border-2 border-black appearance-none checked:bg-blue-600 checked:border-blue-600 relative
              before:content-['✔'] before:absolute before:text-white before:text-lg before:font-bold before:opacity-0 checked:before:opacity-100 before:left-[4px] before:top-[-2px]"
            />
          </div>

          <p className="font-bold mt-4">UPI</p>

          {paymentMethods
            .filter((m) => m.name !== "Debit/ Credit Card")
            .map((method, idx) => (
              <div key={idx} className="flex items-center justify-between">
                <div className="flex items-center space-x-3 md:space-x-10">
                  {method.img && (
                    <img
                      src={method.img}
                      alt={method.name}
                      className="w-12 h-12 object-cover p-1 bg-white rounded-full shadow"
                    />
                  )}
                  <span>{method.name}</span>
                </div>
                <input
                  type="radio" 
                  name="paymentMethod" 
                  checked={selectedMethod === method.name}
                  onChange={() => handleSelection(method.name)}
                  className="w-8 h-8 md:me-10 bg-white cursor-pointer rounded-lg border-2 border-black appearance-none checked:bg-blue-600 checked:border-blue-600 relative
                  before:content-['✔'] before:absolute before:text-white before:text-lg before:font-bold before:opacity-0 checked:before:opacity-100 before:left-[4px] before:top-[-2px]"
                />
              </div>
            ))}
        </div>

        {error && (
          <div className="mt-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg text-center">
            {error}
          </div>
        )}

        <div className="flex justify-center mt-8">
          <button
            onClick={handleConfirm}
            className="w-full md:w-[447px] h-[58px] cursor-pointer bg-gradient-to-b from-[#6F145F] to-[#9747FF] rounded-lg text-white font-semibold text-base md:text-lg shadow-md hover:opacity-90 transition"
          >
            Confirm Payment
          </button>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center px-4 z-50">
          <div className="bg-white rounded-2xl shadow-lg p-6 max-w-md w-full text-center">
            <img
              src={successImg}
              alt="Payment Success"
              className="w-full h-64 object-contain mb-6"
            />
            <h2 className="text-2xl font-bold text-[#6F145F] mb-2">
              Payment Success
            </h2>
            <p className="text-gray-700 mb-4">
              Your Session starts Tomorrow
              <br />
              Selected Payment Method: <span className="font-semibold">{selectedMethod}</span>
            </p>
            <button
              onClick={() => setShowModal(false)}
              className="mt-4 px-6 py-2 bg-[#6F145F] text-white cursor-pointer rounded-lg shadow hover:opacity-90"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PaymentPage;
