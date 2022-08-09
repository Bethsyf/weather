import axios from 'axios';
import { GetStaticProps, NextPage, GetStaticPaths } from 'next';
import { apiCurrent, getData } from '../../api/getData';
import Layout from '../../components/views/Layout/Layout'
import { CityWeather, Location } from '../../interfaces/city-props';
import React from "react";
import { useRouter } from 'next/router';
import styles from '../../styles/pages/City.module.scss'

interface Props {
  city: CityWeather
  }

const CitybyNamePage: NextPage<Props> = ({ city }) => {
  
  console.log(city?.location?.name)
  const router = useRouter();
  const onClick = () => {    
    router.push(`/${city?.location?.name}`)
  }

  return (
    <div className={styles.container}>
        <div className={styles.card}>
            <h2>{city?.location.name}</h2>
            {/* <div>
        <p>{city?.location.region}</p>
        <p>{city?.location.country}</p>
        </div>
        <p>Clima: {city?.current.condition.text}</p>
            <p>Temperatura{city?.current?.temp_c}°</p>
            <p>Sensacion Termica{city?.current?.feelslike_c}°</p>
            <p>Humedad{city?.current.humidity}%</p>
            <p>Velocidad del Viento{city?.current.wind_kph}</p>
            <p>Direccion del viento{city?.current.wind_dir}</p>
            <p>Ultima Actualizacion{city?.current.last_updated}</p>
            <p>Hora local{city?.location.localtime}</p>
            <button className={styles.btn} onClick={ onClick }>Buscar Clima por Fecha</button>  
         */}
        </div>
    </div>
  )
}


export async function getServerSideProps({ req, res }) {
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  )

  return {
    props: {},
  }
}


// export async function getStaticPaths() {
//   const citya = getData(`${apiCurrent}`)
//   
//   const paths = citya.map((city) => ({
//     params: { name: city.location.name },
//   }))

//   
//   // { fallback: false } means other routes should 404.
//   return { paths, fallback: false }
// }
// 
// export async function getStaticProps({ city }) {
//  
//   const city1 = getData(`${apiCurrent}${city.location.name}`)
//  
//   return { props: { city1 } }
// }



export default CitybyNamePage