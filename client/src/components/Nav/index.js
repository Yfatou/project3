import React from "react";
import "./style.css";
import { GoogleLogout } from 'react-google-login';
// import LogOutBtn from "../LogOutBtn";
import SignUpBtn from "../SignUpBtn";

const Nav = () => {

  const logout = (response) => {
    console.log("logged out");
  }

return (
    <nav className="navbar-fixed nav-wrapper sticky" >
      <div>
        <a href="/"><h4 className="brand brand-logo" id="brand-logo1"><span>Senior</span>NextDoor</h4> </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><a href="/landing">Home</a></li>
          {/* <li><a href="/options">Choose-Options</a></li> */}
          <li><a href="/services">Service-Request-Form</a></li>
          {/* <li><a href="/userInfos">User</a></li> */}
          {/* <li><a href="/send">Contact-Senior-Form</a></li> */}
          {/* <li><a href="/options">Choose-Options</a></li>
          <li><a href="/services">Service-Request-Form</a></li> */}
          <li><a href="/searches">Search Opportunities!</a></li>
          <GoogleLogout
            clientId="601157754613-0js8ncq3uld0pj9gp3vtf1insj3lacu4.apps.googleusercontent.com"
            buttonText="Logout"
            onLogoutSuccess={logout}
            >
          </GoogleLogout>

          <li><a href="/howitworks">How It Works</a></li>
        </ul>
      </div>
    </nav>
    
    );
}

export default Nav;
