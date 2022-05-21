import React from "react";
import "./styles.scss";

function GlobalInformation({ region, country, localTime, celsiusTemperature }) {
  return (
    <section className="global-info">
      <h1>{region}</h1>
      <h2>{country}</h2>
      <h3>{celsiusTemperature} ºC</h3>
      <small>{localTime}</small>
    </section>
  );
}

export default GlobalInformation;
