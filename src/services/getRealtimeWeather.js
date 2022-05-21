import React from "react";
import { options, paths } from "./settings";

function getRealtimeWeather({ search }) {
  if (!search) return;
  return fetch(`${paths.REALTIME_WEATHER}?q=${search}`, options)
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
}

export default getRealtimeWeather;
