import type { GetStaticProps, NextPage } from "next";
import { apiCurrent, getData } from "../api/getData";
import Card from "../components/views/Card/Card";
import Footer from "../components/views/Footer/Footer";
import Form from "../components/views/Form/Form";
import Layout from "../components/views/Layout/Layout";
import { CityWeather } from "../interfaces/city-props";
import styles from "../styles/pages/Home.module.scss";

interface Props {
  data: CityWeather[];
}

const HomePage: NextPage<Props> = ({ data }) => {
  return (
    <>
      <Layout />

      <h3 className={styles.title}>Digita tu Ciudad y Conoce el Clima</h3>

      <Form />

      <div className={styles.grid}>
        {data?.map((city) => (
          <Card key={city.location.name} city={city} />
        ))}
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
    {
      name: "Caracas",
    },
    {
      name: "New York",
    },
  ];

  const city = await Promise.all(
    places.map(async (place) => {
      return await getData(`${apiCurrent}${place.name}`);
    })
  );

  return {
    props: {
      data: city,
    },
  };
};

export default HomePage;