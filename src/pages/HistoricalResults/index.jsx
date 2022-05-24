import React, { useContext } from 'react'
import WeatherContext from '../../context/WeatherContext.js'

function HistoricalResults({ params }) {
  const { forecastData } = useContext(WeatherContext)
  const { day } = params
  console.log(forecastData[day])
  return (
    <>
      <div>HistoricalResults</div>
    </>
  )
}

export default HistoricalResults
