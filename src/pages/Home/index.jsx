import React from 'react'
import getRealtimeWeather from '../../services/getRealtimeWeather.js'

function Home() {
    getRealtimeWeather({search: 'Madrid'})
  return (
    <div>Home</div>
  )
}

export default Home