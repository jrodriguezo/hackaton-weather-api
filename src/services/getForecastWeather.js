import React, { useContext } from 'react'
import WeatherContext from '../context/WeatherContext'
import { options, paths } from './settings'

function getForecastWeather({ search }) {
  return fetch(`${paths.FORECAST_WEATHER}?q=${search}&days=3`, options)
    .then(response => response.json())
    .then(({ forecast }) => {
      const { forecastday } = forecast
      return forecastday
    })
    .catch(err => {
      console.error(err)
      throw new Error('There was an error retrieving forecast data');
    })
}

export default getForecastWeather
