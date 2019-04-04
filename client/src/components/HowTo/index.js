import React from "react";
import "./style.css";

const HowTo = ({ children }) => {
    return (
        <div id="how-card myimg" className="card-how">
            {children}
        </div>
    );
}

export default HowTo;

