import { useRouter } from "next/router";
import React from "react";
import { CityWeather } from "../../../interfaces/city-props";
import styles from "./Card.module.scss";

interface Props {
  city: CityWeather;
}

const Card = ({ city }: Props) => {
  const router = useRouter();
  const onClick = () => {
    router.push(`/location/${city.location?.name}`);
  };

  return (
    <>
      <div onClick={onClick}>
        <div className={styles.card} key={city?.location.name}>
          <div>
            <h1>{city?.location.name}</h1>
          </div>
          <div className={styles.loca}>
            <p>{city?.location.region}</p>
            <p>{city?.location.country}</p>
          </div>
          <p className={styles.color1}>{city?.current?.condition.text}</p>          
          <div className={styles.temp}>
            <p>
              Temperatura:{" "}
              <b className={styles.color2}>{city?.current?.temp_c}°C</b>
            </p>
            <p>
              Sensación Termica:{" "}
              <b className={styles.color2}>{city?.current?.feelslike_c}°C</b>
            </p>
          </div>
          <div>
            <p>
              Humedad:{" "}
              <b className={styles.color2}>{city?.current?.humidity}%</b>
            </p>
            <p>
              Velocidad del Viento:{" "}
              <b className={styles.color2}>{city?.current?.wind_kph}Km/h</b>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;