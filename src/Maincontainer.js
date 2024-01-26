import React from "react";
import "./styles.css";
import Cityname from "./Cityname.js";
import Leftcontainer from "./Leftcontainer.js";
import Search from "./Search.js";
import Footer from "./Footer.js";

export default function Maincointainer() {
  return (
    <body className="App background">
      <div className="container maincontainer">
        <div className="container-sm cityname" id="display-current-city">
          <Cityname city="Vienna" />
        </div>
        <div>
           <Leftcontainer /> 
          </div>
        
        <div className="row searchcontainer">
          <Search />
        </div>
        <div className="card-group cardstyle" id="weather-forecast">
          <Footer />
        </div>
      </div>
    </body>
  );
}