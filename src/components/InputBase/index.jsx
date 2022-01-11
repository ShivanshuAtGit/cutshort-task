import React from "react";
import "./styles.css";

const InputBase = (props) => {
  const { label, id, variant = "normal", text = "", ...inputProps } = props;

  return (
    <div className="inputBase">
      <label htmlFor={id} className="label">
        {label}
      </label>
      <br />
      {variant === "normal" ? (
        <input {...inputProps} id={id} className="input" />
      ) : (
        <div className="input__wrapper">
          <span>{text}</span>
          <input {...inputProps} id={id} className="input" />
        </div>
      )}
    </div>
  );
};

export default InputBase;
