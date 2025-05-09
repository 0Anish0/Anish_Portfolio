// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import './styles/FormStyle.css';

// const Form = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     subject: '',
//     message: ''
//   });

//   const [formState, setFormState] = useState({
//     isSubmitting: false,
//     isSubmitted: false,
//     error: null
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setFormState({ ...formState, isSubmitting: true });

//     try {
//       // Replace with your actual API endpoint
//       const response = await fetch('/api/contact', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       if (!response.ok) throw new Error('Failed to send message');

//       setFormState({
//         isSubmitting: false,
//         isSubmitted: true,
//         error: null
//       });
//       setFormData({ name: '', email: '', subject: '', message: '' });

//       setTimeout(() => {
//         setFormState(prev => ({ ...prev, isSubmitted: false }));
//       }, 5000);

//     } catch (error) {
//       setFormState({
//         isSubmitting: false,
//         isSubmitted: false,
//         error: 'Failed to send message. Please try again.'
//       });
//     }
//   };

//   return (
//     <section className="contact-section" id="contact">
//       <div className="container">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5 }}
//           className="contact-header"
//         >
//           <h2 className="section-title">Get in Touch</h2>
//           <p className="section-subtitle">
//             Have a question or want to work together? I'd love to hear from you.
//           </p>
//         </motion.div>

//         <div className="contact-content">
//           <motion.div
//             initial={{ opacity: 0, x: -20 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5 }}
//             className="contact-info"
//           >
//             <div className="info-item">
//               <i className="fas fa-envelope"></i>
//               <h3>Email</h3>
//               <p>your.email@example.com</p>
//             </div>
//             <div className="info-item">
//               <i className="fas fa-phone"></i>
//               <h3>Phone</h3>
//               <p>+1 234 567 890</p>
//             </div>
//             <div className="info-item">
//               <i className="fas fa-map-marker-alt"></i>
//               <h3>Location</h3>
//               <p>City, Country</p>
//             </div>
//           </motion.div>

//           <motion.form
//             initial={{ opacity: 0, x: 20 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5 }}
//             className="contact-form"
//             onSubmit={handleSubmit}
//           >
//             <div className="form-group">
//               <input
//                 type="text"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 required
//                 className="form-input"
//               />
//               <label className="form-label">Your Name</label>
//             </div>

//             <div className="form-group">
//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//                 className="form-input"
//               />
//               <label className="form-label">Your Email</label>
//             </div>

//             <div className="form-group">
//               <input
//                 type="text"
//                 name="subject"
//                 value={formData.subject}
//                 onChange={handleChange}
//                 required
//                 className="form-input"
//               />
//               <label className="form-label">Subject</label>
//             </div>

//             <div className="form-group">
//               <textarea
//                 name="message"
//                 value={formData.message}
//                 onChange={handleChange}
//                 required
//                 className="form-input"
//                 rows="5"
//               ></textarea>
//               <label className="form-label">Your Message</label>
//             </div>

//             <button
//               type="submit"
//               className={`submit-button ${formState.isSubmitting ? 'submitting' : ''}`}
//               disabled={formState.isSubmitting}
//             >
//               {formState.isSubmitting ? 'Sending...' : 'Send Message'}
//             </button>

//             {formState.isSubmitted && (
//               <motion.div
//                 initial={{ opacity: 0, y: 10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 className="success-message"
//               >
//                 Message sent successfully!
//               </motion.div>
//             )}

//             {formState.error && (
//               <motion.div
//                 initial={{ opacity: 0, y: 10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 className="error-message"
//               >
//                 {formState.error}
//               </motion.div>
//             )}
//           </motion.form>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Form;




import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './styles/FormStyle.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formState, setFormState] = useState({
    isSubmitting: false,
    isSubmitted: false,
    error: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormState({ ...formState, isSubmitting: true });

    try {
      // Placeholder API endpoint
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Failed to send message');

      setFormState({
        isSubmitting: false,
        isSubmitted: true,
        error: null
      });
      setFormData({ name: '', email: '', subject: '', message: '' });

      setTimeout(() => {
        setFormState(prev => ({ ...prev, isSubmitted: false }));
      }, 5000);

    } catch (error) {
      setFormState({
        isSubmitting: false,
        isSubmitted: false,
        error: 'Failed to send message. Please try again.'
      });
    }
  };

  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="contact-header"
        >
          <h2 className="section-title">Connect with a Full-Stack Wizard</h2>
          <p className="section-subtitle">
            Ready to build something extraordinary? Let's code the future together.
          </p>
        </motion.div>

        <div className="contact-content">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="contact-info"
          >
            <div className="info-item">
              <i className="fas fa-envelope"></i>
              <h3>Email</h3>
              <p>your.email@example.com</p>
            </div>
            <div className="info-item">
              <i className="fas fa-phone"></i>
              <h3>Phone</h3>
              <p>+1 234 567 890</p>
            </div>
            <div className="info-item">
              <i className="fas fa-code"></i>
              <h3>GitHub</h3>
              <p>github.com/yourusername</p>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="contact-form"
            onSubmit={handleSubmit}
          >
            <div className="form-group">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="form-input"
                placeholder=" "
              />
              <label className="form-label">Name</label>
            </div>

            <div className="form-group">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="form-input"
                placeholder=" "
              />
              <label className="form-label">Email</label>
            </div>

            <div className="form-group">
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="form-input"
                placeholder=" "
              />
              <label className="form-label">Subject</label>
            </div>

            <div className="form-group">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="form-input"
                rows="5"
                placeholder=" "
              ></textarea>
              <label className="form-label">Message</label>
            </div>

            <motion.button
              type="submit"
              className={`submit-button ${formState.isSubmitting ? 'submitting' : ''}`}
              disabled={formState.isSubmitting}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {formState.isSubmitting ? 'Sending...' : 'Launch Message'}
            </motion.button>

            {formState.isSubmitted && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="success-message"
              >
                Message sent successfully!
              </motion.div>
            )}

            {formState.error && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="error-message"
              >
                {formState.error}
              </motion.div>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;