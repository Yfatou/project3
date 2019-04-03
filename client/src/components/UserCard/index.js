import React from "react";
import "./style.css";

const UserCard = ({ children }) => {
    return (

        <div class="cardUser">
            {children}
        </div>
    );
}

export default UserCard;
