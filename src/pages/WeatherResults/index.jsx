import React, { useState, useEffect, useContext } from 'react'
import ForecastInformation from '../../components/ForecastInformation/index.jsx'
import GlobalInformation from '../../components/GlobalInformation/index.jsx'
import Loading from '../../components/Loading/index.jsx'
import WeatherContext from '../../context/WeatherContext.js'
import getForecastWeather from '../../services/getForecastWeather.js'
import getRealtimeWeather from '../../services/getRealtimeWeather.js'

function WeatherResults({ params }) {
  const [weatherData, setWeatherData] = useState([])
  const { forecastData, setForecastData } = useContext(WeatherContext)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const { keyword } = params
    const keywordToUse = localStorage.getItem('geolocation') || keyword
    if (keywordToUse !== '') {
      setLoading(true)
      getRealtimeWeather({ search: keywordToUse }).then(dataRetrieved => {
        setWeatherData(dataRetrieved)
      })
      getForecastWeather({ search: keywordToUse }).then(dataRetrieved => {
        setForecastData(dataRetrieved)
        setLoading(false)
      })
    }
  }, [params])

  if (loading) return <Loading />

  return (
    <>
      <GlobalInformation weatherData={weatherData} />
      <ForecastInformation forecastData={forecastData} />
    </>
  )
}

export default WeatherResults
