import React from "react";
import { FaMoneyBillWave, FaLock, FaShippingFast, FaClipboardCheck, FaExclamationTriangle } from "react-icons/fa";

const HowItWorks = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-10">How It Works</h2>
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-4 top-0 h-full border-l-4 border-blue-600"></div>

          {/* Steps */}
          <ul className="space-y-8">
            <li className="relative flex items-start">
              <div className="bg-blue-600 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold absolute -left-6">
                1
              </div>
              <div className="pl-10 flex items-center gap-4">
                <FaMoneyBillWave className="text-blue-600 text-3xl" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-700">
                    Buyer sends payment
                  </h3>
                  <p className="text-gray-600">
                    The buyer initiates the payment securely on the platform.
                  </p>
                </div>
              </div>
            </li>

            <li className="relative flex items-start">
              <div className="bg-blue-600 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold absolute -left-6">
                2
              </div>
              <div className="pl-10 flex items-center gap-4">
                <FaLock className="text-blue-600 text-3xl" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-700">
                    Payment is held in the Trustap Vault
                  </h3>
                  <p className="text-gray-600">
                    Funds are securely held until the transaction is completed.
                  </p>
                </div>
              </div>
            </li>

            <li className="relative flex items-start">
              <div className="bg-blue-600 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold absolute -left-6">
                3
              </div>
              <div className="pl-10 flex items-center gap-4">
                <FaShippingFast className="text-blue-600 text-3xl" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-700">
                    Seller fulfills order
                  </h3>
                  <p className="text-gray-600">
                    The seller ships the product or delivers the service.
                  </p>
                </div>
              </div>
            </li>

            <li className="relative flex items-start">
              <div className="bg-blue-600 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold absolute -left-6">
                4
              </div>
              <div className="pl-10 flex items-center gap-4">
                <FaClipboardCheck className="text-blue-600 text-3xl" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-700">
                    Buyer receives and inspects
                  </h3>
                  <p className="text-gray-600">
                    The buyer inspects the product/service before confirming.
                  </p>
                </div>
              </div>
            </li>

            <li className="relative flex items-start">
              <div className="bg-blue-600 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold absolute -left-6">
                5
              </div>
              <div className="pl-10 flex items-center gap-4">
                <FaExclamationTriangle className="text-blue-600 text-3xl" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-700">
                    Complaint period
                  </h3>
                  <p className="text-gray-600">
                    The buyer has a set time to raise any issues with the transaction.
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
