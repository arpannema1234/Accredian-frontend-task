import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-links">
          <div className="programs">
            <h4>Programs</h4>
            <ul>
              <li>Product Management</li>
              <li>Data Science</li>
              {/* Add more links as needed */}
            </ul>
          </div>
          <div className="contact">
            <h4>Contact Us</h4>
            <ul>
              <li>Email: info@accredian.com</li>
              <li>Phone: +91-1234567890</li>
              {/* Add more contact details as needed */}
            </ul>
          </div>
          <div className="accredian">
            <h4>Accredian</h4>
            <ul>
              <li>About Us</li>
              <li>Careers</li>
              {/* Add more links as needed */}
            </ul>
          </div>
        </div>
        <p>&copy; 2024 Accredian. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
