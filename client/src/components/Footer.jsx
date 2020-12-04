import React from 'react';
import './Footer.css'

function Footer(props) {
  return (
    <div className="footer-container">
      <a href="https://github.com/DeanLeong" target="_blank" rel="noreferrer" className="social-a"><img src={"../assets/GitHub_Logo.png"} alt="github" className="github-logo"/></a>
      <a href="https://www.linkedin.com/in/dean-leong-2a68041b2/" target="_blank" rel="noreferrer"  className="social-a"><img src={"../assets/LI-Logo.png"} alt="linkedin" className="linkedin-logo"/></a>
    </div>
  );
}

export default Footer;