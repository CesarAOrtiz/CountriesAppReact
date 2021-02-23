import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import Filter from "../Filter/Filter";
import "./SearchBlock.css";

function SearchBlock(props) {
  const { filterHandler } = props;

  return (
    <div id="form-wrapper">
      <SearchBar filterHandler={filterHandler} />
      <Filter filterHandler={filterHandler} />
    </div>
  );
}

export default SearchBlock;
