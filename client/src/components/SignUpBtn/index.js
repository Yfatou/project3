import React, { Component } from "react";
import GoogleLogin from "react-google-login";
import { GoogleLogout } from "react-google-login";
import API from "../../utils/API"

class SignUpBtn extends Component {

  constructor() {
    super();
    this.state = { 
      isAuthenticated: false, 
      user: null, 
      token: "", 
      name: "",
      googleId: "",
      tokenId: "",
      email: "",
      email_verified: "",
      picture: "",
      given_name: "",
      family_name: "",
    };
  };

  loadGoogle = (userDbResponse) => {
    API.getGoogle()
      .then(res =>
        this.setState({ 
          googleId: "",
          tokenId: "",
          email: "",
          name: "",
          picture: "",
          given_name: "",
          family_name: ""})
      )
      .catch(err => console.log(err));
  };

  logout = () => {
    this.setState({ isAuthenticated: false, token: '', user: null, name: "" })
  };

  googleResponse = (response) => {
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
    .then(res =>{
      sessionStorage.setItem("userObjectId", res.data._id);
      console.log(sessionStorage.getItem("userObjectId"))

      sessionStorage.setItem("volunteerData",JSON.stringify(res.data))
    
      window.location.replace("../../options");

    })
    .catch(err => console.log(err));
  };


  onFailure = (error) => {
    alert(error);
  }

  render() {
    console.log(this.state.name, "Gname in")
    console.log(this.state.isAuthenticated)

    // Value to display to the user after login
    let WelcomeMsg = !this.state.isAuthenticated ?
      (<h2> Please sign in</h2>)
      :
      (<h2> Welcome {this.state.name} </h2>);

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
            prompt={"consent"}
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