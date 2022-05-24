import { RightOutlined } from "@ant-design/icons";
import React from "react";
import { Link } from "wouter";
import { getDay, getWeekday } from "../../utils/date";
import "./styles.scss";

function ForecastItem({ data }) {
  return (
    <Link to='/'>
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
        <RightOutlined />
      </article>
    </Link>
  );
}

export default ForecastItem;
