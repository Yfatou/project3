import React from "react";

const Nav = () => {
  return (
    <div class="navbar-fixed">
    <nav>

    <div className="nav-wrapper #4db6ac teal lighten-2">
      <a href="/" className="brand-logo"><b>S</b>enior<b>N</b>ext<b>D</b>oor</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
      <li><a href="/services">Service-Request-Form</a></li>
          <li><a href="/searches">Search-Opportunity-Form</a></li>
          <li><a href="/options">Choose-Options</a></li>
          <li><a href="/landing">Home</a></li>
          <li><a href="badges.html">Components</a></li>
          <li><a href="collapsible.html">JavaScript</a></li>
      </ul>
    </div>
  </nav>
</div>
  );
}

export default Nav;
