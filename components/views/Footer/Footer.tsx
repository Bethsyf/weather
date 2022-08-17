import React from "react";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.container}>
      <q className={styles.text}>
        El Clima está cambiando; nosotros también deberiamos
      </q>
    </div>
  );
};

export default Footer;
