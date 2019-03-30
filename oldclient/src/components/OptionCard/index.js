import React from "react";
import "./style.css";

const OptionCard = ({ children }) => {
    return (
        <div className="card">
            {children}
        </div>
    );
}

export default OptionCard;