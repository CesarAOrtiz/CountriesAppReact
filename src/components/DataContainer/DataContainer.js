import React from "react";
import "./DataContainer.css";
import Data from "../Data/Data";

function DataContainer(props) {
  const { element, borders } = props;

  const lister = (element, key) =>
    element[key].map((obj) => obj.name).join(", ");

  return (
    <div id="data-container">
      <Data
        Capital={element.capital}
        Region={element.region}
        Subregion={element.subregion}
        Language={lister(element, "languages")}
        Population={element.population.toLocaleString("es-MX")}
        Currencies={lister(element, "currencies")}
        Borders={borders}
      >
        <p>{element.name}</p>
      </Data>
    </div>
  );
}

export default DataContainer;
