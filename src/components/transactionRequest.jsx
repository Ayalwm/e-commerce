import React from "react";

const TransactionRequests = ({ transactions, updateTransaction }) => {
  const handleAccept = (id) => {
    updateTransaction(id, "Payment Complete");
    alert("Transaction accepted and payment completed.");
  };

  const handleDecline = (id) => {
    updateTransaction(id, "Declined");
    alert("Transaction declined. Seller will be notified.");
  };

  return (
    <div className="bg-white p-6 rounded shadow mt-6">
      <h2 className="text-2xl font-bold mb-4">Transaction Requests</h2>
      {transactions.filter((t) => t.status === "Pending").length === 0 ? (
        <p className="text-gray-500">No transaction requests at the moment.</p>
      ) : (
        <ul className="space-y-4">
          {transactions
            .filter((transaction) => transaction.status === "Pending")
            .map((transaction) => (
              <li
                key={transaction.id}
                className="p-4 border rounded flex justify-between items-center"
              >
                <div>
                  <p>
                    <strong>Item:</strong> {transaction.itemName}
                  </p>
                  <p>
                    <strong>Price:</strong> ${transaction.price}
                  </p>
                  <p>
                    <strong>Buyer ID:</strong> {transaction.buyerId}
                  </p>
                </div>
                <div className="space-x-2">
                  <button
                    onClick={() => handleAccept(transaction.id)}
                    className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-400"
                  >
                    Accept
                  </button>
                  <button
                    onClick={() => handleDecline(transaction.id)}
                    className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-400"
                  >
                    Decline
                  </button>
                </div>
              </li>
            ))}
        </ul>
      )}
    </div>
  );
};

export default TransactionRequests;
