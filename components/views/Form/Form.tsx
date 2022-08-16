import { useRouter } from "next/router";
import React, { useState } from "react";
import { CityWeather } from "../../../interfaces/city-props";
import Button from "../../controls/Button/Button";
import styles from "./Form.module.scss";

interface Props {
  city: CityWeather;
}

const Form = ({ city }: Props) => {
  const [nameCity, setNameCity] = useState("");
  const router = useRouter();

  const handleOnClick = () => {
    router.push(`/location/${nameCity}`);
  };

  return (
    <>
      <div>
        <div className={styles.contagen}>
          <input
            className={styles.container}
            type="text"
            placeholder="Ciudad"
            onChange={(e) => setNameCity(e.target.value)}
          />
        </div>

        <Button
          type="btn"
          text="Ver clima"
          onClickFn={handleOnClick}
        />
      </div>
    </>
  );
};

export default Form;
