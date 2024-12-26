'use client'
import styles from './page.module.css'
import React, { useEffect, useState } from 'react'
import WeatherInfo from './components/WeatherInfo'
import type { Weather } from './components/WeatherInfo'

const WeatherApp = () => {
  const [weather, setWeather] = useState<Weather | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string>('')
  const [searchInput, setSearchInput] = useState<string>('London')

  const url = `
http://api.weatherapi.com/v1/current.json?key=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}&q=${searchInput}&aqi=yes`

  const fetchNewWeather = async () => {
    try {
      setLoading(true)
      setError('')
      const response = await fetch(url)

      if (!response.ok) {
        if (response.status === 404) {
          setError('City not found. Please try again.')
        } else if (response.status === 400) {
          setError('City does not exist. Search a valid city, Thank you.')
        } else {
          setError('Failed to fetch weather. Please try again later.')
        }
        setWeather(null)
        return
      }

      const result = await response.json()
      setWeather(result)
    } catch (error) {
      console.error('Error fetching weather:', error)
      setError('Network error. Please check your connection.')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchNewWeather()
  }, []) // Only fetch once on component mount

  return (
    <div className={styles.container}>
      <h1 className={styles.headline}>Know the weather of places around you</h1>
      <div className={styles.weather}>
        <div className={styles.search}>
          <input
            type='text'
            placeholder='Search Here...'
            value={searchInput}
            onChange={e => setSearchInput(e.target.value)}
          />
          <button onClick={fetchNewWeather} disabled={loading}>
            {loading ? 'Loading...' : 'Get Weather'}
          </button>
        </div>
        {error && <p className={styles.error}>{error}</p>}
        {weather && <WeatherInfo weather={weather} />}
      </div>
    </div>
  )
}

export default WeatherApp
