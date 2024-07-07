import React, { useState } from "react";
import "./Header.css";
import MenuIcon from "@mui/icons-material/Menu";
import Collapse from "@mui/material/Collapse";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  return (
    <header className="header">
      <div className="container">
        <h1>Accredian</h1>
        <div onClick={toggleNav} className="collapser">
          <MenuIcon />
        </div>
        <nav>
          <ul className="non-collapser">
            <li>
              <a href="#refer">Refer</a>
            </li>
            <li>
              <a href="#benefits">Benefits</a>
            </li>
            <li>
              <a href="#faq">FAQs</a>
            </li>
            <li>
              <a href="#support">Support</a>
            </li>
          </ul>
        </nav>
        <button className="contact-btn non-collapser">Contact Support</button>
      </div>
      <div className="collapser">
        <Collapse in={isNavOpen} unmountOnExit>
          <nav>
            <div onClick={toggleNav} className="nav-item">
              Refer
            </div>
            <div onClick={toggleNav} className="nav-item">
              Benefits
            </div>
            <div onClick={toggleNav} className="nav-item">
              FAQs
            </div>
            <div onClick={toggleNav} className="nav-item">
              Support
            </div>
          </nav>
        </Collapse>
      </div>
    </header>
  );
};

export default Header;
