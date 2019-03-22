import React from "react";

function Nav() {
  return (

    <nav>
      <div className="nav-wrapper">
        <a href="/" className="brand-logo">SeniorNextDoor</a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><a href="/services">Service-Request-Form</a></li>
          <li><a href="/searchs">Search-Opportunity-Form</a></li>
          <li><a href="/options">Choose-Options</a></li>
          <li><a href="/landing">Home</a></li>
          <li><a href="badges.html">Components</a></li>
          <li><a href="collapsible.html">JavaScript</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
