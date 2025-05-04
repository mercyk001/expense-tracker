import React from "react";
import HeroSection from "../components/HeroSection";

const Home = () => {
  return (
    <div>
      <HeroSection
        title="Welcome to Expense Tracker"
        description="Effortlessly track your expenses and manage your finances with ease!"
      />
      <div className="container text-center py-5">
        <p>Start managing your expenses today!</p>
        <a href="/track-it" className="btn btn-primary btn-lg mt-4">
          Get Started
        </a>
      </div>
    </div>
  );
};

export default Home;