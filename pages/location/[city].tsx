import axios from 'axios';
import { GetStaticProps, NextPage, GetStaticPaths } from 'next';
import { apiCurrent, getData } from '../../api/getData';
import Layout from '../../components/views/Layout/Layout'
import { CityWeather, Location } from '../../interfaces/city-props';
import React from "react";

interface Props {
    location: Location
  }

const CitybyNamePage: NextPage<Props> = ({ location }) => {
  
  console.log(location?.name)
  return (
    <div>
        

        <div>hola</div>
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

// export const getStaticPaths: GetStaticPaths = async (ctx) => {
//   const places = [
//     {
//       name: "Bogota",
      
//     },
//     // {
//     //   name: "Caracas",
      
//     // },
//     // {
//     //   name: "New York",
      
//     // },
//   ];
//   const data = getData<CityWeather>(`${apiCurrent}'Medellin'
//   }`)
  
// return{
//   paths: data
//     ,
   
//     fallback: 'blocking'
// }

//   // return {
//   //   paths: 
//   //   ,
//   //   // fallback: false
//   //   fallback: 'blocking'
//   // }
// }

export const getStaticPaths: GetStaticPaths = async (ctx) => {
const cities =  await axios.get(`${apiCurrent}`)

  return {
    paths: cities.( name => ({
      params: { name }
    })),
    //fallback: false
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  
  const { nameCity } = params as { nameCity: string };

  const ciudad = getData(`${apiCurrent}${ nameCity }`);

  if ( !ciudad ) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  return {
    props: {
      ciudad
    }
  }
}


export default CitybyNamePage