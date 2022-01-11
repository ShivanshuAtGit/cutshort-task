import React from "react";
import "./styles.css";

const CardWrapper = ({ title, subTitle, children }) => {
  return (
    <div className="card__wrapper">
      <h2 className="card__title">{title}</h2>
      <p className="card__subtitle">{subTitle}</p>
      {children && <div className="card__children">{children}</div>}
    </div>
  );
};

export default CardWrapper;
