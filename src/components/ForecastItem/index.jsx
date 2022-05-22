import React from "react";
import './styles.scss';

function ForecastItem({ data, day }) {
  return (
    <article className="forecast-item">
      <p>{data.date}</p>
      <p className="day-prediction-tag">day {day}</p>
      <div className="information">
        <h1>{data.day.avgtemp_c}</h1>
        <img src={data.day.condition.icon} alt="Weather icon" />
        <aside className="temperature">
          <p>min {data.day.mintemp_c}</p>
          <p>max {data.day.maxtemp_c}</p>
        </aside>
      </div>
    </article>
  );
}

export default ForecastItem;
