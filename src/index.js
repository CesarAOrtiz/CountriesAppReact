import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Header from "./components/Header/Header";
import { List } from "./containers/List/List";

const media = window.matchMedia(
  "(prefers-color-scheme: light), (prefers-color-scheme: no-preference)"
);

if (media.matches) {
  document.body.classList.add("light-theme");
} else {
  document.body.classList.add("dark-theme");
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Header />
    <List />
  </React.StrictMode>,
  rootElement
);
