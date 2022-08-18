import { NextPage } from "next";
import { apiCurrent, getData } from "../../api/getData";
import { CityWeather, Location } from "../../interfaces/city-props";
import React, { ButtonHTMLAttributes, ChangeEvent } from "react";
import { useRouter } from "next/router";
import styles from "../../styles/pages/City.module.scss";
import Button from "../../components/controls/Button/Button";
import { useState } from "react";
import Navbar from "../../components/views/Navbar/Navbar";
import Footer from "../../components/views/Footer/Footer";


interface Props {
  data: CityWeather;
  goHome: ButtonHTMLAttributes<HTMLButtonElement>["onClick"];
}


const CitybyNamePage: NextPage<Props> = ({ data}) => {
  const [date, setDate] = useState('');

  const router = useRouter();
  const onClick = () => {
    router.push(`/location/${data?.location.name}/${date}`);
  };
  const goHome = () => {
    router.push("/");
  };

  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.card}>
          <h2>{data?.location.name}</h2>
          <div>
            <p>{data?.location.region}</p>
            <p>{data?.location.country}</p>
          </div>
          <p>Clima: {data?.current.condition.text}</p>
          <p>Temperatura: {data?.current?.temp_c}°</p>
          <p>Sensación Térmica: {data?.current?.feelslike_c}°</p>
          <p>Humedad: {data?.current.humidity}%</p>
          <p>Velocidad del Viento: {data?.current.wind_kph}Kh</p>
          {/* <p>Direccion del viento: {data?.current.wind_dir}</p>*/}
          <p>Última Actualización: {data?.current.last_updated}</p>

          <div className={styles.container2}>
            <p>Selecciona una fecha ve el clima de ese día </p>
            <input
              className={styles.inputf}
              type="date"              
              onChange={(e: React.FormEvent<HTMLInputElement>) => setDate(e.currentTarget.value)}
            />
            <Button
              type="btn2"
              text={`Ver clima de ${data?.location?.name} por fecha`}
              onClickFn={onClick} stylesProps={""}/>
          </div>
          <Button type="btn" text="Ir al Inicio" onClickFn={goHome} stylesProps={""} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export async function getServerSideProps(ctx: { query: { city: string; }; }) {
  const data = await getData(`${apiCurrent}${ctx.query.city}`);

  return { props: { data } };
}

export default CitybyNamePage;
