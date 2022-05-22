import React, { useState, useEffect } from "react";
import GlobalInformation from "../../components/GlobalInformation/index.jsx";
import getForecastWeather from "../../services/getForecastWeather.js";
import getRealtimeWeather from "../../services/getRealtimeWeather.js";

function Home() {
  const [weatherData, setWeatherData] = useState([]);
  const [location, newLocation] = useState('Texas')

  useEffect(() => {
    //getForecastWeather({ search: "Madrid" });
    getRealtimeWeather({ search: location }).then((dataRetrieved) =>
      setWeatherData(dataRetrieved)
    );
  }, []);

  return (
    <>
      <GlobalInformation weatherData={weatherData} />
    </>
  );
}

export default Home;
