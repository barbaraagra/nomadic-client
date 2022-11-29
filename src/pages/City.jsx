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
        (<><img src={cityPage.cityImage} alt="city" className='header-img' />

          <div className='citypage_namefav'>
            <div>
              <h3>{cityPage.cityName}</h3>
              <h5>{cityPage.continent}</h5>
            </div>
            <Link className='fav-btn'> <img src={FavButton} alt="" /></Link>
          </div>

          <p>Summary: {cityPage.summary}</p>
          <p>Currency: {cityPage.currency}</p>
          <p>Language: {cityPage.language}</p>
          <p>English Skills: {cityPage.englishSkills}</p>
          <p>Life Expectancy: {cityPage.lifeExpectancy}</p>
          <p>CoWorking Spaces: {cityPage.coworkingSpaces}</p>

          <h4 className='comments'>Comments</h4>

          <div className='comments-city'> {cityPage.comments.map(comment => {
            return <p>{comment.content}</p>
          })}
          </div>
        </>)
      }
      <div className='form-commentbox'>
        <form onSubmit={handleSubmit}>
          <label htmlFor="content">Write a Comment</label>
          <textarea name="content" cols="50" rows="10" onChange={handleContent}></textarea>
          <div> <button className='add-comment_btn' type='submit'>Add Comment</button></div>
        </form>
      </div>
    </div >
  )
}


export default City