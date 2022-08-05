import Image from 'next/image'
import React from 'react'
import weather from '../../../assets/weather.png'
import styles from './Navbar.module.scss'
const Navbar = () => {
  return (
    <>
        <header className={styles.container}>
            <Image 
            src={weather}
            alt='logo-app'
            width={150}
            height={150}
            />
            <h3 className={styles.title}>Digita tu Ciudad y Conoce el Clima</h3>
        </header>
    </>
  )
}

export default Navbar