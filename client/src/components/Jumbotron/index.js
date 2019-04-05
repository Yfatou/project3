import React from "react";
import "./style.css";
import SignUpBtn from "../SignUpBtn";

const Jumbotron = ()=> {
    return (
        <div className="jumbotron" id="jumboId">
            <div >
                <div className="headText">
                    <h4>SeniorNextDoor is a volunteer based app focused on helping elderly people in your neighborhood with their daily needs.</h4>
                </div>

                <div className="subText">
                    <h6>Although its main purpose is to help the elderly, we welcome people of all ages. We need volunteers who may be working age and find that they have extra time or teenagers who need volunteer hours. </h6>
                </div>

                <div className="subText">
                    <h6>Ultimately, we hope that people will get to know their neighbors and improve their communities from within.</h6>
                </div>
                <hr></hr>
                <center>
                <SignUpBtn />
                    <a className="btn btn-light" 
                        href="https://accounts.google.com/signup/v2/webcreateaccount?flowName=GlifWebSignIn&flowEntry=SignUp" 
                        role="button"
                        target="_blank"
                        rel="noopener noreferrer">
                        Or Create a Google Account 
                    </a>
                </center>
            </div>
        </div>
    );
}


export default Jumbotron;