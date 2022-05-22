import React from "react";
import ForecastItem from "../ForecastItem";
import './styles.scss';

function ForecastInformation({ forecastData }) {
  return (
    <section className="forecast-information">
      <h1>Forecast for next 3 days</h1>
      {forecastData.map((data, index) => {
        return (
          <ForecastItem data={data} day={index + 1} />
        );
      })}
    </section>
  );
}

export default ForecastInformation;
