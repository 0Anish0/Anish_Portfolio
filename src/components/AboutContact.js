import "./AboutContactStyle.css";
import { Link } from "react-router-dom";
import React from "react";
import Image from "../assets/Image.jpg"

const AboutContact = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who Am I?</h1>
        <p>
          Im a Full-stack Web-Devloper. I creat responsive and secure websites
          using javaScript Framworks like React for Front-end devlopment while
          Node.js with MongoDB database for back-end devlopment.
        </p>
        <Link to="/contact">
          <button className="btn">Contact</button>
        </Link>
      </div>
        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={Image} className="img" 
                    alt="true"></img>
                </div>
            </div>
        </div>

    </div>
  );
};

export default AboutContact;
