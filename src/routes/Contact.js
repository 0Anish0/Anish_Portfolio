import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Heroimage2 from "../components/Heroimage2";
import Form from "../components/Form";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <Heroimage2
        heading="CONTACT US"
        text="Please drop your Message/Query bellow by filling your details in given form."
      />
      <Form />
      <Footer />
    </div>
  );
};

export default Contact;
