const URL_BASE = 'https://weatherapi-com.p.rapidapi.com'

export const paths = {
  REALTIME_WEATHER: `${URL_BASE}/current.json`,
  FORECAST_WEATHER: `${URL_BASE}/forecast.json`
}

export const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
    'X-RapidAPI-Key': process.env.REACT_APP_API_KEY
  }
}
