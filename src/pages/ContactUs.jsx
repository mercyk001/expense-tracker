import React, { useState } from "react";
import HeroSection from "../components/HeroSection";

const ContactUs = () => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your feedback!");
    setMessage("");
  };

  return (
    <div>
      <HeroSection
        title="Contact Us"
        description="We'd love to hear from you! Leave your feedback below."
      />
      <div className="container py-5">
        <div className="row">
          <div className="col-md-6 mx-auto">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">
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
      </div>
    </div>
  );
};

export default ContactUs;