import React, { Component } from "react";
// import Jumbotron from "../components/Jumbotron";
import GoogleLogin from "react-google-login";
import { GoogleLogout } from "react-google-login";
import API from "../../utils/API"

class SignUpBtn extends Component {

  state = {
    googleId: "",
    tokenId: "",
    email: "",
    email_verified: "",
    name: "",
    picture: "",
    given_name: "",
    family_name: "",
    // locale: ""
  };

  // componentDidMount() {
  //   this.googleResponse();
  // }

  constructor() {
    super();
    this.state = { isAuthenticated: false, user: null, token: "", name: "" };
  }

  logout = () => {
    this.setState({ isAuthenticated: false, token: '', user: null, name: "" })
  };

  googleResponse = (response) => {
    // console.log(response);
    // // work on grabbing API

    this.setState({ 
      googleId: response.profileObj.googleId,
      tokenId: response.tokenId,
      email: response.profileObj.email,
      name: response.profileObj.givenName,
      picture: response.profileObj.imageUrl,
      given_name: response.profileObj.givenName,
      family_name: response.profileObj.familyName})

    console.log(this.state.googleId);

    API.saveGoogle({  
          googleId: this.state.googleId,
          tokenId: this.state.tokenId,
          email: this.state.email,
          name: this.state.name,
          picture: this.state.picture,
          given_name: this.state.given_name,
          family_name: this.state.family_name
    })
    

    // work on grabbing API
    let Gname = response.profileObj.givenName;

    sessionStorage.setItem("userFirstName", response.profileObj.givenName);
    sessionStorage.setItem("userLastName", response.profileObj.familyName);
    sessionStorage.setItem("userEmail", response.profileObj.email);
    sessionStorage.setItem("googleId", response.profileObj.googleId);
    sessionStorage.setItem("userPic", response.profileObj.imageUrl);
    this.setState({ isAuthenticated: true, token: '', user: null, name: Gname })

  
  };

  onFailure = (error) => {
    alert(error);
  }

  render() {
    console.log(this.state.name, "Gname in")
    console.log(this.state.isAuthenticated)

    // Value to display to the user after login
    let WelcomeMsg = !this.state.isAuthenticated ?
      (<h1> Please sign in</h1>)
      :
      (<h1> Welcome {this.state.name} </h1>);


    let content = !!this.state.isAuthenticated ?
      (
        <div>
          <GoogleLogout
            buttonText="Logout"
            onLogoutSuccess={this.logout}
          >
          </GoogleLogout>
        </div>
      )
      :
      (
        <div>
          <GoogleLogin
            clientId="601157754613-0js8ncq3uld0pj9gp3vtf1insj3lacu4.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={this.googleResponse}
            onFailure={this.onFailure}
          />
        </div>
      );

    return (
      <div>
        {content}
        {WelcomeMsg}
      </div>
    );
  }
};

export default SignUpBtn;