import { useRouter } from "next/router";
import React, { ButtonHTMLAttributes, useState } from "react";
import Button from "../../controls/Button/Button";
import styles from "./Form.module.scss";


const Form = () => {
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

        <Button type="btn" text="Ver clima" onClickFn={handleOnClick} stylesProps={""} />
      </div>
    </>
  );
};

export default Form;
