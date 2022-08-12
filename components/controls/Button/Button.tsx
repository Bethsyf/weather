import React from 'react'
import styles from './Button.module.scss'


interface Props{
  city: string;   
  
}

const Button = ({text='', onClickFn='', stylesProps='', type=''}) => {

  return (
    <button className={`${stylesProps} ${styles[type]}`} onClick={onClickFn}>
      {text}
    </button>
  )
}

export default Button