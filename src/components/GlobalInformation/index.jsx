import React from "react";
import { LeftOutlined } from '@ant-design/icons';
import { Link } from "wouter";
import "./styles.scss";

function GlobalInformation({ weatherData }) {
  const { location, region, country, celsiusTemperature, currentCondition, icon } =
    weatherData;
    
  return (
    <section className="global-info">
      <Link to='/'>
        <LeftOutlined /> Go back
      </Link>
      <h1>{location}</h1>
      <h2>{region}</h2>
      <h3>{country}</h3>
      <div className="temperature">
        <p>{celsiusTemperature}</p>
        <span>&deg;C</span>
      </div>
      <div className="condition">
        <p className="description">Today's weather is</p>
        <img src={icon} alt="weather icon" />
        <p className="text">{currentCondition}</p>
      </div>
    </section>
  );
}

export default GlobalInformation;
