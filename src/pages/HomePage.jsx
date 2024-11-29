import React from "react";
import Header from "../components/Header";
import Home from "../components/Home";
import HowItWorks from "../components/HowItWorks";
import ProcessSteps from "../components/ProcessSteps";
import Contact from "../components/contact";

function HomePage() {
  return (
    <div className="bg-gray-50">
      <Header />
      <Home />
      <HowItWorks />
      <ProcessSteps />
      <Contact />
    </div>
  );
}

export default HomePage;