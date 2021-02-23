import React from "react";
import ReactDOM from "react-dom";
import "./SearchBar.css";
import { DataContext } from "../../containers/List/List";

function SearchBar(props) {
  const data = React.useContext(DataContext);
  const dataList = React.useRef(null);
  const textfield = React.useRef(null);
  const { filterHandler } = props;

  const updateDataList = () => {
    const search = textfield.current.value.trim();
    const coincidences = data
      .filter((object) => object.name.toLowerCase().includes(search))
      .slice(0, 5);
    const options = coincidences.map((obj) => (
      <option value={obj.name} key={obj.name} />
    ));
    return ReactDOM.render(options, dataList.current);
  };

  const search = (e, textfield) => {
    e.preventDefault();
    const search = textfield.value.toLowerCase().trim();
    const filterData = data.filter((object) =>
      object.name.toLowerCase().includes(search)
    );
    filterHandler(filterData);
    window.scroll(0, 0);
  };

  return (
    <form id="search-form" onSubmit={(e) => search(e, textfield.current)}>
      <input
        id="search-field"
        type="text"
        placeholder="Search"
        aria-label="Search field"
        list="search"
        ref={textfield}
        onChange={updateDataList}
      />
      <datalist id="search" ref={dataList}></datalist>
      <button id="search-button" type="submit">
        <span role="img" aria-label="Search button">
          &#128269;&#65038;
        </span>
      </button>
    </form>
  );
}

export default SearchBar;
