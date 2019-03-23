import React from "react";
import SignUpBtn from "../SignUpBtn"

const Jumbotron = ({ children }) => {
    return (
        <div className="jumbotron">
            {children}
            <SignUpBtn />
        </div>
    );
}

export default Jumbotron;