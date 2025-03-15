import React from "react";
import "../styles/AboutMe.css";
import profilePic from "../assets/profile.jpg"; // Adjust path as needed
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const AboutMe = () => {
  return (
    <section className="about-section">
      <h2 className="about-title">About Me</h2>
      <p className="about-subtitle">
        A brief introduction to who I am, my background, and my journey
      </p>

      <div className="about-content">
        <div className="profile-container">
          <img src={profilePic} alt="Shaik Yasir Ahmed" className="profile-pic" />
          <h3 className="name">Shaik Yasir Ahmed</h3>
          <p className="about-description">
          Hi! I’m a software developer who’s been coding my way through exciting challenges for the past three years. I love turning ideas into real-world solutions—whether it’s building apps that make life easier or designing systems that grow seamlessly with user needs. I’m passionate about learning new technologies and collaborating with other developers to create meaningful products. When I’m not coding, you can find me exploring the great outdoors, or enjoying a good book. I’m excited to bring my skills to a team that’s as passionate about innovation as I am. Let’s build something great together!
          </p>
          <div className="social-links">
  <button 
    className="social-btn"
    onClick={() => window.open('https://github.com/shaikyasirahmed07', '_blank')}
    aria-label="GitHub"
  >
    <FaGithub />
    GITHUB
  </button>
  
  <button 
    className="social-btn"
    onClick={() => window.open('https://www.linkedin.com/in/shaikyasirahmed07/', '_blank')}
    aria-label="LinkedIn"
  >
    <FaLinkedin />
    LINKEDIN
  </button>
  
  <button 
    className="social-btn"
    onClick={() => window.open('https://www.instagram.com/yasirahmed07/', '_blank')}
    aria-label="Instagram"
  >
    <FaInstagram />
    INSTAGRAM
  </button>
</div>
        </div>

        <div className="education-container">
          <h3 className="education-title">EDUCATION</h3>
          <table className="education-table">
            <thead>
              <tr>
                <th>Institution</th>
                <th>Degree</th>
                <th>Specialization</th>
                <th>Duration</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>KL University</td>
                <td>B.Tech - CSE</td>
                <td>Distrubuted Ledger Analytics (DLA)</td>
                <td>2022 - 2026</td>
              </tr>
              <tr>
                <td>SRI CHAITANYA</td>
                <td>Intermediate</td>
                <td>MPC</td>
                <td>2020 - 2022</td>
              </tr>
              <tr>
                <td>St Patrick's High School</td>
                <td>SSC</td>
                <td>Secondary School</td>
                <td>2019 - 2020</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
