import React from "react";
import "./Loader.css";

function Loader(props) {
  const spinnerSize = props.size;
  return (
    <div className="spinner">
      <svg
        focusable="false"
        width={spinnerSize}
        height={spinnerSize}
        viewBox={`0 0 ${spinnerSize} ${spinnerSize}`}
      >
        <circle
          cx={spinnerSize / 2}
          cy={spinnerSize / 2}
          r={spinnerSize / 2 - 10}
        />
      </svg>
    </div>
  );
}

export default Loader;
