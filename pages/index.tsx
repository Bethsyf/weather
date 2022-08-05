import axios from 'axios';
import type { GetStaticProps, NextPage } from 'next'
import { apiCurrent } from '../api/getData';
import Footer from '../components/views/Footer/Footer';
import Form from '../components/views/Form/Form';
import Layout from '../components/views/Layout/Layout';
import { CityWeather } from '../interfaces/city-props';

interface Props{
  city: CityWeather
}

const HomePage: NextPage<Props> = ({  city }) => {

  
  
  return (
    <>
      <Layout title='Weather' />
      
      <Form />
      
      <Footer /> 
    </>
  )
}

export const getStaticProps: GetStaticProps = async (ctx) => {

  const data = await axios.get(`${apiCurrent}${'Medellin'}`)
  console.log(data)

  return {
    props: {
      city: data.data
    }
  }
}

export default HomePage
