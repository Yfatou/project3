import React, {Component} from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import SignUpBtn from "../components/SignUpBtn";

class Landing extends Component {
    render(){
        <div>
            <Nav />
            <Jumbotron>SeniorNextDoor</Jumbotron>
            <Footer />
        </div>
    }
}

export default Landing;