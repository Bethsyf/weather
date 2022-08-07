import Link from 'next/link'
import React from 'react'
import { CityWeather } from '../../../interfaces/city-props'
import styles from './Card.module.scss'

interface Props{
    city: CityWeather    
}

const Card = ({city}: Props) => {
  return (
   <>
    <div className={styles.card} key={city.location.name}>
        <h1>{city.location.name}</h1>
        <p>{city.location.region}</p>
        <p>{city.location.country}</p>
        <p>{city.current?.condition.text}</p>
        {/* <Image
          src={`http://cdn.weatherapi.com/weather/64x64/night/116.png`}
          alt={city.current?.condition.text}
          width={100}
          height={100}          
        /> */}
        
        <p>temperatura: {city.current?.temp_c}°C</p> 
        <p>Sensacion termica: {city.current?.feelslike_c}°C </p>    
        <div>
          <p>Humedad: {city.current?.humidity}</p>
          <p>Velocidad del viento: {city.current?.wind_kph} kph</p>
          <button><Link href='/{city}/date'><a className={ styles.link }>Buscar por fechas</a></Link></button>  
        </div>
      </div>
   </>
  )
}

export default Card