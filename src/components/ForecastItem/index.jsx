import React from "react";
import { getDay, getWeekday } from "../../utils/date";
import "./styles.scss";

function ForecastItem({ data }) {
  return (
    <article className="forecast-item">
      <aside className="temperature">
        <p>{getWeekday(data.date)}</p>
        <p>{getDay(data.date)}</p>
      </aside>
      <p>{data.day.avgtemp_c}º</p>
      <img src={data.day.condition.icon} alt="Weather icon" />
      <aside className="temperature">
        <p className="max">max. {data.day.maxtemp_c}º</p>
        <p className="min">min. {data.day.mintemp_c}º</p>
      </aside>
    </article>
  );
}

export default ForecastItem;
