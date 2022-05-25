import React, { useContext } from 'react'
import Historical from '../../components/Historical/index.jsx'
import WeatherContext from '../../context/WeatherContext.js'
function HistoricalResults({ params }) {
  const { forecastData } = useContext(WeatherContext)
  const { day } = params
  return (
    <>
      <Historical dayForecastData={forecastData[day]} />
    </>
  )
}

export default HistoricalResults
