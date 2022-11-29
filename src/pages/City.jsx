import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import FavButton from '../assets/fav.png';
import '../App.css'



function City() {
  const [content, setContent] = useState("");

  const [cityPage, setCityPage] = useState(null);
  const { id } = useParams();

  const navigate = useNavigate();

  const handleContent = (e) => setContent(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {

      const storedToken = localStorage.getItem('authToken');


      const apiCall = await axios.post(`${process.env.REACT_APP_API_URL}/comments/create/${id}`, { content }, {
        headers: { Authorization: `Bearer ${storedToken}` },
      });
      console.log(apiCall);

      navigate('/profile');

    } catch (error) {
      console.log(error);
    }
  }

  const getCityPage = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/cities/${id}`);

      setCityPage(response.data);
      console.log(response.data);

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCityPage();
  }, []);

  return (
    <div>

      {cityPage &&
        (<><img src={cityPage.cityImage} alt="city" />
          <Link className='fav-btn'> <img src={FavButton} alt="" /></Link>
          <h3>{cityPage.cityName}</h3>
          <h5>{cityPage.continent}</h5>
          <p>{cityPage.summary}</p>
          <p>{cityPage.currency}</p>
          <p>{cityPage.language}</p>
          <p>{cityPage.englishSkills}</p>
          <p>{cityPage.lifeExpectancy}</p>
          <p>{cityPage.coworkingSpaces}</p>
        </>)
      }

      {/*    {cityPage.comments.map(comment => {
        return <p>{comment.content}</p>
      })} */}

      <form onSubmit={handleSubmit}>
        <label htmlFor="content">Comments</label>
        <textarea name="content" cols="30" rows="10" onChange={handleContent}></textarea>
        <button type='submit'>Add Comment</button>
      </form>

    </div >
  )
}


export default City