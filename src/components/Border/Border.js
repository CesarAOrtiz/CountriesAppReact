import React from "react";
import "./Border.css";

function Border(props) {
  const { element, clickHandler } = props;
  return (
    <span
      className="border"
      data-id={element.name}
      onClick={() => clickHandler(element)}
    >
      {element.name}
    </span>
  );
}

export default Border;
