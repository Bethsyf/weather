import { useRouter } from 'next/router';
import { CityWeather } from '../../../interfaces/city-props';
import React from 'react'
import styles from './Button.module.scss'

interface Props{
  city: CityWeather    
}

const Button = ({city}: Props) => {

const router = useRouter();
const onClick = () => {    
  router.push(`/location/${city?.location?.name}`)
}
  return (
    <div className={styles.container} >
        
        <div >
        <button  onClick={ onClick } 
        
        className={styles.btn}>
          Ver el Clima
        <span></span>        
        </button>
        </div>
    </div>
  )
}

export default Button