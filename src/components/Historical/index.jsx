import { LeftOutlined } from '@ant-design/icons'
import React from 'react'
import { WiRain, WiSnow, WiSunrise, WiSunset } from 'weather-icons-react'
import { Link } from 'wouter'
import { getDay, getLongWeekday } from '../../utils/date'
import HistoricalItem from '../HistoricalItem'
import { BiCheck, BiX } from 'react-icons/bi'
import './styles.scss'

function Historical({ dayForecastData }) {
  const { date, day, astro } = dayForecastData
  const { sunrise, sunset } = astro
  const { daily_chance_of_rain, daily_chance_of_snow, daily_will_it_rain, daily_will_it_snow, uv, avgtemp_c } = day
  const willRain = daily_will_it_rain ? <BiCheck size={40} /> : <BiX size={40} color='#D2292D' />
  const willSnow = daily_will_it_snow ? <BiCheck size={40} /> : <BiX size={40} color='#D2292D' />

  let UVStatus
  if (uv < 3) {
    UVStatus = 'Minimal danger'
  } else if (uv < 6) {
    UVStatus = 'Low risk'
  } else if (uv < 8) {
    UVStatus = 'Moderate risk'
  } else if (uv < 11) {
    UVStatus = 'High risk '
  } else {
    UVStatus = 'Very high risk'
  }

  return (
    <>
      <section className='historical-data'>
        <Link to={`/search/${localStorage.getItem('geolocation')}`}>
          <LeftOutlined /> Go back
        </Link>
        <h1>Historical</h1>
        <div className='date'>
          <h2 className='title'>{avgtemp_c}º</h2>
          <div>
            <p>{getLongWeekday(date)}</p>
            <p>{getDay(date)}</p>
          </div>
        </div>
        <div className='resume'>
          <div className='info'>
            <WiRain size={40} />
            <p>Will it rain ?</p>
            {willRain}
            <p>{daily_chance_of_rain}% change of rain.</p>
          </div>
          <div className='info'>
            <WiSnow size={40} />
            <p>Will it snow ?</p>
            {willSnow}
            <p>{daily_chance_of_snow}% change of snow.</p>
          </div>
        </div>
        <div className='other-resume'>
          <div className='info'>
            <WiSunrise size={40} />
            <p className='title'>Sunrise</p>
            <p>{sunrise}</p>
          </div>
          <div className='info'>
            <p>UV index</p>
            <p className='title'>{UVStatus}</p>
            <p>{uv}</p>
          </div>
          <div className='info'>
            <WiSunset size={40} />
            <p className='title'>Sunset</p>
            <p>{sunset}</p>
          </div>
        </div>
        <div className='forecast-per-hour'>
          <article className='historical-item header'>
            <p>Time</p>
            <p>Temp</p>
            <p>Weather</p>
            <p>Status</p>
          </article>
          {dayForecastData.hour.map(data => (
            <HistoricalItem data={data} />
          ))}
        </div>
      </section>
    </>
  )
}

export default Historical
