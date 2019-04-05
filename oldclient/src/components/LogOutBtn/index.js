import React, { Component } from "react";
import GoogleLogin from "react-google-login";
import { GoogleLogout } from "react-google-login";

// class LogOutBtn extends Component {

//     // const logout = (response) => {
//     //     console.log("logged out");
//     //     alert("you are logged out!");
//     // };

//     constructor(props) {
//         super(props);
//         this.state = { isLoggedIn: false }
//       }
//     // logout = () => {
//     //     this.setState({ isAuthenticated: false, token: '', user: null, name: "" })
//     //   };

//     render() {

//         return (
        
//             {
//                 (!this.state.isLoggedIn ?
//                  <GoogleLogin
//                   className="GoogButton"
//                   clientId="""
//                   buttonText="Login"
//                   onSuccess={(response) => { this.setState(() => { return { isLoggedIn: true } }) }}
//                   onFailure={(response) => { this.setState(() => { return { isLoggedIn: false } }) }} >
//                 </GoogleLogin>
//                 :
//                 <GoogleLogout
//                   buttonText="Logout"
//                   onLogoutSuccess={(response) => { this.setState(() => { return { isLoggedIn: false } }) }}
//                 />
//               }
//         )

//         <GoogleLogout
//         // clientId="601157754613-0js8ncq3uld0pj9gp3vtf1insj3lacu4.apps.googleusercontent.com"
//         // buttonText="Logout"
//         // onLogoutSuccess={logout}
//         >
//         </GoogleLogout>
//         }
//     }
// }


class LogOutBtn extends Component {
    constructor(props) {
      super(props);
      this.state = { isLoggedIn: false }
    };

    

    render() {
      return (
        <div className="App">
            if {this.state.isLoggedIn}
            {
            <GoogleLogout
                clientId="601157754613-0js8ncq3uld0pj9gp3vtf1insj3lacu4.apps.googleusercontent.com"
              buttonText="Logout"
              onLogoutSuccess={(response) => { this.setState(() => { return { isLoggedIn: false } }) }}
            />
          }
        
        </div>
      );
    }
  }
export default LogOutBtn