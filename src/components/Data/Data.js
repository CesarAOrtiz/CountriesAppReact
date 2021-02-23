import React from "react";
import "./Data.css";

function Data(props) {
  const { children, ...element } = props;

  const list = () =>
    Object.entries(element).map((prop) => (
      <li key={prop[0]}>
        <span>{prop[0]}: </span>
        {prop[1]}
      </li>
    ));

  return (
    <ul className="data">
      {props.children}
      {list(element)}
    </ul>
  );
}

export default Data;
