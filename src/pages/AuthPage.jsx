import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthPage = () => {
  const [isSignUp, setIsSignUp] = useState(false); // Toggle between SignUp/SignIn
  const [formData, setFormData] = useState({
    email: "",
    phoneNumber: "",
    username: "",
    password: "",
  });

  const [formErrors, setFormErrors] = useState({
    email: "",
    phoneNumber: "",
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear error when user starts typing
    setFormErrors({
      ...formErrors,
      [name]: "",
    });
  };

  const validateForm = () => {
    const errors = {};
    if (isSignUp) {
      if (!formData.email) errors.email = "Email is required";
      if (!formData.phoneNumber) errors.phoneNumber = "Phone number is required";
    }
    if (!formData.username) errors.username = "Username is required";
    if (!formData.password) errors.password = "Password is required";

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return; // Prevent submission if there are validation errors
    }

    // For demo purposes, assuming the form submission is successful
    if (isSignUp) {
      alert("Account Created Successfully!");
      setIsSignUp(false); // Switch to Sign In after successful sign-up
    } else {
      alert("Login Successful!");
      navigate("/dashboard"); // Navigate to the dashboard on successful login
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-900">
      {/* Left Section (Text Side) */}
      <div className="hidden lg:flex flex-1 justify-center items-center text-white p-12 bg-gradient-to-r from-gray-800 to-gray-700">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-6">Welcome to Trustify</h1>
          <p className="text-lg mb-4">
            Your gateway to secure and efficient transactions. Join us today to experience seamless services.
          </p>
          <p className="text-sm">Sign up or log in to get started with your journey.</p>
        </div>
      </div>

      {/* Right Section (Form Side) */}
      <div className="flex-1 flex justify-center items-center bg-white p-8 shadow-lg">
        <div className="w-full max-w-md space-y-8">
          <h2 className="text-3xl font-semibold text-center text-gray-800 mb-4">
            {isSignUp ? "Sign Up" : "Sign In"}
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            {isSignUp && (
              <>
                <div className="relative">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-600 mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full p-3 rounded-md border text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      formErrors.email ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="Enter your email"
                  />
                  {formErrors.email && (
                    <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>
                  )}
                </div>

                <div className="relative">
                  <label
                    htmlFor="phoneNumber"
                    className="block text-sm font-medium text-gray-600 mb-1"
                  >
                    Phone Number
                  </label>
                  <input
                    type="text"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    className={`w-full p-3 rounded-md border text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      formErrors.phoneNumber ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="Enter your phone number"
                  />
                  {formErrors.phoneNumber && (
                    <p className="text-red-500 text-sm mt-1">{formErrors.phoneNumber}</p>
                  )}
                </div>
              </>
            )}

            <div className="relative">
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-600 mb-1"
              >
                Username
              </label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                className={`w-full p-3 rounded-md border text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  formErrors.username ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="Enter your username"
              />
              {formErrors.username && (
                <p className="text-red-500 text-sm mt-1">{formErrors.username}</p>
              )}
            </div>

            <div className="relative">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-600 mb-1"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className={`w-full p-3 rounded-md border text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  formErrors.password ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="Enter your password"
              />
              {formErrors.password && (
                <p className="text-red-500 text-sm mt-1">{formErrors.password}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-gray-700 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            >
              {isSignUp ? "Create Account" : "Sign In"}
            </button>
          </form>

          <div className="text-center mt-4">
            <button
              onClick={() => setIsSignUp(!isSignUp)}
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              {isSignUp
                ? "Already have an account? Sign In"
                : "Don't have an account? Sign Up"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
