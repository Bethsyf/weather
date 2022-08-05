import React from 'react'
import styles from './Button.module.scss'

const Button = () => {
  return (
    <div className={styles.container}>
        <button 
        type="submit"
        className={styles.btn}>
          Ver el Clima
        <span></span>
        </button>
    </div>
  )
}

export default Button