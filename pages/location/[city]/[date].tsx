import { NextPage } from "next";
import { apiCurrent, apiForecast, apiFuture, apiHistory, getData } from "../../../api/getData";
import Navbar from "../../../components/views/Navbar/Navbar";
import { CityWeather } from '../../../interfaces/city-props';
import styles from '../../../styles/pages/Date.module.scss'

interface Props {
  dataResult: CityWeather}

  const datePage: NextPage<Props> = ({ dataResult }) => {
  console.log(dataResult)

  return (
  
    <>   
    <Navbar/>
    <div className={styles.container}>
        <div className={styles.card}>
      <h2>Clima de {dataResult?.location.name}</h2> 
      <p style={{color: 'blue'}}>para el {dataResult?.forecast?.forecastday[0].date} </p> 
      <p>{dataResult?.forecast?.forecastday[0].day.condition.text}</p>
      <p>Temperatura: {dataResult?.forecast?.forecastday[0].day.avgtemp_c}°</p>
            <p>Temperatura maxima: {dataResult.forecast?.forecastday[0].day.maxtemp_c}°</p>
            <p>Temperatura minima: {dataResult.forecast?.forecastday[0].day.mintemp_c}°</p>
            <p>Humedad: {dataResult.forecast?.forecastday[0].day.avghumidity}%</p>
            <p>Velocidad del Viento: {dataResult.forecast?.forecastday[0].day.avgvis_km}Kh</p>            
      </div>  
      </div>   
    </>
  )
}

export async function getServerSideProps(ctx) {
  const dataCurrent = await getData(`${apiCurrent}${ctx.query.city}`)
  const dataHistory = await getData(`${apiHistory}${ctx.query.city}&dt=${ctx.query.date}`); // dias pasados 01012010
  // const dataForecast = await getData(`${apiForecast}${ctx.query.city}&dt=${ctx.query.date}`); //proximos 14 dias
  // const dataFuture = await getData(`${apiFuture}${ctx.query.city}&dt=${ctx.query.date}`); // de 14 a 300 dias
  console.log(dataCurrent?.location.localtime);

  const dateToday = dataCurrent?.location.localtime;

  const dateSearch = ctx.query.date;

  const dataResult = dataHistory;
  
//  const dataResult = ()=> {
//   if(dateSearch < dateToday){
//     return dataHistory
//   }
//   else if(dateSearch > dateToday ){
//     return dataFuture
//   }
//  }
  
  

  

  
  


  return { props: { 
    dataResult    
   },
  };
};

export default datePage;