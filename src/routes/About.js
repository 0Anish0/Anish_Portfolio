import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AboutContact from "../components/AboutContact";

const About = () => {
  return (
    <div className="about-container">
      <Navbar />
      <AboutContact />
      <Footer />
    </div>
  );
};

export default About;
