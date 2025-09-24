import React, { useEffect, useState } from 'react'
import { getWeatherByCoords, getForecastByCoords } from './api/weather'
import { reverseGeocode } from './api/location'
import CurrentWeather from './components/CurrentWeather'
import Forecast from './components/Forecast'
export default function App() {
  const [weather, setWeather] = useState(null)
  const [forecast, setForecast] = useState(null)
  const [location, setLocation] = useState(null)
  const [error, setError] = useState('')

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      async position => {
        try {
          const { latitude, longitude } = position.coords

          // Gọi API lấy thời tiết và địa chỉ cùng lúc
          const [weatherData, forecastData, address] = await Promise.all([
            getWeatherByCoords(latitude, longitude),
            getForecastByCoords(latitude, longitude),
            reverseGeocode(latitude, longitude)
          ])

          setWeather(weatherData)
          setForecast(forecastData)
          setLocation(address)
        } catch (err) {
          setError(err.message)
        }
      },
      err => {
        setError('Không thể lấy vị trí: ' + err.message)
      }
    )
  }, [])

  return (
    <div className="app-container">
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h1 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>🌤 Ứng dụng Dự báo Thời tiết</h1>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <CurrentWeather data={weather} address={location} />
      </div>
      <Forecast data={forecast} />
    </div>
  )
}
