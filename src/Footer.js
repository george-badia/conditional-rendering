import React from 'react';
import './App.css'; 

function Footer(props) {
  let footerContent;

  switch (props.footerType) {
    case 'about':
      footerContent = <p>About Us: We are  friends to another way to conditionally render elements the ternary operator. condition ? true : false..</p>;
      break;
    case 'contact':
      footerContent = <p>Contact Us: You can reach us at contact@Conditional.com.</p>;
      break;
    case 'privacy':
      footerContent = <p>Privacy Policy: We value your privacy and protect your data.</p>;
      break;
    default:
      footerContent = <p>&copy; 2024 Conditional Rendering. All rights reserved.</p>;
  }

  return (
    <footer className="footer">
      {footerContent}
    </footer>
  );
}

export default Footer;
