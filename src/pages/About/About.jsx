// src/pages/About/About.jsx
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./about.css";

function About() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <section className="about-section" id="about">
      <div className="about-container">
        {/* Image Side */}
        <div className="about-img" data-aos="fade-right">
          <img src="/gulebest.jpg" alt="Gule Best" />
        </div>

        {/* Text Side */}
        <div className="about-text" data-aos="fade-up">
          <h2>About Me</h2>
          <h3>Full Stack Developer & Mobile App Engineer</h3>
          <p>
            I’m <strong>Gule Best</strong>, a passionate software developer dedicated to
            crafting seamless, visually engaging, and functional applications.
            I love solving real-world problems through code — whether it’s building
            modern web interfaces, mobile apps, or backend systems that scale.
          </p>
          <p>
            I enjoy learning and working with technologies like React, Node.js,
            Express, MongoDB, and Flutter. My goal is to continuously grow as a
            developer and create software that makes people’s lives easier.
          </p>

          <a href="#contact" className="btn-primary" data-aos="fade-up" data-aos-delay="200">
            Let’s Connect
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
