export async function reverseGeocode(lat, lon) {
  const res = await fetch(
    `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`,
    {
      headers: {
        'User-Agent': 'weather-pwa-app', // Một user-agent hợp lệ
      },
    }
  )

  if (!res.ok) throw new Error('Không thể lấy địa chỉ từ tọa độ')

  const data = await res.json()
  return data.address 
}
