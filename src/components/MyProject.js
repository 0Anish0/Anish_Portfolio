import { NavLink } from "react-router-dom";
import "./MyProjectStyle.css";
import React from "react";

const MyProject = () => {
  return (
    <div className="work-container">
      <h1 className="project-heading">My Project's</h1>
      <div className="project-container">
        <div className="project-card">
          <img src="" alt="project" />
          <h2 className="project-title">Project Title</h2>
          <div className="project-details">
            <p>This is Project details.</p>
            <div className="project-button">
              <NavLink to="url.com" className="btn">View</NavLink>
              <NavLink to="url.com" className="btn">Source</NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProject;
