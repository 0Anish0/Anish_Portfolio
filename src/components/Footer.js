import "./footerStyles.css";
import {
  FaHome,
  FaPhone,
  FaMailBulk,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
  FaGithub,
  FaMobile,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p>Meerut, (NCR)</p>
              <p>India</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              <a href="tel:+91 9852208695">
                <FaPhone
                  size={20}
                  style={{ color: "#fff", marginRight: "2rem" }}
                />
                6159274286
              </a>
            </h4>

            <h4>
              <a href="tel:+91 9852208695">
                <FaMobile
                  size={20}
                  style={{ color: "#fff", marginRight: "2rem" }}
                />
                +91 9852208695
              </a>
            </h4>
          </div>
          <div className="email">
            <h4>
              <a href="mailto:anishpandey4576@gmail.com">
                <FaMailBulk
                  size={20}
                  style={{ color: "#fff", marginRight: "2rem" }}
                />
                anishpandey4576@gmail.com
              </a>
            </h4>
          </div>
        </div>
        <div className="right">
          <h4>Created by Anish pandey </h4>
          <p> &copy; 2022-2025 All Rights reserved.</p>
          <div className="social">
            <Link to="https://www.facebook.com/anih.pandey.9/">
              <FaFacebook
                size={20}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
            </Link>

            <Link to="https://www.instagram.com/factlogical_anish/">
              <FaInstagram
                size={20}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
            </Link>

            <Link to="https://www.youtube.com/@Factlogical_Anish/videos">
              <FaYoutube
                size={20}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
            </Link>

            <Link to="https://github.com/0Anish0">
              <FaGithub
                size={20}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
            </Link>

            <Link to="https://twitter.com/Factlogical_Ani">
              <FaTwitter
                size={20}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
            </Link>

            <Link to="https://www.linkedin.com/in/anish-kumar-pandey-57390b190/">
              <FaLinkedin
                size={20}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
            </Link>            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
