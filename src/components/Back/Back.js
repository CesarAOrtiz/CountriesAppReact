import React from "react";
import "./Back.css";

function Back(props) {
  return (
    <button id="back" onClick={props.clickHandler}>
      Back
    </button>
  );
}

export default Back;
