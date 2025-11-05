// src/Pages/Services/Services.jsx
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./services.css";

function Services() {
  useEffect(() => {
    AOS.init({
      duration: 800, // smooth fade timing
      easing: "ease-in-out", // natural easing
      once: true, // animate only once when visible
      offset: 100, // start fading slightly before fully in view
    });
  }, []);

  const services = [
    {
      title: "Full Stack Development",
      desc: "Building scalable and high-performing web applications using modern tech stacks.",
    },
    {
      title: "Mobile App Development",
      desc: "Creating sleek, responsive, and cross-platform mobile apps for iOS and Android.",
    },
    {
      title: "Backend Engineering",
      desc: "Designing robust APIs and databases that power reliable digital experiences.",
    },
    {
      title: "UI/UX Design",
      desc: "Designing intuitive, engaging, and user-centered interfaces for all devices.",
    },
    {
      title: "DevOps & Deployment",
      desc: "Automating builds, deployments, and monitoring for seamless project delivery.",
    },
    {
      title: "API Integration",
      desc: "Connecting third-party services and systems to extend your app’s functionality.",
    },
  ];

  return (
    <section className="services" id="services">
      <h2 data-aos="fade-up">My Services</h2>
      <div className="service-list">
        {services.map((s, i) => (
          <div
            className="service-card"
            key={i}
            data-aos="fade-up"
            data-aos-delay={i * 150} // staggered fade effect
          >
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
