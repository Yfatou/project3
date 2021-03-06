import React from "react";
import "./style.css";

// Destructuring the type, className, children and onClick props, applying them to the button element
const Button = ({ type = "default", className, children, onClick }) => {
  return (
    // <button onClick={onClick} className={["btn btn-lg btn-success", `btn-${type}`, className].join(" ")}>
    <button onClick={onClick} className="btn">
      {children}
    </button>
  );
}

export default Button;
