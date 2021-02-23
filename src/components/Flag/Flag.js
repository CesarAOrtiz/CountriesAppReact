import React from "react";
import "./Flag.css";

function Flag(props) {
  return (
    <img
      width={props.width}
      height={props.height}
      src={props.src}
      alt={props.alt}
      className="flag-img"
    />
  );
}

export default Flag;
