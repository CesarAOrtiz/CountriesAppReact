import React from "react";
import "./Details.css";
import Flag from "../../components/Flag/Flag";
import DataContainer from "../../components/DataContainer/DataContainer";
import Back from "../../components/Back/Back";

function Details(props) {
  const { element, borders, clickDetailHandler, clickBackHandler } = props;

  return (
    <section id="details">
      <Back clickHandler={clickBackHandler} />
      <div id="detail-flexbox">
        <Flag
          width="486px"
          height="324px"
          src={element.flag}
          alt={"Flag of " + element.name}
        />
        <DataContainer
          element={element}
          borders={borders}
          clickHandler={clickDetailHandler}
        />
      </div>
    </section>
  );
}

export default Details;
