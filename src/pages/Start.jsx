import React from 'react';
import StartImg from '../assets/startny.png';
import LogoWhite from '../assets/logowhite.png';
import { Link } from 'react-router-dom';
import NextBtn from '../assets/next.png'

function Start() {
    return (
        <div>
            <img src={LogoWhite} alt="Nomadic" />
            <img src={StartImg} alt="NY city" />

            <h1>Find Your Next Destination</h1>
            <p>For digital nomads wanting to search for cities by quality of life.
                Share and see comments about the city made by other digital nomads.</p>
            <Link>{NextBtn}</Link>
        </div>
    )
}

export default Start