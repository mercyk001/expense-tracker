import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import TrackIt from './pages/TrackIt';
import ContactUs from './pages/ContactUs';

function App() {
  // const appStyle = {
  //   backgroundImage: `url(${"https://images.pexels.com/photos/747113/pexels-photo-747113.jpeg"})`,
  //   backgroundSize: "cover", 
  //   backgroundPosition: "center", 
  //   backgroundRepeat: "no-repeat", 
  //   height: "100vh", 
  //   display: "flex", 
  //   flexDirection: "column", 
  //   justifyContent: "center", 
  //   alignItems: "center", 
  //   color: "white", 
  //   textAlign: "center", 
  //   padding: "2rem", 
  //   margin: "0", 
  // };

  return (
    <Router>
      {/* <div style={appStyle}> */}
        {/* Navigation Bar */}
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <Link className="navbar-brand" to="/">
              Expense Tracker
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/track-it">
                    Track It
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact-us">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} /> {/* Home page as default */}
          <Route path="/home" element={<Home />} />
          <Route path="/track-it" element={<TrackIt />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
      {/* </div> */}
    </Router>
  );
}

export default App;
