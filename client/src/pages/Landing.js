import React, {Component} from "react";
import Jumbotron from "../components/Jumbotron";
<<<<<<< HEAD
=======
// import SignUpBtn from "../components/SignUpBtn";
>>>>>>> master
import Footer from "../components/Footer"
import Banner from "../components/Banner"

class Landing extends Component {
    render(){
        return(
        <div>
            <Banner></Banner>
            <Jumbotron></Jumbotron>
            <Footer />
        </div>
        );
    }
};

export default Landing;