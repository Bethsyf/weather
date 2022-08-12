import { NextPage } from "next";
import { useRouter } from "next/router";
import { apiForecast, apiFuture, apiHistory, getData } from "../../../api/getData";
import { CityWeather } from "../../../interfaces/city-props";

interface Props {
  dataHistory: CityWeather}

  const datePage: NextPage<Props> = ({ dataHistory }) => {
  

  return (
  
    <>
      
      <p>{dataHistory?.location.name}</p>
      {/* <div >
       <input        
            type='date'          
            name="date"           
                     
          />
          <button   >
          Ver el Clima de ese día
        </button>
        </div> */}
    </>
  )
}

export async function getServerSideProps(ctx) {

  console.log(ctx)

  const dataHistory = await getData(`${apiHistory}${ctx.query.city}&dt=2020-08-05`); // dias pasados 01012010

  const dataForecast = await getData(`${apiForecast}${ctx.query.city}&dt=2020-08-05`); //proximos 14 dias

  const dataFuture = await getData(`${apiFuture}${ctx.query.city}&dt=2020-08-05`); // de 14 a 300 dias
  


  return { props: { dataHistory } }
}

export default datePage;