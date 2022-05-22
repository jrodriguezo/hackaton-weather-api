import React from "react";
import { options, paths } from "./settings";

function getRealtimeWeather({ search }) {
  if (!search) return;
  return fetch(`${paths.REALTIME_WEATHER}?q=${search}`, options)
    .then((response) => response.json())
    .then(({ location, current }) => {
      const { region, country, localtime } = location;
      const { temp_c, wind_kph, wind_dir, is_day, humidity, condition } =
        current;
      const { text, icon } = condition;
      return {
        region,
        country,
        localTime: localtime,
        celsiusTemperature: temp_c,
        windVelocity: wind_kph,
        windDirection: wind_dir,
        humidity,
        isDay: is_day,
        currentCondition: text,
        icon,
      };
    })
    .catch((err) => console.error(err));
}

export default getRealtimeWeather;