const API_KEY = import.meta.env.VITE_WEATHER_API_KEY
const BASE_URL = 'https://api.openweathermap.org/data/2.5'

export async function getWeatherByCoords(lat, lon) {
  const res = await fetch(`${BASE_URL}/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=vi`)
  if (!res.ok) throw new Error('Lỗi khi lấy thời tiết hiện tại')
  return res.json()
}

export async function getForecastByCoords(lat, lon) {
  const res = await fetch(`${BASE_URL}/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=vi`)
  if (!res.ok) throw new Error('Lỗi khi lấy dự báo')
  return res.json()
}
