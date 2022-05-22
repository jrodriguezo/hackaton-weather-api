import React from "react";
import "./styles.scss";

function GlobalInformation({ weatherData }) {
  const { region, country, celsiusTemperature, currentCondition, icon } =
    weatherData;
  return (
    <section className="global-info">
      <h1>{region}</h1>
      <h2>{country}</h2>
      <div className="temperature">
        <p>{celsiusTemperature}</p>
        <span>&deg;C</span>
      </div>
      <p>Today's weather is</p>
      <div className="condition">
        <img src={icon} alt="weather icon" />
        <p className="text">{currentCondition}</p>
      </div>
    </section>
  );
}

export default GlobalInformation;
