import axios from 'axios';
import { GetStaticProps, NextPage, GetStaticPaths } from 'next';
import { apiCurrent, getData } from '../../api/getData';
import Layout from '../../components/views/Layout/Layout'
import { CityWeather, Location } from '../../interfaces/city-props';
import React from "react";

interface Props {
    city: CityWeather
  }

const CitybyNamePage: NextPage<Props> = ({ city }) => {
  
  console.log(city?.location?.name)
  return (
    <div>
        

        <div>{city?.location?.name}</div>
        {/* <ul>
            <li>{city.location.name}</li>
            <li>Temperatura{city.current?.temp_c}°</li>
            <li>Sensacion Termica{city.current?.feelslike_c}°</li>
            <li>Humedad{city.current.humidity}%</li>
            <li>Velocidad del Viento{city.current.wind_kph}</li>
        </ul> */}
    </div>
  )
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