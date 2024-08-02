import React from 'react';
import './App.css'; 

function NavBar(props) {
   let signUpButton;
 
   if (props.showSignUp) {
     signUpButton = <button className="signup-button">Sign Up</button>;
   } else {
     signUpButton = null;
   }
 
   return (
     <nav className="navbar">
       <div className="logo">
         Conditional Rendering
       </div>
       <ul className="nav-links">
         <li><a href="#home">Home</a></li>
         <li><a href="#about">About</a></li>
         <li><a href="#services">Services</a></li>
         <li><a href="#contact">Contact</a></li>
       </ul>
       {signUpButton}
     </nav>
   );
 }
 
 export default NavBar;