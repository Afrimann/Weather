type Location = {
  id: number
  name: string
  region: string
  country: string
  lat: string
  lon: string
  url: string
  timeZoneid: string
  localTime: Date
}
type CurrentInfo = {
  last_updated_epoch: number | undefined
  last_updated: Date
  temp_c: number
  temp_f: number
  is_day: number
  condition: {
    text: string
    icon: string
    code: 1000
  }
}
type Humidity = {
  humidity: 59
  cloud: 0
  air_quality: {
    co: number
    no2: number
    o3: number
    so2: number
    pm2_5: number
    pm10: number
    us_epa_index: number
    gb_defra_index: number
  }
}

export interface Weather {
  location: Location
  current: CurrentInfo
  humidity: Humidity
}
interface WeatherInfoProps {
  weather: Weather
}

import Image from 'next/image'
import styles from '../page.module.css'

const WeatherInfo = ({ weather }: WeatherInfoProps) => {
  const iconUrl = weather.current.condition.icon.startsWith('//')
    ? `https:${weather.current.condition.icon}`
    : weather.current.condition.icon

  return (
    <div key={weather.location.id} className={styles.weatherInfo}>
      <div className={styles.textInfo}>
        <h1 className={styles.text}>Weather Info</h1>
        <h2 className={styles.text}>City: {weather.location?.name}</h2>
        <p className={styles.text}>Country: {weather.location?.country}</p>
        <p className={styles.text}>Latitude: {weather.location?.lat}</p>
        <p className={styles.text}>Longitude: {weather.location?.lon}</p>
        <p className={styles.text}>
          Current Temperature: {weather.current?.temp_c}°C |{' '}
          {weather.current?.temp_f}°F
        </p>
      </div>
      <div className={styles.imageInfo}>
        {iconUrl && (
          <Image
            src={iconUrl}
            alt='Weather condition icon'
            width={200}
            height={200}
            objectFit='contain'
          />
        )}
      </div>
    </div>
  )
}

export default WeatherInfo
