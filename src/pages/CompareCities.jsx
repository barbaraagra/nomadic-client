import { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css';
import ExploreTwo from '../assets/exploretwo.png'

function CompareCities() {
    const [cities, setCities] = useState([]);
    const [cityOne, setCityOne] = useState(null);
    const [cityTwo, setCityTwo] = useState(null);

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

    const getCityOne = async (id) => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/cities/${id}`);
            setCityOne(response.data);
            console.log(response.data);

        } catch (error) {
            console.log(error);
        }
    };
    const getCityTwo = async (id) => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/cities/${id}`);
            setCityTwo(response.data);
            console.log(response.data);

        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getCities()
    }, []);

    return (
        <>
            <img src={ExploreTwo} alt="header" className='exploretwo' />
            <h1 className='compare-titles'>Compare Cities</h1>

            <select name="cityOne" className='drop_one' onChange={(e) => getCityOne(e.target.value)}>
                {cities.map((city) => {
                    return <option value={city._id}> {city.cityName}</option>
                })}
            </select>
            <select name="cityTwo" className='drop_two' onChange={(e) => getCityTwo(e.target.value)}>
                {cities.map((city) => {
                    return <option value={city._id}> {city.cityName}</option>
                })}
            </select>


            <section id="twoCities">
                {cityOne &&
                    <div className='cityOne'>
                        <h1 className='city-name_h1'>{cityOne.cityName}</h1>
                        <img src={cityOne.cityImgMobile} alt="city" className='comp-img' />
                        <p><div dangerouslySetInnerHTML={{ __html: cityOne.description }} className='summary_comp' /></p>
                        <div className='city-api-info_comp'>

                            <p> <span>Currency:</span> {cityOne.currency}</p>
                            <p><span>Language: </span>{cityOne.language}</p>
                            <p><span>English Skills:</span>  {cityOne.englishSkills}</p>
                            <p> <span> Life Expectancy:</span> {cityOne.lifeExpectancy}</p>
                            <p> <span>CoWorking Spaces:</span> {cityOne.coworkingSpaces}</p>
                        </div>
                    </div>
                }
                {cityTwo &&
                    <div className='cityTwo'>
                        <h1 className='city-name_h1'>{cityTwo.cityName}</h1>
                        <img src={cityTwo.cityImgMobile} alt="city" className='comp-img' />
                        <div className='city-api-info_comp'>
                            <p><div dangerouslySetInnerHTML={{ __html: cityTwo.description }} className='summary_comp' /></p>

                            <p> <span>Currency:</span> {cityTwo.currency}</p>
                            <p><span>Language: </span>{cityTwo.language}</p>
                            <p><span>English Skills:</span>  {cityTwo.englishSkills}</p>
                            <p> <span> Life Expectancy:</span> {cityTwo.lifeExpectancy}</p>
                            <p> <span>CoWorking Spaces:</span> {cityTwo.coworkingSpaces}</p>
                        </div>
                    </div>
                }


            </section>

        </>


    )
}

export default CompareCities