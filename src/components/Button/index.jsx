import React from "react";
import "./styles.css";

const Button = ({ label, ...inputProps }) => {
  return (
    <button className="btn" {...inputProps}>
      {label}
    </button>
  );
};

export default Button;
