import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import LoginSignup from "./components/LoginSignUp";
import ForgetPassword from "./components/ForgotPassword";
import HomePage from "./components/Home";
import AboutSection from "./components/AboutUs";
import Therapy from "./components/Therapy";
import FamilyTherapy from "./components/FamilyTherapy";
import IndividualTherapy from "./components/IndividualTherapy";
import CouplesTherapy from "./components/CoupleTherapy";
import GroupTherapy from "./components/GroupTherapy";
import OnlineTherapy from "./components/OnlineTherapy";
import Contact from "./components/ContactUs";
import Payment from "./components/PaymentPage";
import FAQ from "./components/FAQ";
import TermsAndConditions from "./components/TermsAndConditions";
import HelpCenter from "./components/HelpCenter";
import Partnership from "./components/PartnerShip";
import ApproachForm from "./components/ApproachForm";
import HappinessWeek from "./components/HappinessWeek";
import MeditationSection from "./components/Meditation";
import PopularMeditations from "./components/PopularMeditation";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



const App = () => {
  return (  
    //  <WishlistProvider>
    <Router>
      <ScrollToTop />
      <div className="flex flex-col font-roboto bg-[#FEEEEE]">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutSection />} />
          <Route path="/therapy" element={<Therapy />} />
          <Route path="/login-signup" element={<LoginSignup />} />
          <Route path="/forget-password" element={<ForgetPassword />} />
          <Route path="/family-therapy" element={<FamilyTherapy />} />
          <Route path="/individual-therapy" element={<IndividualTherapy />} />
          <Route path="/couples-therapy" element={<CouplesTherapy />} />
          <Route path="/group-therapy" element={<GroupTherapy />} />
          <Route path="/online-therapy" element={<OnlineTherapy />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/approach-form" element={< ApproachForm/>} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="/help-center" element={<HelpCenter />} />
          <Route path="/partnership" element={<Partnership />} />
          <Route path="/happiness-week" element={<HappinessWeek />} />
          <Route path="/meditation" element={< MeditationSection/>} />
          <Route path="/popular-meditations" element={< PopularMeditations/>} />
        </Routes>
        <Footer />
      </div>
       <ToastContainer />
    </Router>
    // </WishlistProvider>
  );
};

export default App;
