import React, { useState } from 'react';
import './FormStyle.css';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('https://portfolio-backend-upb3.onrender.com/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Message sent successfully!');
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
      } else {
        alert('Failed to send message.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to send message.');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <iframe
          className="map"
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d448198.3518255168!2d76.46928085421656!3d28.643257378522293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sDelhi!5e0!3m2!1sen!2sin!4v1715403426358!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade">
        </iframe>

        <label>Your Name</label>
        <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
        
        <label>Email</label>
        <input type="email" placeholder="Email" name="email" value={formData.email} onChange={handleChange} required />
        
        <label>Subject</label>
        <input type="text" placeholder="Subject" name="subject" value={formData.subject} onChange={handleChange} required />
        
        <label>Message</label>
        <textarea
          name="message"
          rows="6"
          placeholder="Type your message here"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        
        <button className="btn" type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;