import moment from "moment";
import { NextPage } from "next";
import { useRouter } from "next/router";
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

  const goBack = () => {
    router.push(`/location/${dataResult?.location.name}`);
  };

  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.card}>
          <h1>Clima de {dataResult?.location.name}</h1>
          <p style={{ color: "blue" }}>
            para el {dataResult?.forecast?.forecastday[0].date}
          </p>
          <p className={styles.color1}>{dataResult?.forecast?.forecastday[0].day.condition.text}</p>
          <p>
            Temperatura: <b className={styles.color2}>{dataResult?.forecast?.forecastday[0].day.avgtemp_c}°</b>
          </p>
          <p>
            Temperatura máxima: <b className={styles.color2}>{dataResult.forecast?.forecastday[0].day.maxtemp_c}°</b>
          </p>
          <p>
            Temperatura mínima: <b className={styles.color2}>{dataResult.forecast?.forecastday[0].day.mintemp_c}°</b>
          </p>
          <p>Humedad: <b className={styles.color2}>{dataResult.forecast?.forecastday[0].day.avghumidity}%</b></p>
          <p>
            Velocidad del Viento: <b className={styles.color2}>{dataResult.forecast?.forecastday[0].day.avgvis_km}Km/h</b>
          </p>
          <div className={styles.container2}>
            <Button
              type="btn"
              text="volver"
              onClickFn={goBack}
              stylesProps={""}
            />
            <Button
              type="btn"
              text="Inicio"
              onClickFn={goHome}
              stylesProps={""}
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export async function getServerSideProps(ctx: {
  query: { city: string; date: number };
}) {
  const dataCurrent = await getData(`${apiCurrent}${ctx.query.city}`);
  const dateToday = dataCurrent?.location.localtime;
  const dateSearch = ctx.query.date;

  const days = moment(dateSearch).diff(moment(dateToday), "days");

  const validationData = () => {
    if (days > 0 && days < 14) {
      return `${apiForecast}${ctx.query.city}&dt=${ctx.query.date}`; //proximos 14 dias
    } 
    if (days > 14) {
      return `${apiFuture}${ctx.query.city}&dt=${ctx.query.date}`; // de 14 a 300 dias
    } 
      return `${apiHistory}${ctx.query.city}&dt=${ctx.query.date}`; // dias pasados 01012010
    };

  const dataResult = await getData(validationData());

  return {
    props: {
      dataResult,
    },
  };
}

export default DatePage;
