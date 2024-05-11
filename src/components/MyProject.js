import { NavLink } from "react-router-dom";
import "./MyProjectStyle.css";
import React from "react";
import BlogHub from "../assets/BlogHub.jpg";
import Voting from "../assets/D-VotingSystem.jpg";

const MyProject = () => {
  return (
    <div className="work-container">
      <h1 className="project-heading">Work Samples</h1>
      <div className="project-container">
        <div className="project-card">
          <img src={BlogHub} alt="project"></img>
          <h2 className="project-title">BlogHub</h2>
          <div className="project-detail">
            <p>BlogHub is a full-stack web application that allows users to create, edit, and publish blog posts.</p>
            <div className="project-button">
              <NavLink to="https://nice-erin-python-garb.cyclic.cloud/account" className="btn">View</NavLink>
              <NavLink to="https://github.com/0Anish0/CRT-Internship" className="btn">Source</NavLink>
            </div>
          </div>
        </div>
        <div className="project-card">
          <img src={Voting} alt="project"></img>
          <h2 className="project-title">D-Voting System</h2>
          <div className="project-detail">
            <p>The D-Voting System is a blockchain-based solution designed to ensure secure, transparent, and 
            tamper-proof voting processes for various purposes.</p>
            <div className="project-button">
              <NavLink to="https://github.com/0Anish0/D-VottingSystem" className="btn">View</NavLink>
              <NavLink to="https://github.com/0Anish0/D-VottingSystem" className="btn">Source</NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProject;
