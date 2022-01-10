import React from "react";
import "./styles.css";

const InputBase = (props) => {
  const { label, id, ...inputProps } = props;
  console.log(inputProps);

  return (
    <div className="inputBase">
      <label htmlFor={id} className="label">
        {label}
      </label>
      <br />
      <input {...inputProps} id={id} className="input" />
    </div>
  );
};

export default InputBase;
