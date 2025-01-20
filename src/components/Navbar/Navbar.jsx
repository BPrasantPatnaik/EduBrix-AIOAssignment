import React, { useState } from 'react';
import './Navbar.css'; // Make sure to add the corresponding CSS file
import Logo from '/Logofull.png'; // Make sure to add the corresponding image file


const Navbar = () => {

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={Logo} alt="logo"   />
      </div>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#counselling">Counselling</a></li>
        <li><a href="#Education">Education</a></li>
        <li><a href="#Prereq">Prerequisites</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
