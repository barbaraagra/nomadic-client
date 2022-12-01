import { useState, useEffect } from 'react';
import axios from 'axios';
import CardItem from '../components/cityCards/CardItem';
import Explore from '../assets/explore.png';
import '../App.css';

function TopCities() {
  const [cities, setCities] = useState([]);

  const getCities = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/cities`);
      const citiesFromApi = response.data;

      setCities(citiesFromApi);
      console.log(citiesFromApi);
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getCities()
  }, []);

  return (
    <>
      <img src={Explore} alt="header" className='explore-pic' />
      <h1 className='home-titles'>Top Cities for Digital Nomads</h1>

      <div className='city-home_container'>
        {cities.map(city => {
          return <CardItem city={city} />

        })}
      </div>
    </>
  )
}

export default TopCities