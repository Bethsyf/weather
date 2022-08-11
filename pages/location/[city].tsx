import axios from 'axios';
import { GetStaticProps, NextPage, GetStaticPaths } from 'next';
import { apiCurrent, getData } from '../../api/getData';
import Layout from '../../components/views/Layout/Layout'
import { CityWeather, Location } from '../../interfaces/city-props';
import React from "react";
import { useRouter } from 'next/router';
import styles from '../../styles/pages/City.module.scss'


interface Props {
  data: CityWeather
  }

const CitybyNamePage: NextPage<Props> = ({ data }) => {
  
  console.log(data?.location?.name)
  const router = useRouter();
  const onClick = () => {    
    router.push(`/${data?.location?.name}`)
  }

  return (
    <div className={styles.container}>
        <div className={styles.card}>
            <h2>{data?.location.name}</h2>
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

// export async function getServerSideProps(city:CityWeather) {
  
 
//   const data = await getData(`${apiCurrent}`)
  


//   return { props: { data } }
// }

// export const getStaticPaths: GetStaticPaths = async (ctx) => {

//   const {data} = await getData<CityWeather>(`${apiCurrent}&q={Medellin}`)
//   const cityName: string = data?.location.name;


//   return {
//     paths: cityName,
//     // fallback: false
//     fallback: 'blocking'
//   }
// }


export default CitybyNamePage