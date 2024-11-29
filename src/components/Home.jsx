import React from "react";

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
              Transact Now
            </button>
            <button className="px-6 py-3 border border-blue-600 text-blue-600 rounded hover:bg-blue-100">
              Contact Us
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
    </section>
  );
};

export default Home;