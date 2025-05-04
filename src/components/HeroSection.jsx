import React from "react";

const HeroSection = ({ title, description }) => {
  const backgroundImage = "https://images.pexels.com/photos/747113/pexels-photo-747113.jpeg";

  const heroStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover", // Ensures the image covers the entire background
    backgroundPosition: "center", // Centers the background image
    backgroundRepeat: "no-repeat", // Prevents the image from repeating
    height: "100vh", // Full viewport height
    display: "flex", // Flexbox for centering content
    flexDirection: "column", // Stacks content vertically
    justifyContent: "center", // Centers content vertically
    alignItems: "center", // Centers content horizontally
    color: "white", // White text for contrast
    textAlign: "center", // Center-aligns text
    padding: "2rem", // Adds padding for spacing
    margin: "0", // Removes default margins
  };

  return (
    <div style={heroStyle}>
      <h1>{title}</h1>
      <p className="lead">{description}</p>
    </div>
  );
};

export default HeroSection;