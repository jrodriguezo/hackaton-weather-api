import React from "react";
import ForecastItem from "../ForecastItem";
import "./styles.scss";

function ForecastInformation({ forecastData }) {
  return (
    <section className="forecast-information">
      <h1>3-Days forecast</h1>
      {forecastData.map((data) => {
        return <ForecastItem data={data} />;
      })}
    </section>
  );
}

export default ForecastInformation;
