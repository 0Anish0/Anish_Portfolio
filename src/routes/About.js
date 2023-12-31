import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Heroimage2 from "../components/Heroimage2";
import AboutContact from "../components/AboutContact";

const About = () => {
  return (
    <div>
      <Navbar />
      <Heroimage2 heading="ABOUT" text="This page describe about me." />
      <AboutContact />
      <Footer />
    </div>
  );
};

export default About;
