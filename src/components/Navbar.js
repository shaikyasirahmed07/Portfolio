import React from "react";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa"; // Import the person icon
import "./Navbar.css"; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="logo">
        <FaUser className="person-icon" /> Shaik Yasir Ahmed
      </h1>
      <ul className="nav-links">
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/services">SERVICES</Link></li>
        <li><Link to="/projects">PROJECTS</Link></li>
        <li><Link to="/achievements">ACHIEVEMENTS</Link></li>
        <li><Link to="/about-me">ABOUT ME</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
