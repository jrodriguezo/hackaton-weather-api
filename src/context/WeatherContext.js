import React, { useState } from 'react'

const Context = React.createContext({})

export function WeatherContextProvider({ children }) {
  const [forecastData, setForecastData] = useState([])

  return <Context.Provider value={{ forecastData, setForecastData }}>{children}</Context.Provider>
}

export default Context
