import React from "react";
import "./styles.css";

const RadioCards = ({ Icon, title, subTitle, isSelected, id, onClick }) => {
  return (
    <div
      id={id}
      className={`radio__cards ${isSelected && "card-selected"}`}
      onClick={onClick}
    >
      <Icon />
      <h3>{title}</h3>
      <p>{subTitle}</p>
    </div>
  );
};

export default RadioCards;
