import React from "react";
import "./styles.css";
import Humidity from "./Humidity";
import Wind from "./Wind";
import Currentprep from "./Currentprep";
import Weather from "./Weather";
import Datenhour from "./Datenhour";

export default function Leftcontainer() {
  return (
    <div className="row">
    <div className="col-3 containerright">
      {
        <ul className="list-group">
          <li className="list-group-item">
            <img className="imagesize" id="icon" src="" alt="" />
          </li>
          <li
            className="list-group-item leftstyledescription"
            id="current-humidity"
          >
            <Humidity />
          </li>
          <li
            className="list-group-item leftstyledescription"
            id="current-wind-speed"
          >
            <Wind />
          </li>
        </ul>
      }
    </div>
    <div className="col-3 containerleft">
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
    </div>
  );
}
