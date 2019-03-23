import React, {Component} from "react";
import Jumbotron from "../components/Jumbotron";
// import SignUpBtn from "../components/SignUpBtn";
<<<<<<< HEAD
// import {Redirect} from 'react-router-dom';
=======
>>>>>>> master
import Footer from "../components/Footer"


class Landing extends Component {

    constructor(props){
        super(props);
        this.state = {
           name:'',
           redirect: false,
       };
    }

//     componentDidMount() {
//         let data = JSON.parse(sessionStorage.getItem('userData'));
//         console.log(data);
//         this.setState({name: data.userData.name})
//    }

    render(){

        // if(!sessionStorage.getItem('userData') || this.state.redirect){
        //     return (<Redirect to={'/'}/>)
        // }

        return(
        <div>
            <Jumbotron>SeniorNextDoor</Jumbotron>
            Welcome {this.state.name}
            <Footer />
        </div>
        );
    }
};

export default Landing;

