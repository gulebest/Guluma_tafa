// src/Pages/Contact/Contact.jsx
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion, AnimatePresence } from "framer-motion";
import "./contact.css";

function Contact() {
  const form = useRef();
  const [popup, setPopup] = useState({ show: false, success: true, message: "" });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_voig0nc",     // ✅ Your Service ID
        "template_hn0ls2f",    // ✅ Your Template ID
        form.current,
        "Rsbu_R2wllJis4f8a"    // ✅ Your Public Key
      )
      .then(
        () => {
          setPopup({
            show: true,
            success: true,
            message: "✅ Message sent successfully!",
          });
          form.current.reset();
        },
        (error) => {
          console.error("Email send error:", error);
          setPopup({
            show: true,
            success: false,
            message: "❌ Failed to send message. Please try again later.",
          });
        }
      );

    // hide popup after 4 seconds
    setTimeout(() => {
      setPopup({ ...popup, show: false });
    }, 4000);
  };

  return (
    <section className="contact">
      <h2>Contact Me</h2>
      <div className="contact-container">
        <div className="contact-info">
          <h3>Get in Touch</h3>
          <p><strong>Email:</strong> gulumabest694@gmail.com</p>
          <p><strong>Phone:</strong> +251920072951</p>
        </div>

        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <input type="text" name="from_name" placeholder="Your Name" required />
          <input type="email" name="from_email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>

      {/* ✅ Animated popup notification */}
      <AnimatePresence>
        {popup.show && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.4 }}
            className={`popup ${popup.success ? "success" : "error"}`}
          >
            {popup.message}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Contact;
