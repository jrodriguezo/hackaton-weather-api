import React from 'react'
import ReactAnimatedWeather from 'react-animated-weather'
import './styles.scss'

function Loading() {
  return (
    <section className='loader'>
      <ReactAnimatedWeather icon={'WIND'} color={'white'} />
      <h1>Loading...</h1>
    </section>
  )
}

export default Loading
