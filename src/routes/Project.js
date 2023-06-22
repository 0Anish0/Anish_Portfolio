import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Heroimage2 from "../components/Heroimage2";
import MyProject from "../components/MyProject";

const Project = () => {
  return (
    <div>
      <Navbar />
      <Heroimage2 heading="PROJECTS." text="Some of my recent works sample are given bellow." />
      <MyProject />
      <Footer />
    </div>
  );
};

export default Project;
