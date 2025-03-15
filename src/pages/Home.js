import React from "react";
import "../styles/Home.css";
import profileImg from "../assets/profile.jpg"; 
import resume from "../assets/resume.pdf"; // Import the resume PDF

const Home = () => {
  return (
    <div className="home-container">
      {/* Profile Section */}
      <div className="profile">
        <img src={profileImg} alt="Profile" className="profile-img" />
      </div>
      <h1 className="title">
        Hi I'm <span>Shaik Yasir Ahmed</span>
      </h1>
      <h2 className="subtitle">Software Developer</h2>
      <p className="description">
        Software developer with 3 years' experience, passionate about building scalable apps, learning new tech, and collaborating on innovative solutions.
      </p>
      <div className="buttons">
        <button 
          className="connect-btn" 
          onClick={() => window.open('https://www.linkedin.com/in/shaikyasirahmed07/', '_blank')}
        >
          Connect with me
        </button>
        
        <button 
          className="resume-btn"
          onClick={() => window.open(resume, '_blank')} // Open resume PDF
        >
          My Resume
        </button>
      </div>
    </div>
  );
};

export default Home;
