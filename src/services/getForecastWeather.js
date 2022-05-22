import React from "react";
import { options, paths } from "./settings";

function getForecastWeather({ search }) {
  fetch(`${paths.FORECAST_WEATHER}?q=${search}&days=3`, options)
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
}

export default getForecastWeather;
