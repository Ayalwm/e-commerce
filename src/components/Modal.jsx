import React from "react";

const Modal = ({ title, children, onClose }) => {
  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <div className="mb-6">{children}</div>
        <button
          onClick={onClose}
          className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition-all"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
