import { useState, useEffect } from 'react';
import axios from 'axios';
import CardItem from '../components/cityCards/CardItem';

function CompareCities() {
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
            <h1 className='home-titles'>Top Cities</h1>

            <div className='city-home_container'>
                {cities.map(city => {
                    return <CardItem city={city} />

                })}
            </div>
        </>
    )
}

export default CompareCities