import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa"; // Importing React Icons

const Contact = () => {
  return (
    <div className="bg-gray-900 text-white py-16">
      <div className="container mx-auto max-w-screen-xl">
        {/* Flex Row for Grid Items */}
        <div className="flex flex-wrap justify-between gap-6 md:gap-8">
          {/* Trustify Section */}
          <div className="w-full md:w-1/6 p-4 text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-indigo-600">Trustify</h3>
          </div>

          {/* Solutions, Marketplaces, etc. */}
          <div className="w-full md:w-1/6 p-4">
            <h3 className="text-xl md:text-2xl font-semibold text-indigo-600 mb-4">Solutions</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-lg text-gray-300 hover:text-indigo-600 transition duration-300"
                >
                  Marketplaces
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-lg text-gray-300 hover:text-indigo-600 transition duration-300"
                >
                  eCommerce
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-lg text-gray-300 hover:text-indigo-600 transition duration-300"
                >
                  Startups
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-lg text-gray-300 hover:text-indigo-600 transition duration-300"
                >
                  Individual Transactions
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-lg text-gray-300 hover:text-indigo-600 transition duration-300"
                >
                  Motors
                </a>
              </li>
            </ul>
          </div>

          {/* Partners */}
          <div className="w-full md:w-1/6 p-4">
            <h3 className="text-xl md:text-2xl font-semibold text-indigo-600 mb-4">Partners</h3>
            <ul>
              <li>
                <a
                  href="#"
                  className="text-lg text-gray-300 hover:text-indigo-600 transition duration-300"
                >
                  Partner With Us
                </a>
              </li>
            </ul>
          </div>

          

          {/* Company */}
          <div className="w-full md:w-1/6 p-4">
            <h3 className="text-xl md:text-2xl font-semibold text-indigo-600 mb-4">Company</h3>
            <ul>
              <li>
                <a
                  href="#"
                  className="text-lg text-gray-300 hover:text-indigo-600 transition duration-300"
                >
                  About Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="w-full md:w-1/6 p-4">
            <h3 className="text-xl md:text-2xl font-semibold text-indigo-600 mb-4">Contact Information</h3>
            <ul className="space-y-3">
              <li className="flex items-center text-lg text-gray-300">
                <FaPhoneAlt className="mr-2 text-indigo-600" />
                +1 (123) 456-7890
              </li>
              <li className="flex items-center text-lg text-gray-300">
                <FaEnvelope className="mr-2 text-indigo-600" />
                contact@trustify.com
              </li>
              <li className="flex items-center text-lg text-gray-300">
                <FaMapMarkerAlt className="mr-2 text-indigo-600" />
                123 Trustify St., Cityville, State, 12345
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
