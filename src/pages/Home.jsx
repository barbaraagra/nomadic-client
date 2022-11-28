import { useState, useEffect } from 'react';
import '../App.css';
import SectionOne from '../components/SectionOne';
import axios from 'axios';
import CardItem from '../components/cityCards/CardItem';

function Home() {
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
            <SectionOne />
            <div className='city-home_container'>
                {cities.map(city => {
                    return <CardItem city={city} />
                })}
            </div>
        </>
    )
}

export default Home;