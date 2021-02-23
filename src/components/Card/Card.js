import React from "react";
import "./Card.css";
import Flag from "../Flag/Flag";
import Data from "../Data/Data";

function Card(props) {
  const { element, clickHandler } = props;
  return (
    <div
      className="card"
      id={element.name}
      onClick={() => clickHandler(element)}
    >
      <Flag
        width="220px"
        height="150px"
        src={element.flag}
        alt={"Flag of " + element.name}
      />
      <Data
        Capital={element.capital}
        Region={element.region}
        Population={element.population.toLocaleString("es-MX")}
      >
        <p>{element.name}</p>
      </Data>
    </div>
  );
}

export default Card;
