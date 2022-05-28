import { Route, Switch } from 'wouter'
import Home from './pages/Home'
import WeatherResults from './pages/WeatherResults'
import HistoricalResults from './pages/HistoricalResults'
import { WeatherContextProvider } from './context/WeatherContext'
import './App.css'
import ErrorPage from './pages/ErrorPage'

function App() {
  return (
    <div className='App'>
      <WeatherContextProvider>
        <Switch>
          <Route component={Home} path='/' />
          <Route component={WeatherResults} path='/search/:keyword' />
          <Route component={HistoricalResults} path='/historical/:day' />
          <Route component={ErrorPage} path="/:rest*" />
        </Switch>
      </WeatherContextProvider>
    </div>
  )
}

export default App
