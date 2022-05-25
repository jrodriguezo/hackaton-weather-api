import React from 'react'
import { getHour } from '../../utils/date'
import './styles.scss'

function HistoricalItem({data}) {
    const {time, temp_c, condition} = data
  
    return (
    <article className='historical-item'>
        <p>{getHour(time)}</p>
        <p>{temp_c}º</p>
        <img src={condition.icon} alt='Weather icon' />
        <p>{condition.text}</p>
    </article>
  )
}

export default HistoricalItem