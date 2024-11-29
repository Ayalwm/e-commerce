import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const Header = () => {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-blue-600">trustap</h1>
        <nav className="space-x-6">
          <a href="#" className="text-gray-600 hover:text-blue-600">Solutions</a>
          <a href="#" className="text-gray-600 hover:text-blue-600">Partners</a>
          <a href="#" className="text-gray-600 hover:text-blue-600">Developers</a>
          <a href="#" className="text-gray-600 hover:text-blue-600">Company</a>
        </nav>
        <div className="space-x-4">
          {/* Wrap the "Transact Now" button with a Link component */}
          <Link to="/auth">
            <button className="px-4 py-2 bg-blue-600 text-white rounded">
              Transact Now
            </button>
          </Link>
          <button className="px-4 py-2 border border-blue-600 text-blue-600 rounded">Contact Us</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
