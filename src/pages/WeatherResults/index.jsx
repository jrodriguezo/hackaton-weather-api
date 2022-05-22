import React, { useState, useEffect } from "react";
import ForecastInformation from "../../components/ForecastInformation/index.jsx";
import GlobalInformation from "../../components/GlobalInformation/index.jsx";
import getForecastWeather from "../../services/getForecastWeather.js";
import getRealtimeWeather from "../../services/getRealtimeWeather.js";

function WeatherResults({ params }) {
  const [weatherData, setWeatherData] = useState([]);
  const [forecastData, setForecastData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const {keyword} = params
    if (keyword !== "") {
      setLoading(true);
      getRealtimeWeather({ search: keyword }).then((dataRetrieved) => {
        setWeatherData(dataRetrieved);
      });
      getForecastWeather({ search: keyword }).then((dataRetrieved) => {
        setForecastData(dataRetrieved);
        console.log(dataRetrieved)
        setLoading(false);
      })
      
    }
  }, [params]);

  if (loading) return <h1>Loading your data...</h1>;

  return (
    <>
      <GlobalInformation weatherData={weatherData} />
      <ForecastInformation forecastData={forecastData} />
    </>
  );
}

export default WeatherResults;
