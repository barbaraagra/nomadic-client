import React from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import FavButton from '../assets/fav.png'


function City(props) {
  const { city } = props;
  return (
    <div>
      <img src={city.cityImage} alt="city" />
      <Link>{FavButton}</Link>
      <h3>{city.cityName}</h3>
      <h5>{city.continent}</h5>
      <p>{city.currency}</p>
      <p>{city.language}</p>
      <p>{city.englishSkills}</p>
      <p>{city.lifeExpectancy}</p>
      <p>{city.coworkingSpaces}</p>

      <h4>Comments</h4>


    </div >
  )
}

export default City