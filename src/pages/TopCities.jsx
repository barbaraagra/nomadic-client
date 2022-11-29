import { useState, useEffect } from 'react';
import axios from 'axios';

function TopCities() {
  /*  const [cities, setCities] = useState([]);
 
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
       <h1 className='home-titles'>Top Cities for Digital Nomads</h1>
 
       <div className='city-home_container'>
         {cities.map(city => {
           return city = { city }
         })}
       </div>
     </>
   ) */
}

export default TopCities