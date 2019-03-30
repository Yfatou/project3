import React, { Component } from "react";
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

  constructor() {
    super();
    this.state = { isAuthenticated: false, user: null, token: "", name: "" };
  };

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

    console.log("googleId: " + this.state.googleId);

    // check if the user logged in is already in the database
    API.getGoogleUser(this.state.googleId).then((res) => {
      console.log("res in getGoogleUser: " + res.data)

      // if getGoogleUser has a result, log in as that user

      // else, log in as that user and insert the information in the database
      if (res.data) {  
        console.log("user in the database")
        this.setState({ isAuthenticated: true, token: '', user: null, name: res.data.name })

        console.log("Id when the user exists: " + res.data.googleId)
       }
      else {// save the user information in the database
        API.saveGoogle({  
          googleId: this.state.googleId,
          tokenId: this.state.tokenId,
          email: this.state.email,
          name: this.state.name,
          picture: this.state.picture,
          given_name: this.state.given_name,
          family_name: this.state.family_name
        }).then(res =>{
          // this.loadGoogle(res)
          console.log(`userDbResponse`)
          console.log(res)
          sessionStorage.setItem("userObjectId", res.data._id);
          console.log(sessionStorage.getItem("userObjectId"))
          window.location.replace("../../options");
        }).catch(err => console.log(err))
      };
    });


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
        {/* {this.googleResponse} */}
        {content}
        {WelcomeMsg}
      </div>
    );
  }
};

export default SignUpBtn;