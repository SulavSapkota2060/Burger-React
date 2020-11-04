import React from "react";
import "./burgerControl.css";

const burgerControl = (props) => {
  return (
    <div className="BuildControl">
      <div className="Label">{props.control.toUpperCase()}</div>
      <button
        className="Less"
        onClick={() => props.remove(props.control)}
        disabled={props.disabled(props.control)}
      >
        Less
      </button>
      <button
        className="More"
        onClick={() => props.add(props.control)}
      >
        More
      </button>
    </div>
  );
};

export default burgerControl;
