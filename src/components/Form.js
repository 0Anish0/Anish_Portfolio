import "./FormStyle.css";
import React from "react";

const Form = () => {
  return (
    <div>
      <form>
      <iframe
        className="map"
        title="Google Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d448198.3518255168!2d76.46928085421656!3d28.643257378522293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sDelhi!5e0!3m2!1sen!2sin!4v1715403426358!5m2!1sen!2sin"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade">
      </iframe>

        <level>Your Name</level>
        <input type="text"></input>
        <level>Email</level>
        <input type="email"></input>
        <level>Subject</level>
        <input type="text"></input>
        <level>Message</level>
        <textarea
          rows="6"
          placeholder="Type your message here"
        ></textarea>
        <button className="btn">Submit</button>
      </form>
    </div>
  );
};

export default Form;