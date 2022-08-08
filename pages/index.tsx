import axios from 'axios';
import type { GetStaticProps, NextPage } from 'next'
import { apiCurrent } from '../api/getData';
import Card from '../components/views/Card/Card';
import Footer from '../components/views/Footer/Footer';
import Form from '../components/views/Form/Form';
import Layout from '../components/views/Layout/Layout';
import { CityWeather } from '../interfaces/city-props';
import styles from '../styles/Home.module.scss'

interface Props{
  city: CityWeather
}

const HomePage: NextPage<Props> = ({  city }) => {

  
  
  return (
    <>
      <Layout title='Weather' />
      
      <Form />
      <div className={styles.places}>
      <div className={styles.places__row}>
      
      <Card city={city}/>
      
      </div>
    </div>

      <Footer /> 
    </>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  
  const places = [
    {
      name: "Bogota",
      
    },
    // {
    //   name: "Caracas",
      
    // },
    // {
    //   name: "New York",
      
    // },
  ];

  const data = await axios.get(`${apiCurrent}${`${places.map((place) => (    
    place.name
  ))}`
  }`)
      console.log(data) 

  return {
    props: {
      city: data.data
    }
  }
}

export default HomePage
