import React from "react";
import { options, paths } from "./settings";

function getForecastWeather({ search }) {
  return fetch(`${paths.FORECAST_WEATHER}?q=${search}&days=3`, options)
    .then((response) => response.json())
    .then(({forecast}) => {
      const { forecastday } = forecast
      return forecastday
    })
    .catch((err) => console.error(err));
}

export default getForecastWeather;
