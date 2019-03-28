import React, {Component} from "react";
import Jumbotron from "../components/Jumbotron";
import Banner from "../components/Banner";
import GoogleLogin from "react-google-login";
import { GoogleLogout } from "react-google-login";
import Footer from "../components/Footer";


class Landing extends Component {

    constructor() {
        super();
        this.state = { isAuthenticated: false, user: null, token: "", name: ""};
    }
    
    logout = () => {
        this.setState({isAuthenticated: false, token: '', user: null, name: ""})
    };
    
    googleResponse = (response) => {
        console.log(response);
        let Gname = response.profileObj.givenName;

        sessionStorage.setItem("userFirstName", response.profileObj.givenName);
        sessionStorage.setItem("userLastName", response.profileObj.familyName);
        sessionStorage.setItem("userEmail", response.profileObj.email);
        sessionStorage.setItem("googleId", response.profileObj.googleId);
        sessionStorage.setItem("userPic", response.profileObj.imageUrl);
        this.setState({isAuthenticated: true, token: '', user: null , name: Gname})
    };
    
    onFailure = (error) => {
        alert(error);
    }
    
    render() {
    console.log(this.state.name, "Gname in")
    console.log(this.state.isAuthenticated)
    
    // Value to display to the user after login
    let WelcomeMsg = !this.state.isAuthenticated ?
                    ( <h1> Please sign in</h1> ) 
                    :
                    ( <h1> Welcome {this.state.name} </h1>);
    
    
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
                <body>
                    <div className="container-fluid" style={containerStyle}>
                        <div className="row">
                            <div className="col-md-1">
                                {/* empty */}
                            </div>
                            <div className="col-md-6">
                                <Banner></Banner>
                            </div>
                            <div className="col-md-4">
                                <Jumbotron></Jumbotron>
                            </div>
                            <div className="col-md-1">
                                {/* empty */}
                            </div>
                        </div>
                    </div>
                </body>
                <Footer />
            </div>
        )
    }
};


var containerStyle = {
    background: 'linear-gradient(to left, #e67e22, #e74c3c)',
     backgroundSize: 'cover'

};


export default Landing;
