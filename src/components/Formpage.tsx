import React from 'react';
import { motion } from 'framer-motion';

const FormPage = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 flex items-center justify-center px-4">
      <div className="max-w-6xl w-full grid lg:grid-cols-2 gap-10 py-16">
        
        {/* Left: Full-Height YouTube Short */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="h-full w-full rounded-2xl overflow-hidden shadow-xl flex items-center justify-center"
        >
          <div className="w-full h-full">
            <iframe
              className="w-full h-full rounded-2xl"
              src="https://www.youtube.com/embed/pEq-8mq5FME"
              title="Dream100 Short Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </motion.div>

        {/* Right: Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white shadow-xl rounded-2xl p-8 space-y-6 flex flex-col justify-center"
        >
          <h2 className="text-3xl font-bold text-gray-900">Join the Scaling Wolf Webinar</h2>
          <p className="text-sm text-gray-500 mb-4">Grab your exclusive bonuses for just <span className="font-semibold text-purple-600">₹99</span></p>

          <form className="space-y-4">
            <div>
              <label className="text-sm font-medium text-gray-700">Full Name</label>
              <input type="text" placeholder="Enter Your First Name" className="mt-1 w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500" />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">Last Name</label>
              <input type="text" placeholder="Last Name" className="mt-1 w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500" />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">Business Name</label>
              <input type="text" placeholder="Enter Your Business Name" className="mt-1 w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500" />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">Whatsapp Phone Number</label>
              <input type="tel" placeholder="Mobile Number" className="mt-1 w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500" />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">Email</label>
              <input type="email" placeholder="Email Address" className="mt-1 w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500" />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">Business Location</label>
              <select className="mt-1 w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500">
                <option value="">Select Location</option>
                <option value="Chennai">Chennai</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">Yearly Turnover</label>
              <select className="mt-1 w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500">
                <option value="">Select your TurnOver</option>
                <option value="0-10L">0–10 Lakhs</option>
                <option value="10-50L">10–50 Lakhs</option>
                <option value="50L-1C">50 Lakhs – 1 Crore</option>
                <option value="1C+">1 Crore+</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">Where did you hear about us</label>
              <select className="mt-1 w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500">
                <option value="">Select Any</option>
                <option value="Instagram">Instagram</option>
                <option value="YouTube">YouTube</option>
                <option value="Referral">Referral</option>
                <option value="WhatsApp">WhatsApp</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full mt-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold py-3 rounded-lg hover:shadow-lg transition-all duration-300"
            >
              Register Now for ₹99
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default FormPage;
