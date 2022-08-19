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
      <div className={styles.container1}>
        <div className={styles.card}>
          <div className={styles.container2}>
          <h1>{data?.location.name}</h1>          
            <p>{data?.location.region}</p>
            <p>{data?.location.country}</p> 
            </div>  
            <div>      
          <p className={styles.color1}>{data?.current.condition.text}</p>
          </div> 
          <div className={styles.container2}>
          <p>Temperatura: <b className={styles.color2}>{data?.current?.temp_c}°</b></p>
          <p>Sensación Térmica: <b className={styles.color2}>{data?.current?.feelslike_c}°</b></p>
          </div>
          <p>Humedad: <b className={styles.color2}>{data?.current.humidity}%</b></p>
          <p>Velocidad del Viento: <b className={styles.color2}>{data?.current.wind_kph}Km/h</b></p>
          {/* <p>Direccion del viento: {data?.current.wind_dir}</p>*/}
          <p>Actualización de datos al {data?.current.last_updated.split(" ")[0]} a las {data?.current.last_updated.split(" ")[1]}</p>

          <div className={styles.container3}>          
            <p>Selecciona una fecha para ver el clima de ese día </p>            
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
