// src/Components/Skills/Skills.jsx
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./skills.css";

function Skills() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
      offset: 100,
    });
  }, []);

  const skills = [
    { name: "HTML", icon: "/icons/html.svg" },
    { name: "CSS", icon: "/icons/css.svg" },
    { name: "JavaScript", icon: "/icons/javascript.svg" },
    { name: "React", icon: "/icons/react.svg" },
    { name: "Node.js", icon: "/icons/node.svg" },
    { name: "MongoDB", icon: "/icons/mongodb.svg" },
    { name: "Flutter", icon: "/icons/flutter.svg" },
    { name: "Dart", icon: "/icons/dart.svg" },
    { name: "React Native", icon: "/icons/react.svg" },
    { name: "Firebase", icon: "/icons/firebase.svg" },
    { name: "Git & GitHub", icon: "/icons/git.svg" },
    { name: "Figma", icon: "/icons/figma.svg" },
  ];

  return (
    <section className="skills" id="skills">
      <h2 data-aos="fade-up">My Skills</h2>
      <div className="skills-container">
        {skills.map((skill, i) => (
          // 👇 Added data-skill for brand color hover
          <div
            className="skill-card"
            key={i}
            data-skill={skill.name}
            data-aos="fade-up"
            data-aos-delay={i * 100}
          >
            <img src={skill.icon} alt={skill.name} />
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
