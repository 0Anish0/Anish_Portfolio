import "./AboutContactStyle.css";
import { Link } from "react-router-dom";
import React from "react";
import Image from "../assets/Anish.png"
import Editing from "../assets/Editing.png"
import Youtuber from "../assets/youtuber.png"
import Backend from "../assets/Backend.png"
import Frontend from "../assets/Frontend.png"

const AboutContact = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who Am I?</h1>
        <p>
          MERN stack developer with a strong passion for creating innovative and
          scalable web applications. My journey in the field of computer science
          began during my college years, where I quickly developed a knack for coding
          and problem-solving. Since then, I have been on a continuous
          learning journey, honing my skills and gaining valuable experience
          in web development.
        </p>
        <h1>What am I doing?</h1>
        <div className="cardManager">
        <div class="card">
        <img className="emogi" src={Frontend} alt="Frontend"></img>
          <h2>Frontend Development</h2>
          <p>
          Skilled in creating responsive interfaces 
          with HTML, CSS, JavaScript, and React.
          </p>
        </div>
        <div class="card">
        <img className="emogi" src={Backend} alt="Backend"></img>
          <h2>Backend Development</h2>
          <p>
          Skilled in building scalable server-side applications 
          with Node.js, Express.js, and MongoDB.
          </p>
        </div>
        </div>
        <div className="cardManager">
        <div class="card">
        <img className="emogi" src={Editing} alt="Editing"></img>
          <h2>Video Editing</h2>
          <p>Experienced in professional-level video editing.</p>
        </div>
        <div class="card">
        <img className="emogi" src={Youtuber} alt="Youtuber"></img>
          <h2>YouTube Creator</h2>
          <p>
          Interested in creating engineering-related content on YouTube.
          </p>
        </div>
        </div>
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
