import "./FormStyle.css";
import React from "react";

const Form = () => {
  return (
    <div>
      <form>
        <level>Your Name</level>
        <input type="text"></input>
        <level>Email</level>
        <input type="email"></input>
        <level>Subject</level>
        <input type="text"></input>
        <level>Message</level>
        <textarea
          rows="6"
          placeholder="Type your 
        message here"
        ></textarea>
        <button className="btn">Submit</button>
      </form>
    </div>
  );
};

export default Form;
