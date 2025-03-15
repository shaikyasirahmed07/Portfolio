import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Achievements from "./pages/Achievements";
import AboutMe from "./pages/AboutMe";
import Footer from "./components/Footer";
import "./styles/global.css";
import "./App.css"; 

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/achievements" element={<Achievements />} />
            <Route path="/about-me" element={<AboutMe />} />
            
          </Routes>
        </div>
        <Footer />
        
      </div>
    </Router>
  );
}

export default App;
