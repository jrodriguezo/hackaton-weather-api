import React from 'react'
import { LeftOutlined } from '@ant-design/icons'
import { Link } from 'wouter'
import './styles.scss'
import { WiHumidity, WiStrongWind, WiThermometer } from 'weather-icons-react'

function GlobalInformation({ weatherData }) {
  const { location, region, country, celsiusTemperature, currentCondition, icon, windVelocity, humidity, feelslike } =
    weatherData

  return (
    <section className='global-info'>
      <Link to='/'>
        <LeftOutlined /> Go back
      </Link>
      <h1>{location}</h1>
      <h2>{region}</h2>
      <h3>{country}</h3>
      <div className='temperature'>
        <p>{celsiusTemperature}</p>
        <span>&deg;C</span>
      </div>
      <p className='description'>Today's weather is</p>
      <div className='info-container'>
        <div className='condition'>
          <img src={icon} alt='weather icon' />
          <p className='text'>{currentCondition}</p>
        </div>
        <div className='condition'>
          <WiThermometer size={70} color='#D2292D' />
          <p className='text'>{`Feels like ${feelslike}`}</p>
        </div>
        <div className='condition'>
          <WiHumidity size={70} color='#1761B0' />
          <p className='text'>{`${humidity} %`}</p>
        </div>
        <div className='condition'>
          <WiStrongWind size={70} color='#f0f0f0' />
          <p className='text'>{`${windVelocity} kph`}</p>
        </div>
      </div>
    </section>
  )
}

export default GlobalInformation
