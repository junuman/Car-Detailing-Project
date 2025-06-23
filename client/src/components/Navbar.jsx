import React from 'react';
import logo from '../assets/logo.png'; // Adjust path if needed

const Navbar = () => (
  <nav className="navbar">
    <a href="#home" className="logo-link">
      <img src={logo} alt="2MB Auto Detailing Logo" className="logo" />
    </a>
    <ul>
      <li><a href="#services">Our Services</a></li>
      <li><a href="#gallery">Our Work</a></li>
      <li><a href="#team">Meet the Team</a></li>
      <li><a href="#pricing">Pricing</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>
);

export default Navbar;
