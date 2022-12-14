import { useRouter } from "next/router";
import React, { useState } from "react";
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
      <div className={styles.container1}>
        <div className={styles.contagen}>
          <input
            className={styles.container2}
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