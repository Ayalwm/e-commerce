import React from "react";
import { FaCreditCard, FaTruck, FaExchangeAlt, FaHeadphones } from "react-icons/fa"; // Updated icons

const Home = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        {/* Text Section */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl font-bold text-gray-800 mb-4 leading-tight">
            Trust in every transaction
          </h1>
          <p className="text-gray-600 text-lg mb-6">
            An end-to-end transaction solution that seamlessly integrates payments, fulfillment, and support into your marketplace or platform.
          </p>
          <div className="space-x-4">
            <button className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700">
              Get started
            </button>
          </div>
        </div>

        {/* Illustration Section */}
        <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
          <div className="relative">
            <div className="bg-blue-100 p-6 rounded-full shadow-lg">
              <div className="w-32 h-32 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-3xl">
                tr
              </div>
            </div>
            <div className="absolute -bottom-8 -right-8 bg-white p-4 rounded-lg shadow-lg border">
              <p className="text-gray-600 font-semibold">Secure Payments</p>
              <p className="text-gray-400 text-sm">Integrated solutions for marketplaces</p>
            </div>
          </div>
        </div>
      </div>

      {/* Continuous Moving Features Section */}
      <div className="bg-gray-50 py-12 mt-16">
        <div className="container mx-auto px-4">
          <div className="features-wrapper flex gap-8 animate-train">
            {/* Feature 1: Secure Payments */}
            <div className="flex items-center justify-center space-x-4 p-6 bg-white rounded-xl shadow-lg">
              <FaCreditCard className="text-green-600 text-3xl" />
              <div>
                <h3 className="font-semibold text-xl text-gray-800">Secure Payments</h3>
                <p className="text-gray-600 text-sm">Safe, encrypted payment processing</p>
              </div>
            </div>

            {/* Feature 2: Fast Order Fulfillment */}
            <div className="flex items-center justify-center space-x-4 p-6 bg-white rounded-xl shadow-lg">
              <FaTruck className="text-orange-600 text-3xl" />
              <div>
                <h3 className="font-semibold text-xl text-gray-800">Fast Order Fulfillment</h3>
                <p className="text-gray-600 text-sm">Delivery within 2-3 business days</p>
              </div>
            </div>

            {/* Feature 3: Easy Returns */}
            <div className="flex items-center justify-center space-x-4 p-6 bg-white rounded-xl shadow-lg">
              <FaExchangeAlt className="text-yellow-600 text-3xl" />
              <div>
                <h3 className="font-semibold text-xl text-gray-800">Easy Returns</h3>
                <p className="text-gray-600 text-sm">30-day returns with no hassle</p>
              </div>
            </div>

            {/* Feature 4: 24/7 Customer Support */}
            <div className="flex items-center justify-center space-x-4 p-6 bg-white rounded-xl shadow-lg">
              <FaHeadphones className="text-blue-600 text-3xl" />
              <div>
                <h3 className="font-semibold text-xl text-gray-800">24/7 Customer Support</h3>
                <p className="text-gray-600 text-sm">Always available to assist you</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
