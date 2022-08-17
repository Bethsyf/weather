import { NextPage } from "next";
import { Router, useRouter } from "next/router";
import {
  apiCurrent,
  apiForecast,
  apiFuture,
  apiHistory,
  getData,
} from "../../../api/getData";
import Button from "../../../components/controls/Button/Button";
import Footer from "../../../components/views/Footer/Footer";
import Navbar from "../../../components/views/Navbar/Navbar";
import { CityWeather } from "../../../interfaces/city-props";
import styles from "../../../styles/pages/Date.module.scss";

interface Props {
  dataResult: CityWeather;
}

const DatePage: NextPage<Props> = ({ dataResult }) => {
  const router = useRouter();
  const goHome = () => {
    router.push("/");
  };

  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.card}>
          <h2>Clima de {dataResult?.location.name}</h2>
          <p style={{ color: "blue" }}>
            para el {dataResult?.forecast?.forecastday[0].date}{" "}
          </p>
          <p>{dataResult?.forecast?.forecastday[0].day.condition.text}</p>
          <p>
            Temperatura: {dataResult?.forecast?.forecastday[0].day.avgtemp_c}°
          </p>
          <p>
            Temperatura maxima:{" "}
            {dataResult.forecast?.forecastday[0].day.maxtemp_c}°
          </p>
          <p>
            Temperatura minima:{" "}
            {dataResult.forecast?.forecastday[0].day.mintemp_c}°
          </p>
          <p>Humedad: {dataResult.forecast?.forecastday[0].day.avghumidity}%</p>
          <p>
            Velocidad del Viento:{" "}
            {dataResult.forecast?.forecastday[0].day.avgvis_km}Kh
          </p>
          <Button type="btn" text="Ir al Inicio" onClickFn={goHome} stylesProps={""} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export async function getServerSideProps(ctx: { query: { city: string; date: number; }; }) {
  const dataCurrent = await getData(`${apiCurrent}${ctx.query.city}`);
  const dataHistory = await getData(
    `${apiHistory}${ctx.query.city}&dt=${ctx.query.date}`); // dias pasados 01012010
  const dataForecast = await getData(
    `${apiForecast}${ctx.query.city}&dt=${ctx.query.date}`); //proximos 14 dias
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
  //     return dataForecast
  //   }
  //  }

   

  return {
    props: {
      dataResult,
    },
  };
}

export default DatePage;
