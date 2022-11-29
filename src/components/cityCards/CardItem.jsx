import React from 'react';
import { Link } from 'react-router-dom';
import './CardItem.css';


function CardItem(props) {
    const { city } = props;
    return (
        <>
            <Link to={`/cities/${city._id}`} className='city-card_container'>
                <img src={city.cityImage} alt="city" />
                <h2 className='cards_item_text'>{city.cityName}</h2>
            </Link>
        </>
    )
}

export default CardItem