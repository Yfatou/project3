import React, {Component} from "react";
import Jumbotron from "../components/Jumbotron";
// import SignUpBtn from "../components/SignUpBtn";
import GoogleLogin from "react-google-login";
// import { GoogleLogout } from 'react-google-login';
// import {Redirect} from "react-router-dom";
// import {PostData} from "../services/PostData";
import Footer from "../components/Footer"


class Landing extends Component {

    state = {
        services: [],
        email: "",
        name: "",
        zip: ""
      };

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         loginError: false,
    //         redirect: false
    //     };
    //     this.signup = this.signup.bind(this);
    // }

    // signup(res, type) {
    //     let postData;
    //     if (type === 'google' && res.w3.U3) {
    //         postData = {
    //             name: res.w3.ig,
    //             provider: type,
    //             email: res.w3.U3,
    //             provider_id: res.El,
    //             token: res.Zi.access_token,
    //             provider_pic: res.w3.Paa
    //         };
    //     }

    //     if (postData) {
    //         PostData('signup', postData).then((result) => {
    //            let responseJson = result;
    //            sessionStorage.setItem("userData", JSON.stringify(responseJson));
    //            this.setState({redirect: true});
    //         });
    //     } else {}
    // }

    render(){
        // if (this.state.redirect || sessionStorage.getItem('userData')) {
        //     return (<Redirect to={'/home'}/>)
        // }
        const responseGoogle = (response) => {
            console.log("google console");
            console.log(response);
        }
        // const logout = (response) => {
        //     console.log("google console");
        //     console.log(response);
        // }
        return(
        <div>
            <Jumbotron>SeniorNextDoor</Jumbotron>
            <GoogleLogin
                // clientId="702002442826-lnucl09e0ce578hh3n320kj3156ptdjp.apps.googleusercontent.com"
                clientId="601157754613-0js8ncq3uld0pj9gp3vtf1insj3lacu4.apps.googleusercontent.com"
                buttonText="Login with Google"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
            />
            {/* <GoogleLogout
                buttonText="Logout"
                onLogoutSuccess={logout}
            >
            </GoogleLogout> */}
            <Footer />
        </div>
        );
    }
};

export default Landing;