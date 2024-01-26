import React from "react";
import "./styles.css";

export default function Search() {
  return (
    <div className="col mx-auto" >
      <form id="form-city" className="d-flex" role="search">
        <input
          id="city-input"
          className="form-control me-2 styleformbutton"
          type="search"
          placeholder="Enter your city"
          aria-label="Search"
        />
        <button
          id="search-button"
          className="btn btn-primary styleformbutton"
          type="submit"
        >
          Search
        </button>
      </form>
    </div>
  );
}
