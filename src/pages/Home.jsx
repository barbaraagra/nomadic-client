import { useState, useEffect } from 'react';
import '../App.css';
import SectionOne from '../components/SectionOne';
import axios from 'axios';
import CardItem from '../components/cityCards/CardItem';
import WorldImg from '../assets/world.png';
import Passport from '../assets/pass.png';
import Connect from '../assets/people.png';
import Adventures from '../assets/adventures.png';


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
            <div className='home-illustrations'>

                <div className='home-ilustration_each'>
                    <img src={Passport} alt="passport" />
                    <p>Keep informed about chosen city</p>
                </div>
                <div className='home-ilustration_each'>
                    <img src={WorldImg} alt="passport" />
                    <p>Travel around the World while working</p>
                </div>
                <div className='home-ilustration_each'>
                    <img src={Connect} alt="passport" />
                    <p>Connect to other Digital Nomads</p>
                </div>
            </div>

            <h1 className='home-titles'>Top Cities for Digital Nomads</h1>

            <div className='city-home_container'>
                {cities.map(city => {
                    return <CardItem city={city} />
                })}
            </div>

            <div className='home-footer_book'>
                <div className='home-footer_text'>
                    <h5>Let us help you to find your</h5>
                    <h1>NEXT DESTINATION</h1>
                    <button className='home-footer_btn'>SEE MORE</button>
                </div>
                <img src={Adventures} alt="illustration" />
            </div>
        </>
    )
}

export default Home;