import { NextPage } from 'next'
import React from 'react'
import Layout from '../../components/views/Layout/Layout'
import { CityWeather } from '../../interfaces/city-props'
interface Props {
    city: CityWeather
  }

const CitybyNamePage: NextPage<Props> = ({ city }) => {
  return (
    <div>
        <Layout title='WeatherCity' />
        <ul>
            <li>{city.location.name}</li>
            <li>Temperatura{city.current?.temp_c}°</li>
            <li>Sensacion Termica{city.current?.feelslike_c}°</li>
            <li>Humedad{city.current.humidity}%</li>
            <li>Velocidad del Viento{city.current.wind_kph}</li>
        </ul>
    </div>
  )
}

export default CitybyNamePage