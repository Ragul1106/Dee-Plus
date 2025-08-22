import React, { useEffect } from "react";

const HelpCenter = () => {
   useEffect(() => {
      document.title = 'Help Center | Dee Plus';
    }, []);
  return (
    <div className="bg-[#feeeee] min-h-screen py-12 px-6 sm:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto">

        <h1 className="text-3xl sm:text-4xl font-bold text-[#6F145F] text-center mb-8">
          Help Center
        </h1>
        <p className="text-center text-gray-700 mb-12">
          Welcome to the Dee Plus Help Center! Here, you’ll find answers to
          frequently asked questions, guides on how to use our services, and
          ways to reach out if you need further assistance.
        </p>

        <div className="space-y-8">
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h2 className="text-xl font-semibold text-[#6F145F] mb-2">
              What is Dee Plus?
            </h2>
            <p className="text-gray-700">
              Dee Plus is an online platform that provides wellness, therapy,
              and mental health services. Our goal is to make care accessible
              and convenient for everyone.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h2 className="text-xl font-semibold text-[#6F145F] mb-2">
              How do I book an online therapy session?
            </h2>
            <p className="text-gray-700">
              To book a session, simply click on the "Join Now" button or visit
              the Online Therapy page. Choose a therapist and schedule a time
              that works best for you.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h2 className="text-xl font-semibold text-[#6F145F] mb-2">
              Is my personal information secure?
            </h2>
            <p className="text-gray-700">
              Yes, we take privacy and confidentiality very seriously. All your
              data and therapy sessions are protected with industry-standard
              security measures.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h2 className="text-xl font-semibold text-[#6F145F] mb-2">
              Can I cancel or reschedule a session?
            </h2>
            <p className="text-gray-700">
              Absolutely! You can cancel or reschedule your appointment up to 24
              hours before the scheduled time without any extra charges.
            </p>
          </div>
        </div>

        <div className="mt-16 bg-[#6F145F] text-white p-8 rounded-2xl shadow-lg text-center">
          <h2 className="text-2xl font-bold mb-4">Still need help?</h2>
          <p className="mb-6">
            Our support team is here for you. Reach out to us anytime!
          </p>
          <p className="mb-2">📧 support@deeplus.com</p>
          <p>📞 +91 98765 43210</p>
        </div>
      </div>
    </div>
  );
};

export default HelpCenter;
