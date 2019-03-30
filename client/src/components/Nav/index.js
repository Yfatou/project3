import React from "react";
import "./style.css";
import SignUpBtn from "../SignUpBtn";

const Nav = () => {
  return (
    <div className="navbar-fixed">
    <nav>
      <div className="nav-wrapper">
        <a href="/" className="brand-logo" id="brand-logo1">SeniorNextDoor</a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><a href="/landing">Home</a></li>
          {/* <li><a href="/options">Choose-Options</a></li>
          <li><a href="/services">Service-Request-Form</a></li> */}
          <li><a href="/searches">Search Opportunities!</a></li>
        </ul>
      </div>
    </nav>
    </div>
  );
}

export default Nav;
