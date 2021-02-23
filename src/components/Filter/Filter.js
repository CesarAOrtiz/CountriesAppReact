import React from "react";
import "./Filter.css";
import { DataContext } from "../../containers/List/List";

function Filter(props) {
  const data = React.useContext(DataContext);
  const { filterHandler } = props;

  const getRegions = (data, key) => [
    ...new Set(data.map((element) => (element[key] ? element[key] : null)))
  ];

  const getOptions = (list) =>
    list.map((name) =>
      name ? (
        <option key={name} value={name}>
          {name}
        </option>
      ) : null
    );

  const search = (e) => {
    const option = e.currentTarget.options[e.currentTarget.selectedIndex].value;
    const coincidense = data.filter(
      (obj) => obj.region.includes(option) || obj.subregion.includes(option)
    );
    filterHandler(coincidense);
    window.scroll(0, 0);
  };

  const regionName = getRegions(data, "region");
  const subregionName = getRegions(data, "subregion");
  const regions = regionName.concat(subregionName).sort();

  return (
    <select id="filter" aria-label="Filter combobox" onChange={search}>
      <option value="">All</option>
      {getOptions(regions)}
    </select>
  );
}

export default Filter;
