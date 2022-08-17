import React, { ButtonHTMLAttributes } from "react";
import styles from "./Button.module.scss";

interface Props {  
  text: string;
  onClickFn: ButtonHTMLAttributes<HTMLButtonElement>["onClick"];
  stylesProps: string;
  type: string;  
}

const Button = ({ text, onClickFn, stylesProps, type } : Props) => {
  return (
    <div className={styles.container}>
      <button className={`${stylesProps} ${styles[type]}`} onClick={onClickFn}>
        {text}
      </button>
    </div>
  );
};

export default Button;
