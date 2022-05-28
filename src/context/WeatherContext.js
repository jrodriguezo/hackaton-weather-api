import React, { useState } from 'react'

const Context = React.createContext({})

export function WeatherContextProvider({ children }) {
  const [forecastData, setForecastData] = useState([])
  const [thereIsAnError, setThereIsAnError] = useState(false)

  return (
    <Context.Provider value={{ forecastData, thereIsAnError, setForecastData, setThereIsAnError }}>
      {children}
    </Context.Provider>
  )
}

export default Context
