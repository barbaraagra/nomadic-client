import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';
import { BiWorld } from 'react-icons/bi';


function CardItem(props) {
    const { city } = props;
    return (
        <>
            <div className='city-card_cont'>
                <Link to={`/cities/${city._id}`} className='city-card_container'>
                    <img className='card-image' src={city.cityImgMobile
                    } alt="city" />
                    <div className='card_icon-name'>
                        <h4 className='cards_item_text'>{city.cityName}</h4>
                        <h4><BiWorld className='card-icon' />+100</h4>
                    </div>
                </Link>
            </div>
        </>
    )
}

export default CardItem