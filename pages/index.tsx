import type { NextPage } from 'next'
import { apiCurrent, getData } from '../api/getData';
import Button from '../components/controls/Button/Button';
import SearchCity from '../components/controls/SearchCity/SearchCity';
import Footer from '../components/views/Footer/Footer';
import Form from '../components/views/Form/Form';
import Layout from '../components/views/Layout/Layout';

const Home: NextPage = () => {

  
  return (
    <>
      <Layout title='Weather' />
      
      <Form />
      
      <Footer /> 
    </>
  )
}

export default Home
