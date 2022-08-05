import React from 'react'
import styles from './Footer.module.scss'

const Footer = () => {
  return (
    <div className={styles.container}>
        <p className={styles.text}>
            "El Clima está cambiando; nosotros también deberiamos"
        </p>
    </div>
  )
}

export default Footer