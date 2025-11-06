import { useState } from "react";
import './GetInTouch.css';
import { FaAddressCard } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { MdOutlineSubject } from "react-icons/md";
import { MdMessage } from "react-icons/md";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";


export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [status, setStatus] = useState('idle'); // idle, sending, success, error
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setStatus('error');
      setErrorMessage('Please fill in all fields.');
      return;
    }
    
    setStatus('sending');
    setErrorMessage('');

    try {
      // EmailJS API configuration - For Vite, use VITE_ prefix
      const serviceId = import.meta.env.VITE_SERVICE_ID;
      const templateId = import.meta.env.VITE_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_PUBLIC_KEY;

      const data = {
        service_id: serviceId,
        template_id: templateId,
        user_id: publicKey,
        template_params: {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }
      };

      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      });

      const result = await response.text();

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        
        // Reset success message after 5 seconds
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        console.error('EmailJS Error:', result);
        throw new Error(result || 'Failed to send email');
      }
    } catch (error) {
      console.error('Send Error:', error);
      setStatus('error');
      setErrorMessage(error.message || 'Failed to send message. Please check your EmailJS configuration.');
    }
  };

  return (
    <div className="contact">
      <Navbar/>
      <div className="form-title">
        <h2>Get In Touch</h2>
        <p>I'd love to hear from you. Send me a Mail!</p>


      {status === "success" && (
        <div className="">
          <p>Message sent successfully! I'll get back to you soon.</p>
        </div>
      )}

      {status === "error" && (
        <div className="">
          <p className="">{errorMessage}</p>
        </div>
      )}

      <div className="form-container">
        <div className="form">
          <label className=""><FaAddressCard className="contactIcons"/> Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className=""
            placeholder="Your full name"
          />
        </div>

        <div className="form">
          <label className=""><IoIosMail  className="contactIcons"/> Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className=""
            placeholder="your.email@example.com"
          />
        </div>

        <div className="form">
          <label className=""><MdOutlineSubject  className="contactIcons"/> Subject</label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className=""
            placeholder="What's this about?"
          />
        </div>

        <div className="form">
          <label className=""><MdMessage className="contactIcons"/> Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="6"
            className=""
            placeholder="Your message here..."
          />
        </div>

        <button
          type="button"
          onClick={handleSubmit}
          disabled={status === "sending"}
          className="form-btn"
        >
          {status === "sending" ? (
            <> Sending...</>
          ) : (
            <> <MdMessage className="menuIcons"/>Send Message</>
          )}
        </button>
      </div>
      </div>
      <Footer/>
    </div>
  );
}