import React, { useState, useEffect } from "react";
import GlobalInformation from "../../components/GlobalInformation/index.jsx";
import getRealtimeWeather from "../../services/getRealtimeWeather.js";

function Home() {
  const [weatherData, setWeatherData] = useState([]);

  useEffect(() => {
    getRealtimeWeather({ search: "Madrid" })
        .then(dataRetrieved => setWeatherData(dataRetrieved))
  }, []);

  return <>
    <GlobalInformation region={weatherData.region} country={weatherData.country} localTime={weatherData.localTime} celsiusTemperature={weatherData.celsiusTemperature}  />
  </>;
}

export default Home;
