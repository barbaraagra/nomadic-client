import { useState, useEffect } from 'react';
import '../App.css';
import SectionOne from '../components/SectionOne';
import axios from 'axios';
import CardItem from '../components/cityCards/CardItem';
import { Link } from 'react-router-dom'

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
            {/*  {cities.map(city => {
                <div className='city-home_container' key={city._id}>
                    <Link to={`cities/${city._id}`}>
                        return <CardItem city={city} />
                    </Link>
                </div>
            })} */}
            <h1 className='home-titles'>Top Cities for Digital Nomads</h1>

            <div className='city-home_container'>
                {cities.map(city => {
                    return <CardItem city={city} />
                })}
            </div>
        </>
    )
}

export default Home;