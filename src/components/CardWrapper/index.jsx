import React from "react";
import "./styles.css";

const CardWrapper = ({ title, subTitle, children }) => {
  return (
    <div className="card__wrapper">
      <h2 className="card__title">Welcome&#33; First things first...</h2>
      <p className="card__subtitle">You can always change them later.</p>
      <div className="card__children">{children}</div>
    </div>
  );
};

export default CardWrapper;
