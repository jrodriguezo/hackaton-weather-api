import React, { useState, useEffect } from "react";
import GlobalInformation from "../../components/GlobalInformation/index.jsx";
import getRealtimeWeather from "../../services/getRealtimeWeather.js";

function WeatherResults({ params }) {
  const [weatherData, setWeatherData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (params.keyword !== "") {
      setLoading(true);
      getRealtimeWeather({ search: params.keyword }).then((dataRetrieved) => {
        setWeatherData(dataRetrieved);
        setLoading(false);
      });
    }
  }, [params.keyword]);

  if (loading) return <h1>Loading your data...</h1>;

  return (
    <>
      <GlobalInformation weatherData={weatherData} />
    </>
  );
}

export default WeatherResults;
