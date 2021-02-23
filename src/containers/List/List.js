import React from "react";
import "./List.css";
import CardList from "../../components/CardList/CardList";
import SearchBlock from "../../components/SearchBlock/SearchBlock";
import Loader from "../../components/Loader/Loader";
import Border from "../../components/Border/Border";
import Details from "../Details/Details";

const DataContext = React.createContext();

function List() {
  const [data, setData] = React.useState({});
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState("");
  const [detail, setDetail] = React.useState(false);
  const [element, setElement] = React.useState({});
  const [borders, setBorders] = React.useState([]);
  const [filter, setFilter] = React.useState({});

  async function fetchData() {
    try {
      const response = await fetch(
        "https://restcountries.eu/rest/v2/all?fields=name;capital;currencies;alpha3Code;region;subregion;flag;population;borders;languages"
      );
      return response.ok
        ? [await response.json(), true]
        : ["Data not found", false];
    } catch (error) {
      return [error.message, false];
    }
  }

  async function showData(response) {
    const [data, success] = await response;
    if (success) {
      setData(Array.from(data));
    } else {
      setError(data);
    }
    setLoading(false);
  }

  React.useEffect(() => {
    showData(fetchData());
  }, []);

  const getDetails = (target) => {
    const borders = data.filter((obj) =>
      target.borders.includes(obj.alpha3Code)
    );
    const borderList = borders.map((obj) => (
      <Border key={obj.name} element={obj} clickHandler={getDetails} />
    ));
    setElement(target);
    setBorders(borderList);
    if (detail === false) setDetail(true);
    window.scroll(0, 0);
  };

  const display = () => {
    return detail ? (
      <Details
        element={element}
        borders={borders}
        clickDetailHandler={getDetails}
        clickBackHandler={() => {
          setDetail(false);
        }}
      />
    ) : (
      <>
        <SearchBlock filterHandler={setFilter} />
        <CardList
          data={filter.length ? filter : data}
          clickHandler={getDetails}
        />
      </>
    );
  };

  if (loading || error) {
    return loading ? <Loader size={100} /> : <div>error</div>;
  }

  return (
    <>
      <DataContext.Provider value={data}>{display()}</DataContext.Provider>
    </>
  );
}

export { List, DataContext };
