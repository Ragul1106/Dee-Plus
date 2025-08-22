import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ForgetPassword = () => {
    useEffect(() => {
        document.title = "Forget Password | Dee plus";
    }, []);

    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
  e.preventDefault();

  const users = JSON.parse(localStorage.getItem("users")) || [];
  const userIndex = users.findIndex((u) => u.email.toLowerCase() === email.toLowerCase());

  if (userIndex === -1) {
    toast.error("Email not found", { position: "top-right", autoClose: 2000 });
    return;
  }

  const newPassword = "deeplus123"; 
  users[userIndex].password = newPassword;

  localStorage.setItem("users", JSON.stringify(users));
  toast.success(`Reset Password send to ${email}`, { position: "top-center", autoClose: 2000 });

  setTimeout(() => navigate("/login-signup"), 2200);
};

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#FEEEEE] p-4">
            <div className="bg-gradient-to-r from-[#a6e2f8] to-[#d380e8] p-8 rounded-2xl shadow-md w-full max-w-xl text-center relative">
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#f19f9f] to-[#64b7d6] px-10 py-2 text-white rounded-3xl text-2xl font-bold">
                    FORGET PASSWORD
                </div>

                <form onSubmit={handleSubmit} className="mt-10 space-y-8">
                    <div>
                        <label className="block text-left font-bold text-xl mb-2">E MAIL</label>
                        <input
                            type="email"
                            className="w-full h-[9vh] px-4 py-2 border border-red-300 rounded-full shadow-md"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-50 bg-gradient-to-r from-[#df477f] to-[#d6d664] text-white cursor-pointer text-lg py-2 rounded-full font-bold"
                    >
                        SUBMIT
                    </button>
                </form>

                <p className="text-black text-sm mt-6">
                    By Joining And Using dee plus Platform, You Agree To Our{" "}
                    <span
                        className="underline cursor-pointer text-sm"
                        onClick={() => navigate("/terms-and-conditions")}
                    >
                        Terms & Conditions
                    </span>
                </p>
            </div>
        </div>
    );
};

export default ForgetPassword;
