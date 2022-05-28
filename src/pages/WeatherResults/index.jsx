import React, { useState, useEffect, useContext } from 'react'
import { useLocation } from 'wouter'
import ForecastInformation from '../../components/ForecastInformation/index.jsx'
import GlobalInformation from '../../components/GlobalInformation/index.jsx'
import Loading from '../../components/Loading/index.jsx'
import WeatherContext from '../../context/WeatherContext.js'
import getForecastWeather from '../../services/getForecastWeather.js'
import getRealtimeWeather from '../../services/getRealtimeWeather.js'

function WeatherResults({ params }) {
  const [weatherData, setWeatherData] = useState([])
  const [, pushLocation] = useLocation()
  const { forecastData, setForecastData, setThereIsAnError } = useContext(WeatherContext)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const { keyword } = params
    const keywordToUse = localStorage.getItem('geolocation') || keyword
    if (keywordToUse !== '') {
      setLoading(true)
      Promise.all([getRealtimeWeather({ search: keywordToUse }), getForecastWeather({ search: keywordToUse })])
        .then(([weatherResponse, forecastResponse]) => {
          setWeatherData(weatherResponse)
          setForecastData(forecastResponse)
          setLoading(false)
        })
        .catch(err => {
          console.error(err)
          setThereIsAnError(true)
          return pushLocation('/')
        })
    }
  }, [params.keyword])

  if (loading) return <Loading />

  return (
    <>
      <GlobalInformation weatherData={weatherData} />
      <ForecastInformation forecastData={forecastData} />
    </>
  )
}

export default WeatherResults
