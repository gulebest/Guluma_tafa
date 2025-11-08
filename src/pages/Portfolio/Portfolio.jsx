import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./portfolio.css";

function Portfolio() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
      offset: 100,
    });
  }, []);

  const projects = [
    {
      title: "E-Commerce Website",
      description:
        "A full-stack MERN e-commerce platform with secure authentication, product search, and shopping cart.",
      image: "https://media.istockphoto.com/id/1428709516/photo/shopping-online-woman-hand-online-shopping-on-laptop-computer-with-virtual-graphic-icon.jpg?s=612x612&w=0&k=20&c=ROAncmFL4lbSQdU4VOhyXu-43ngzfEqHE5ZZAw5FtYk=",
      link: "https://amazon-dohy.vercel.app/",
    },
    {
      title: "Mobile App Application",
      description:
        "A cross-platform mobile app built with Flutter and Firebase, designed for performance and scalability.",
      image: "https://www.devicemagic.com/wp-content/uploads/2021/06/mobile-apps-1-scaled.jpg",
      link: "https://github.com/gulebest",
    },
    {
      title: "Netflix Clone",
      description:
        "A React + Firebase Netflix clone with live movie previews, authentication, and smooth UI interactions.",
      image: "https://i.ytimg.com/vi/44OcU1PJWCA/maxresdefault.jpg",
      link: "https://netflix-clone-2024-ei29.vercel.app/",
    },
    {
      title: "Abe Garage",
      description:
        "A car service management web app built with React and Node.js for tracking repairs and appointments.",
      image: "https://media.istockphoto.com/id/1347150429/photo/professional-mechanic-working-on-the-engine-of-the-car-in-the-garage.jpg?s=612x612&w=0&k=20&c=5zlDGgLNNaWsp_jq_L1AsGT85wrzpdl3kVH-75S-zTU=",
      link: "https://github.com/gulebest",
    },
    {
      title: "Student Management System",
      description:
        "A CRUD-based student management system built using React and Express to manage records efficiently.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvYNrNGUM7W-yc-n-uZuk3prmL9YGbNzZnqA&s",
      link: "https://github.com/gulebest",
    },
    {
      title: "Apple Website",
      description:
        "A beautiful Apple website clone built with modern React animations and responsive design.",
      image: "https://www.dbswebsite.com/uploads/apple-website-image-collection-min.jpg",
      link: "https://github.com/gulebest",
    },
  ];

  return (
    <section className="portfolio" id="portfolio">
      <h2 data-aos="fade-up">My Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div
            className="project-card"
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <img src={project.image} alt={project.title} />
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
