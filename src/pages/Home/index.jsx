import React, { useContext } from 'react'
import { useLocation } from 'wouter'
import { Input, Button, message, Alert } from 'antd'
import useGeolocation from 'react-hook-geolocation'
import SocialMedia from '../../components/SocialMedia/index.jsx'
import WeatherContext from '../../context/WeatherContext.js'
import 'antd/dist/antd.css'
import './styles.scss'

function Home() {
  const SECONDS_SHOWING_ERROR = 4
  const geolocation = useGeolocation()
  const [, pushLocation] = useLocation()
  const { thereIsAnError, setThereIsAnError } = useContext(WeatherContext)
  const { Search } = Input

  const onSearch = keyword => {
    setThereIsAnError(false)
    if (keyword !== '') {
      localStorage.setItem('geolocation', keyword)
      pushLocation(`/search/${keyword}`)
    }
  }

  if (thereIsAnError) {
    setTimeout(() => {
      setThereIsAnError(false)
    }, [SECONDS_SHOWING_ERROR * 1000])
  }

  const handleClick = () => {
    if (!geolocation.error && geolocation.latitude !== null && geolocation.longitude !== null) {
      const coordinatesFromGeolocation = `${geolocation.latitude},${geolocation.longitude}`
      localStorage.setItem('geolocation', coordinatesFromGeolocation)
      return pushLocation(`/search/${coordinatesFromGeolocation}`)
    }
    if (geolocation.error) {
      return alert(`To use this feature, you must enable the permissions of browser's localization.`)
    }
    return alert(`Something was wrong!`)
  }

  return (
    <section className='home-page'>
      <h1>
        Global <br /> Weather
      </h1>
      <h2>Hi.</h2>
      <h2>How'd you like to check the weather?</h2>
      <div className='searcher-buttons'>
        <Search placeholder='Search for a town or city...' onSearch={onSearch} size='large' enterButton />
        {thereIsAnError && <Alert type='error' message='Oops! There was an error...' banner />}
        <Button type='text' onClick={handleClick}>
          CURRENT LOCATION
        </Button>
      </div>
      <SocialMedia />
    </section>
  )
}

export default Home
