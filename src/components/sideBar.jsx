import React from "react";

const Sidebar = ({ setActivePage }) => {
  return (
    <div className="w-1/4 bg-indigo-600 text-white flex flex-col items-center py-6">
      <h1 className="text-2xl font-bold mb-8">Trustap</h1>
      <button
        onClick={() => setActivePage("create")}
        className="w-3/4 py-3 mb-4 bg-indigo-700 hover:bg-indigo-500 rounded"
      >
        Create Transaction
      </button>
      <button
        onClick={() => setActivePage("ongoing")}
        className="w-3/4 py-3 mb-4 bg-indigo-700 hover:bg-indigo-500 rounded"
      >
        Ongoing Transactions
      </button>
      <button
        onClick={() => setActivePage("requests")}
        className="w-3/4 py-3 bg-indigo-700 hover:bg-indigo-500 rounded"
      >
        Transaction Requests
      </button>
    </div>
  );
};

export default Sidebar;
