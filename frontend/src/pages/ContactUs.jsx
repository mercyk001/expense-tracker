import React, { useState } from "react";

const ContactUs = () => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your feedback!");
    setMessage("");
  };

  // Background and layout styles
  const pageStyle = {
    backgroundImage: 'url("https://images.pexels.com/photos/747113/pexels-photo-747113.jpeg")',
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    minHeight: "100vh",
    paddingTop: "4rem",
    paddingBottom: "2rem",
    paddingLeft: "1rem",
    paddingRight: "1rem",
    color: "white",
  };

  const contentStyle = {
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    borderRadius: "10px",
    padding: "2rem",
    maxWidth: "600px",
    margin: "0 auto",
    boxShadow: "0 0 10px rgba(0,0,0,0.5)",
  };

  const headingStyle = {
    textAlign: "center",
    marginBottom: "2rem",
  };

  return (
    <div style={pageStyle}>
      <div style={contentStyle}>
        <div style={headingStyle}>
          <h1>Contact Us</h1>
          <h2 style={{ fontSize: "1.25rem", fontWeight: "normal" }}>
            We'd love to hear from you! Leave your feedback below.
          </h2>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="message" className="form-label text-white">
              Leave your message
            </label>
            <textarea
              className="form-control"
              id="message"
              rows="5"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Write your feedback here..."
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
