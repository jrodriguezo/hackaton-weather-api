import React from "react";
import "./styles.scss";

function GlobalInformation({ region, country, localTime, celsiusTemperature }) {
  return (
    <section className="global-info">
      <h1>{region}</h1>
      <h2>{country}</h2>
      <div className="temperature">
        <h3>{celsiusTemperature}</h3>
        <span>&deg;C</span>
      </div>
      <small>{localTime}</small>
    </section>
  );
}

export default GlobalInformation;
