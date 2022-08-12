import axios from "axios";

const nameCity = 'Medellin';
const lastDate = '2022-01-01';
const forecastDate = '2022-10-01';
const futureDate = '2022-10-15';

const getData = async (url: string) => {
    const dataCity = await axios.get(url);
    const { data } = dataCity;
    console.log(data);
    return data;
  };

const apiCurrent = `http://api.weatherapi.com/v1/current.json?key=${process.env.NEXT_PUBLIC_API_KEY}&lang=es&q=`;

const apiHistory = `http://api.weatherapi.com/v1/history.json?key=${process.env.NEXT_PUBLIC_API_KEY}&lang=es&q=`;

const apiForecast = `http://api.weatherapi.com/v1/forecast.json?key=${process.env.NEXT_PUBLIC_API_KEY}&q=${nameCity}&dt=${forecastDate}`;

const apiFuture = `http://api.weatherapi.com/v1/future.json?key=${process.env.NEXT_PUBLIC_API_KEY}&q=${nameCity}&dt=${futureDate}`;

export {getData, apiCurrent, apiHistory, apiForecast, apiFuture};