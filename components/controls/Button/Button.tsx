import React from 'react'
import styles from './Button.module.scss'


interface Props{
  city: string;   
  
}

const Button = ({text='', onClickFn='', stylesProps='', type=''}) => {

  return (
    <div className={styles.container}>
    <button className={`${stylesProps} ${styles[type]}`} onClick={onClickFn}>
      {text}
    </button>
    </div>
  )
}

export default Button