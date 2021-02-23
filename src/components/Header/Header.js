import React from "react";
import "./Header.css";

function Header() {
  const [mode, setMode] = React.useState(
    document.body.classList.contains("light-theme") ? true : false
  );
  const toggle = () => {
    document.body.classList.toggle("dark-theme");
    document.body.classList.toggle("light-theme");
    setMode((prev) => !prev);
  };
  return (
    <header id="header">
      <p id="logo">Countries</p>
      <p id="mode" onClick={toggle}>
        {mode ? "Dark" : "Light"} Mode
      </p>
    </header>
  );
}
export default Header;
