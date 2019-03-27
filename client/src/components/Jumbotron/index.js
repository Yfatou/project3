import React from "react";
import "./style.css";
import SignUpBtn from "../SignUpBtn"

function Jumbotron() {
    return (
        <div className="jumbotron">
            <div >
            <center><SignUpBtn /></center>
            <h4>SeniorNextDoor is a volunteer based app focused on helping elderly people in your neighborhood with their daily needs.</h4>  
            
            <h6><p>Although its main purpose is to help the elderly, we welcome people of all ages. We need volunteers who may be working age and find that they have extra time or teenagers who need volunteer hours. </p>
            
            <p>Ultimately, we hope that people will get to know their neighbors and improve their communities from within.</p></h6>
            <br></br>
            
            </div>
        </div>
    );
}

export default Jumbotron;