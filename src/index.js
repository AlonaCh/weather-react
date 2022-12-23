import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Weather from "./Weather";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <h1>WeatherReact</h1>
    <Weather />
    <div className="SearchEngine">
      <a
        href="https://fabulous-selkie-61563c.netlify.app"
        target="_blank"
        rel="noreferrer"
      >
        Open-source code
      </a>{" "}
      by Alona Chubenko
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
