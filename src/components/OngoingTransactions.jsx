import React, { useState } from "react";

const OngoingTransactions = ({ transactions, updateTransaction }) => {
  const [deliveryCodeInput, setDeliveryCodeInput] = useState("");

  const handleDeliveryConfirmation = (id, deliveryCode) => {
    if (deliveryCodeInput === deliveryCode) {
      updateTransaction(id, "Fund Transferred");
      alert("Delivery confirmed. Funds transferred to the seller.");
      setDeliveryCodeInput("");
    } else {
      alert("Invalid delivery code. Please try again.");
    }
  };

  return (
    <div className="bg-white p-6 rounded shadow mt-6">
      <h2 className="text-2xl font-bold mb-4">Ongoing Transactions</h2>
      {transactions.filter((t) => t.status === "Payment Complete").length === 0 ? (
        <p className="text-gray-500">No ongoing transactions at the moment.</p>
      ) : (
        <ul className="space-y-4">
          {transactions
            .filter((transaction) => transaction.status === "Payment Complete")
            .map((transaction) => (
              <li
                key={transaction.id}
                className="p-4 border rounded flex flex-col space-y-2"
              >
                <p>
                  <strong>Item:</strong> {transaction.itemName}
                </p>
                <p>
                  <strong>Price:</strong> ${transaction.price}
                </p>
                <p>
                  <strong>Shipping Duration:</strong> {transaction.shippingDuration} days
                </p>
                <p>
                  <strong>Delivery Code:</strong> {transaction.deliveryCode}
                </p>
                <div>
                  <input
                    type="text"
                    placeholder="Enter Delivery Code"
                    value={deliveryCodeInput}
                    onChange={(e) => setDeliveryCodeInput(e.target.value)}
                    className="w-full p-2 border rounded mb-2"
                  />
                  <button
                    onClick={() =>
                      handleDeliveryConfirmation(
                        transaction.id,
                        transaction.deliveryCode
                      )
                    }
                    className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-500"
                  >
                    Confirm Delivery
                  </button>
                </div>
              </li>
            ))}
        </ul>
      )}
    </div>
  );
};

export default OngoingTransactions;
