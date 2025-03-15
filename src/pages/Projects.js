import React from "react";
import "../styles/Projects.css";
import ecommerceImg from "../assets/ecommerce.jpg";
import heritageImg from "../assets/heritage.jpg";
import donationImg from "../assets/donation.jpg";
import lubnaselectionionImg from "../assets/lubnaselectionion.png";

const projects = [
  {
    title: "E-Commerce Platform",
    status: "Completed",
    statusClass: "completed",
    team: "Team",
    description:
      "A full-stack e-commerce platform with user authentication, product management, and payment integration.",
    techStack: ["React", "Spring Boot", "MySQL", "Redux"],
    image: ecommerceImg,
    liveDemo: "https://ecommerce.example.com",
    sourceCode: "https://github.com/shaikyasirahmed07/DakshKrishi_frontend.git",
  },
  {
    title: "Hotel Management System",
    status: "Completed",
    statusClass: "completed",
    team: "Solo",
    description:
      "A hotel management system that allows users to book rooms, manage reservations, and view hotel amenities.",
    techStack: ["Django", "SQL Lite", "Python", "HTML/CSS"],
    image: heritageImg,
    liveDemo: "https://hotelmanagement.example.com",
    sourceCode: "https://github.com/shaikyasirahmed07/BRODOAK-HOTELS.git",
  },
  {
    title: "E-Commerce Platform",
    status: "Completed",
    statusClass: "completed",
    team: "Team",
    description:
      "A full-stack e-commerce platform with user authentication, product management, and payment integration.",
    techStack: ["React", "Node.js", "Express", "MongoDB"],
    image: donationImg,
    liveDemo: "https://donation-platform.example.com",
    sourceCode: "https://github.com/shaikyasirahmed07/SafalKrishi.git",
  },
  {
    title: "Discount App",
    status: "Completed",
    statusClass: "completed",
    team: "Solo",
    description:
      "A mobile app that allows users to find discounts and deals at local stores.",
    techStack: ["Dart", "Flutter", "JavaScript"],
    image: lubnaselectionionImg,
    liveDemo: "https://discountapp.example.com",
    sourceCode: "https://github.com/shaikyasirahmed07/Discount-Calculator.git",
  },
];

const Projects = () => {
  return (
    <section className="projects-section">
      <h2 className="projects-title">Featured Projects</h2>
      <p className="projects-subtitle">
        Explore some of my recent work and technical achievements
      </p>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>
                <strong>Project Status: </strong>
                <span className={project.statusClass}>{project.status}</span>
              </p>
              <p>
                <strong>👤 {project.team}</strong>
              </p>
              <p>{project.description}</p>
              <div className="tech-stack">
                {project.techStack.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>
              <div className="project-buttons">
                <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                  <button className="view-project">View Project</button>
                </a>
                <a href={project.sourceCode} target="_blank" rel="noopener noreferrer">
                  <button className="source-code">Source Code</button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
