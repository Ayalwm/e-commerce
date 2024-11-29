import React, { useState } from "react";
import CreateTransaction from "../components/CreateTransaction";
import TransactionRequests from "../components/transactionRequest";
import OngoingTransactions from "../components/OngoingTransactions";

const Dashboard = () => {
  const [transactions, setTransactions] = useState([]);
  const [currentView, setCurrentView] = useState("create"); // state to track current view

  const addTransaction = (transaction) => {
    setTransactions([...transactions, { ...transaction, status: "Pending" }]);
  };

  const updateTransaction = (id, newStatus) => {
    setTransactions(
      transactions.map((transaction) =>
        transaction.id === id ? { ...transaction, status: newStatus } : transaction
      )
    );
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-1/4 bg-blue-600 text-white p-4">
        <h2 className="text-2xl font-bold mb-6">Dashboard</h2>
        <nav className="space-y-4">
          <button
            className="w-full text-left px-4 py-2 bg-blue-500 rounded hover:bg-blue-400"
            onClick={() => setCurrentView("create")} // Switch to Create Transaction view
          >
            Create Transaction
          </button>
          <button
            className="w-full text-left px-4 py-2 bg-blue-500 rounded hover:bg-blue-400"
            onClick={() => setCurrentView("requests")} // Switch to Transaction Requests view
          >
            Transaction Requests
          </button>
          <button
            className="w-full text-left px-4 py-2 bg-blue-500 rounded hover:bg-blue-400"
            onClick={() => setCurrentView("ongoing")} // Switch to Ongoing Transactions view
          >
            Ongoing Transactions
          </button>
        </nav>
      </div>

      {/* Main Content */}
      <div className="w-3/4 p-6 bg-gray-100 overflow-y-auto">
        <h1 className="text-3xl font-bold mb-6">Welcome to the Dashboard</h1>

        {/* Conditionally render components based on currentView */}
        {currentView === "create" && <CreateTransaction addTransaction={addTransaction} />}
        {currentView === "requests" && (
          <TransactionRequests transactions={transactions} updateTransaction={updateTransaction} />
        )}
        {currentView === "ongoing" && (
          <OngoingTransactions transactions={transactions} updateTransaction={updateTransaction} />
        )}
      </div>
    </div>
  );
};

export default Dashboard;
