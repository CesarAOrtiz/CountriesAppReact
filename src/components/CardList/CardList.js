import React from "react";
import "./CardList.css";
import Card from "../Card/Card";

function CardList(props) {
  React.useEffect(() => {
    gridLayout();
    window.addEventListener("resize", gridLayout, false);
  }, []);

  const gridLayout = () => {
    if (document.querySelector("#main-content")) {
      let section = document.querySelector("#main-content");
      let grid = document.querySelector("#container");
      let cell = document.querySelector(".card");
      let cellMargin = parseInt(window.getComputedStyle(cell).margin, 10);
      let space = parseInt(
        section.clientWidth /
          (parseInt(window.getComputedStyle(cell).width, 10) + cellMargin),
        10
      );
      grid.style.gridTemplateColumns = `repeat(${space}, 1fr)`;
    }
  };

  const list = (data, click) => {
    return data.map((obj) => (
      <Card key={obj.name} element={obj} clickHandler={click} />
    ));
  };

  const { data, clickHandler } = props;
  return (
    <section id="main-content">
      <div id="container">{list(data, clickHandler)}</div>
    </section>
  );
}

export default CardList;
