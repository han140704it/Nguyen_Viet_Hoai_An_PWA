import React from 'react'
import "./style.css"
export default function Forecast({ data }) {
  if (!data) return <p>Đang tải dự báo...</p>

  return (
    <div className="forecast-section">
      <h2>Dự báo trong vài ngày tới</h2>
      <div className="forecast-list">
        {data.list.slice(0, 6).map((item, index) => (
          <div key={index} className="forecast-item">
            <p><strong>{item.dt_txt.split(' ')[0]}</strong></p>
            <img src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} alt="icon" />
            <p>{item.main.temp}°C</p>
            <p>{item.weather[0].description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
