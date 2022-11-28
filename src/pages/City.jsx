import React from 'react'
import { Link } from 'react-router-dom';


function City(props) {
  const { city } = props;
  return (
    <div>
      <Link>
        <img src={city.cityImage} alt="city" />
        <h3>{city.cityName}</h3>
        <h5>{city.continent}</h5>
        <p></p>
      </Link>
    </div>
  )
}

export default City