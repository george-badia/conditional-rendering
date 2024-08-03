import React from 'react';
import './App.css'; 

function NavBar(props) {
  function handleClick(section) {
    props.onSectionChange(section);
  }

  return (
    <nav className="navbar">
      <div className="logo">
      conditional-rendering
      </div>
      <ul className="nav-links">
        <li><a href="#home" onClick={() => handleClick('home')}>Home</a></li>
        <li><a href="#about" onClick={() => handleClick('about')}>About</a></li>
        <li><a href="#services" onClick={() => handleClick('services')}>Services</a></li>
        <li><a href="#contact" onClick={() => handleClick('contact')}>Contact</a></li>
      </ul>
      {props.showSignUp && <button className="signup-button">Sign Up</button>}
    </nav>
  );
}

export default NavBar;
