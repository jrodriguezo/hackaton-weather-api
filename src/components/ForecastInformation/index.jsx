import React from 'react'
import ForecastItem from '../ForecastItem'
import './styles.scss'

function ForecastInformation({ forecastData }) {
  return (
    <section className='forecast-information'>
      <h1>3-Days forecast</h1>
      {forecastData.map((data, index) => {
        return <ForecastItem data={data} day={index} />
      })}
    </section>
  )
}

export default ForecastInformation
