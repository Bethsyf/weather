import axios from 'axios';
import { GetStaticProps, NextPage, GetStaticPaths } from 'next';
import { apiCurrent, getData } from '../../api/getData';
import Layout from '../../components/views/Layout/Layout'
import { CityWeather, Location } from '../../interfaces/city-props';
import React from "react";
import { useRouter } from 'next/router';
import styles from '../../styles/pages/City.module.scss'
import Button from '../../components/controls/Button/Button';



interface Props {
  data: CityWeather
  }

const CitybyNamePage: NextPage<Props> = ({ data }) => {
  
  console.log(data?.location?.name)
  const router = useRouter();
  const onClick = () => {    
    router.push(`/${data?.location?.name}/date`)
  }

  return (
    <div className={styles.container}>
        <div className={styles.card}>
            <h2>{data?.location.name}</h2>
            <div>
        <p>{data?.location.region}</p>
        <p>{data?.location.country}</p>
        </div>
        <p>Clima: {data?.current.condition.text}</p>
            <p>Temperatura: {data?.current?.temp_c}°</p>
            <p>Sensacion Termica: {data?.current?.feelslike_c}°</p>
            <p>Humedad: {data?.current.humidity}%</p>
            <p>Velocidad del Viento: {data?.current.wind_kph}</p>
            <p>Direccion del viento: {data?.current.wind_dir}</p>
            <p>Ultima Actualizacion: {data?.current.last_updated}</p>
            <p>Hora local: {data?.location.localtime}</p>
            <Button
              type="btn2"
              text="Ver clima"
              onClickFn={onClick}
            />  
        
        </div>
    </div>
  )
}

export async function getServerSideProps(ctx) {

  const data = await getData(`${apiCurrent}${ctx.query.city}`)
  


  return { props: { data } }
}

// export const getStaticPaths: GetStaticPaths = async (ctx) => {

//   const {data} = await getData<CityWeather>(`${apiCurrent}&q={Medellin}`)
//   const cityName: string = data?.location.name;


//   return {
//     paths: cityName,
//     // fallback: false
//     fallback: 'blocking'
//   }
// }

// const getStaticProps: GetStaticProps = 


// export default CitybyNamePage = async (ctx) => {
//   const data = getData(`${apiCurrent}'medellin'`)
// return {
//   data: data
// }

// } 

export default CitybyNamePage;