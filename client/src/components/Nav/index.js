import React from "react";
import "./style.css";


const Nav = () => {
  return (
    <nav className="navbar-fixed nav-wrapper sticky" >
      <div>
        <a href="/"><h4 className="brand brand-logo" id="brand-logo1"><span>Senior</span>NextDoor</h4> </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><a href="/landing">Home</a></li>
          <li><a href="/options">Choose-Options</a></li>
          <li><a href="/services">Service-Request-Form</a></li>
          <li><a href="/userInfos">User</a></li>
          <li><a href="/send">Contact-Senior-Form</a></li>
          {/* <li><a href="/options">Choose-Options</a></li>
          <li><a href="/services">Service-Request-Form</a></li> */}
          <li><a href="/searches">Search Opportunities!</a></li>
        </ul>
      </div>
    </nav>

  );
}

export default Nav;
