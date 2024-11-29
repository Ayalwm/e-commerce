import React from "react";

const HowItWorks = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">How does it work?</h2>
        <ul className="text-left text-gray-700 space-y-4 max-w-3xl mx-auto">
          <li><strong>1. Buyer sends payment:</strong> Payment is initiated by the buyer.</li>
          <li><strong>2. Payment is held in the Trustap Vault:</strong> Funds are securely held.</li>
          <li><strong>3. Seller fulfills order:</strong> The seller completes their part.</li>
          <li><strong>4. Buyer receives and inspects:</strong> Buyer verifies the product/service.</li>
          <li><strong>5. Complaint period:</strong> Buyer can raise issues if necessary.</li>
        </ul>
      </div>
    </section>
  );
};

export default HowItWorks;