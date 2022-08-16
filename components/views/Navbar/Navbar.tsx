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
            
        </header>
    </>
  )
}

export default Navbar