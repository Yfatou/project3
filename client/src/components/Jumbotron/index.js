import React from "react";
import SignUpBtn from "../SignUpBtn"

function Jumbotron({ children }) {
    return (
        <div className="jumbotron">
            {children}
            <SignUpBtn />
        </div>
    );
}

export default Jumbotron;