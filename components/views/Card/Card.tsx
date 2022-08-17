import Image from "next/image";
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
          <p>{city?.current?.condition.text}</p>
          {/* <Image
          src={city?.current.condition.icon || '/no-image.png' }
          alt={city.current?.condition.text}
          width={100}
          height={100}          
        /> */}
          <div className={styles.temp}>
            <p>Temperatura: {city?.current?.temp_c}°C</p>
            <p>Sensación Termica: {city?.current?.feelslike_c}°C </p>
          </div>
          <div>
            <p>Humedad: {city?.current?.humidity}%</p>
            <p>Velocidad del Viento: {city?.current?.wind_kph} kph</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
