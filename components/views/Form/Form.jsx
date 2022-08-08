import { useRouter } from 'next/router';
import React, { useState } from 'react'
import { apiCurrent, getData } from '../../../api/getData';
import { CityWeather } from '../../../interfaces/city-props';
import Button from '../../controls/Button/Button';
import styles from './Form.module.scss'



const Form = () => {
    const [nameCity, setNameCity] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        getData(`${apiCurrent}${nameCity}`);  
         
      };
      const router = useRouter();
  const onClick = () => {    
    router.push(`/location/${city.location?.name}`)
  }
        
  return (
    <>
    <div >
    <form onSubmit={handleSubmit}>
    <div className={styles.contagen}>
        <input 
        className={styles.container} 
        type="text"
        placeholder='Ciudad'
        onChange={(e) => setNameCity(e.target.value)}        
        />
    </div>
      <Button onClick={ onClick }/>     
      </form>
      
      </div>
      </>
  )
}

export default Form