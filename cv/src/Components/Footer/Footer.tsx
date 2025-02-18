import React from "react";
import logo from "../../assets/logo.png";

import "./Footer.css";
const Footer = () => {
  return (
    <footer>
      <div className="footer_wrapper">
        <div className="footer_left">
          <div className="footer_logo">
            <img src={logo} alt="logo" />
          </div>
        </div>
        <div className="footer_right">
          <span>Explore me</span>
          <ul className="footer_list">
            <li>
              <i className="fa-brands fa-facebook"></i>
            </li>
            <li>
              <i className="fa-brands fa-instagram"></i>
            </li>
            <li>
              <i className="fa-brands fa-github"></i>
            </li>
            <li>
              <i className="fa-brands fa-linkedin"></i>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
