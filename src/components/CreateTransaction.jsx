import React, { useState } from "react";
import Modal from "./Modal";
import { generateTransactionId, generateDeliveryCode } from "./utils";

const CreateTransaction = ({ addTransaction }) => {
  const [showModal, setShowModal] = useState(false);
  const [transactionData, setTransactionData] = useState({});
  const [formData, setFormData] = useState({
    role: "",
    itemName: "",
    description: "",
    price: "",
    shippingDuration: "",
    buyerId: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTransaction = {
      id: generateTransactionId(),
      deliveryCode: generateDeliveryCode(),
      ...formData,
      status: "Pending",  // Default status
    };
    setTransactionData(newTransaction);
    addTransaction(newTransaction); // Pass the new transaction to parent
    setShowModal(true);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-lg p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">
          Create Transaction
        </h2>

        {/* Role Selection */}
        <div className="flex justify-center gap-4 mb-6">
          <button
            type="button"
            className={`py-3 px-6 rounded-lg font-medium shadow-md ${
              formData.role === "seller"
                ? "bg-blue-600 text-white"
                : "bg-gray-100 hover:bg-gray-200 text-gray-700"
            }`}
            onClick={() => setFormData({ ...formData, role: "seller" })}
          >
            Seller
          </button>
          <button
            type="button"
            className={`py-3 px-6 rounded-lg font-medium shadow-md ${
              formData.role === "buyer"
                ? "bg-blue-600 text-white"
                : "bg-gray-100 hover:bg-gray-200 text-gray-700"
            }`}
            onClick={() => setFormData({ ...formData, role: "buyer" })}
          >
            Buyer
          </button>
        </div>

        {/* Form Display */}
        {formData.role && (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="itemName"
              placeholder="Item Name"
              value={formData.itemName}
              onChange={handleInputChange}
              className="w-full p-4 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
              required
            />
            <textarea
              name="description"
              placeholder="Item Description"
              value={formData.description}
              onChange={handleInputChange}
              className="w-full p-4 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
              required
            ></textarea>
            <input
              type="number"
              name="price"
              placeholder="Price"
              value={formData.price}
              onChange={handleInputChange}
              className="w-full p-4 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="text"
              name="shippingDuration"
              placeholder="Shipping Duration"
              value={formData.shippingDuration}
              onChange={handleInputChange}
              className="w-full p-4 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="text"
              name="buyerId"
              placeholder="Buyer ID"
              value={formData.buyerId}
              onChange={handleInputChange}
              className="w-full p-4 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
              required
            />
            <button
              type="submit"
              className="w-full py-4 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-all"
            >
              Start Transaction
            </button>
          </form>
        )}
      </div>

      {/* Modal Display */}
      {showModal && (
        <Modal
          title="Transaction Created"
          onClose={() => setShowModal(false)}
        >
          <div className="text-center">
            <p className="mb-4">
              Your transaction has been successfully created.
            </p>
            <p>
              <strong>Transaction ID:</strong> {transactionData.id}
            </p>
            <p>
              <strong>Delivery Code:</strong> {transactionData.deliveryCode}
            </p>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default CreateTransaction;
