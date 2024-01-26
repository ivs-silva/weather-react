import Currentprep from "./Currentprep";
import Weather from "./Weather";
import Datenhour from "./Datenhour";
import React from "react";
import "./styles.css";

export default function Rightcontainer() {
  return (
    <div className="col-6 containerleft">
      <ul className="list-group">
        <li className="list-group-item standardstyleright">
          <Weather />
        </li>
        <li className="list-group-item standardstyleright" id="current-date">
          <Datenhour />
        </li>
        <li
          className="list-group-item rightstyledescription"
          id="current-precipitation"
        ></li>
        <li className="list-group-item standardstyleright">
          <span id="temperature" className="currenttemperaturestyle"></span>
          <a href="#" id="celsius-link" className="active-link">
            <Currentprep />
            °C
          </a>
          |
          <a href="#" id="fahrenheit-link">
            °F
          </a>
        </li>
      </ul>
    </div>
  );
}
