import React from "react";
import SignUpBtn from "../SignUpBtn"

function Jumbotron() {
    return (
        <div className="jumbotron">
            SeniorNextDoor is a volunteer based app focused on helping elderly people in a neighborhood with their daily needs.  Although its main purpose is to help the elderly, we welcome people of all ages. We need volunteers who may be working age and find that they have extra time or teenagers who need volunteer hours. Ultimately, we hope that people will get to know their neighbors and improve their communities from within.
            <center><SignUpBtn /></center>
        </div>
    );
}

export default Jumbotron;