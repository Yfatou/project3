import React, {Component} from "react";
import Jumbotron from "../components/Jumbotron";
// import SignUpBtn from "../components/SignUpBtn";
import Footer from "../components/Footer"


class Landing extends Component {

    render(){

        return(
        <div>
            <Jumbotron>SeniorNextDoor</Jumbotron>
            <Footer />
        </div>
        );
    }
};

export default Landing;

