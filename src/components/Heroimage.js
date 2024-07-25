import React, { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import IntroImg from "../assets/IntroImg.jpg";
import "./HeroimgStyles.css";

const Heroimage = () => {
  const [title, setTitle] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const typingSpeed = 50;
  const deletingSpeed = 50;
  const pauseTime = 500;
  
  const texts = useMemo(
    () => [
      "Freelancer.",
      "Full-stack Devloper.",
      "YouTuber.",
    ],
    []
  );

  useEffect(() => {
    let timer;

    if (!isDeleting && title === texts[currentIndex]) {
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, pauseTime);
    } else if (isDeleting && title === "") {
      timer = setTimeout(() => {
        setIsDeleting(false);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
      }, 500);
    }

    return () => clearTimeout(timer);
  }, [title, currentIndex, isDeleting, pauseTime, texts]);

  useEffect(() => {
    let timer;
    const currentText = texts[currentIndex];
    const speed = isDeleting ? deletingSpeed : typingSpeed;

    if (isDeleting) {
      if (title.length !== 0) {
        timer = setTimeout(() => {
          setTitle((prevTitle) => prevTitle.slice(0, -1));
        }, speed);
      }
    } else {
      if (title.length !== currentText.length) {
        timer = setTimeout(() => {
          setTitle((prevTitle) => currentText.slice(0, prevTitle.length + 1));
        }, speed);
      }
    }

    return () => clearTimeout(timer);
  }, [title, currentIndex, isDeleting, texts, deletingSpeed, typingSpeed]);

  return (
    <div className="hero">
      <div className="mask">
        <img className="into-img" src={IntroImg} alt="IntroImg" />
        <div className="content">
          <p>Hi,👋 I'm a <strong>{title}</strong></p>
          <h1>ANISH PANDEY</h1>
          <Link to="/hire" className="btn btn1">
            HIRE ME
          </Link>
          <Link to="/contact" className="btn btn-light">
            CONTACT
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Heroimage;
