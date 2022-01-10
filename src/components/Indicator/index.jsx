import React from "react";
import "./styles.css";

const Indicator = ({ stepsLength, completedTill }) => {
  const RenderListItem = () => {
    var indents = [];
    for (var i = 0; i < stepsLength; i++) {
      if (i + 1 === stepsLength)
        indents.push(
          <li
            key={i}
            className={`indicator__list-item ${
              i <= completedTill - 1 ? "border-primary" : ""
            }`}
          >
            {i + 1}
          </li>
        );
      else
        indents.push(
          <li
            key={i}
            className={`indicator__list-item ${
              i <= completedTill - 1 ? "border-primary" : ""
            }`}
          >
            {i + 1}
            <span
              className={`indicator__list-item-line line-left ${
                i <= completedTill - 1 ? "bg-primary" : ""
              }`}
            ></span>
            <span
              className={`indicator__list-item-line line-right ${
                i < completedTill - 1 ? "bg-primary" : ""
              }`}
            ></span>
          </li>
        );
    }
    return indents;
  };

  return <ul className="indicator__list">{<RenderListItem />}</ul>;
};

export default Indicator;
