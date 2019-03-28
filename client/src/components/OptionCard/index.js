import React from "react";
import "./style.css";

const OptionCard = ({ children }) => {
    return (
        <div id="op-card" className="card-option">
            {children}
        </div>
    );
}

export default OptionCard;