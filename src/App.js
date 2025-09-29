import React from "react";
import "./App.css";
import logo from "./assets/logo.png"; 

function app() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="logo" className="logo" />
        <span className="app-name">SkillMatch</span>
      </div>
      <ul className="navbar-links">
        <li>Home</li>
        <li>Features</li>
        <li>How it Works</li>
        <li>Testimonials</li>
      </ul>
      <button className="login-btn">Login</button>
    </nav>
  );
}

export default app;
