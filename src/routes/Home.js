import React from "react";
import Navbar from "../components/Navbar";
import HomeHeroSection from "../components/HomeHeroSection";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <HomeHeroSection />
      <Footer />
    </div>
  );
};

export default Home;
