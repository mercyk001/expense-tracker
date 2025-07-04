
import React from "react";
import HeroSection from "../components/HeroSection";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <HeroSection
      title="Welcome to Expense Tracker"
      description={
        <>
          Effortlessly track your expenses and manage your finances with ease!
          <br />
          <button
            className="btn btn-primary btn-lg mt-4"
            onClick={() => navigate("/track-it")}
          >
            Get Started
          </button>
        </>
      }
    />
  );
};

export default Home;