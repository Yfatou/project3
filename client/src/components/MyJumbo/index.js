import React from "react";
import "./style.css";

const MyJumbo = ({ children }) => {
    return (
        <div class="container">
            {children}
        </div>
    );
}

export default MyJumbo;