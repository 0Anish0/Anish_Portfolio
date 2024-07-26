import React, { useState } from 'react';
import './FormStyle.css';
import config from "../config";

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'This field is required';
    if (!formData.email) newErrors.email = 'This field is required';
    if (!formData.subject) newErrors.subject = 'This field is required';
    if (!formData.message) newErrors.message = 'This field is required';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      const response = await fetch(`${config.BASE_URL}/send-email`, {
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
        setErrors({});
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
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className={errors.name ? 'error' : ''}
          required
        />
        {errors.name && <span className="error-message">{errors.name}</span>}

        <label>Email</label>
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={errors.email ? 'error' : ''}
          required
        />
        {errors.email && <span className="error-message">{errors.email}</span>}

        <label>Subject</label>
        <input
          type="text"
          placeholder="Subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className={errors.subject ? 'error' : ''}
          required
        />
        {errors.subject && <span className="error-message">{errors.subject}</span>}

        <label>Message</label>
        <textarea
          name="message"
          rows="6"
          placeholder="Type your message here"
          value={formData.message}
          onChange={handleChange}
          className={errors.message ? 'error' : ''}
          required
        ></textarea>
        {errors.message && <span className="error-message">{errors.message}</span>}

        <button className="btn" type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;