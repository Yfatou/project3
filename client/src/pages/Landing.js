import React, {Component} from "react";
import Jumbotron from "../components/Jumbotron";
// import SignUpBtn from "../components/SignUpBtn";
// import GoogleLogin from "react-google-login";
import Footer from "../components/Footer"


class Landing extends Component {

    render(){
        // let firstname = "";
        // let lastname = "";

        // const responseGoogle = (response) => {
        //     console.log("google console");
        //     // console.log(response);
        //     // firstname = response.w3.ofa;
        //     // lastname = response.w3.wea;
        //     // console.log(response.w3.ofa);
        //     // console.log(response.w3.wea);
        //     // console.log(response.w3.U3);
        //     console.log(response.profileObj);
        //     // console.log(response.profileObj.familyName);
        //     // console.log(response.profileObj.givenName);
        //     // console.log(firstname);
        //     // console.log(lastname);
        // }

        return(
            <div>
                <Jumbotron>SeniorNextDoor</Jumbotron>
                {/* <GoogleLogin
                    // clientId="702002442826-lnucl09e0ce578hh3n320kj3156ptdjp.apps.googleusercontent.com"
                    clientId="601157754613-0js8ncq3uld0pj9gp3vtf1insj3lacu4.apps.googleusercontent.com"
                    buttonText="Login with Google"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                /> */}
                <Footer />
            </div>
        );
    }
};

export default Landing;

