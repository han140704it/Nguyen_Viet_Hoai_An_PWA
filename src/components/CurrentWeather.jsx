import React from 'react'
import './style.css'

export default function CurrentWeather({ data, address }) {
  if (!data) return <p>Đang tải thời tiết hiện tại...</p>

  const getLocationName = () => {
    if (!address) return ''
    const { road, suburb, village, town, city, state } = address
    const parts = [road, suburb, village || town || city, state].filter(Boolean)
    return parts.join(', ')
  }

  return (
    <div className="weather-card">
      <h2>Thời tiết hiện tại ở {getLocationName() || data.name}</h2>
      <p>Nhiệt độ: {data.main.temp}°C</p>
      <p>Thời tiết: {data.weather[0].description}</p>
      <img
        src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
        alt="icon thời tiết"
      />
    </div>
  )
}
