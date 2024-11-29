import React from "react";

const ProcessSteps = () => {
  const steps = [
    {
      title: "Agree terms",
      description: "Once the buyer and seller have negotiated the price, we automatically create the transaction.",
      icon: "📝",
    },
    {
      title: "Payment acceptance",
      description: "We process the payment from the buyer via a customized payment page.",
      icon: "💰",
    },
    {
      title: "Shipping & Fulfillment",
      description: "We track the fulfillment of every order from the seller to the buyer.",
      icon: "📦",
    },
  ];

  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Process Steps</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg shadow">
              <div className="text-4xl mb-4">{step.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;