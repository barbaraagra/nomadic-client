import { useState, useEffect, useContext } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/auth.context';
import axios from 'axios';
import FavButton from '../assets/fav.png';
import UnFavButton from '../assets/unfavourite.png'
import '../App.css'



function City() {
  const [content, setContent] = useState("");
  const [isFavourite, setIsFavourite] = useState(false)

  const [cityPage, setCityPage] = useState(null);
  const { id } = useParams();
  const { user, loggedIn } = useContext(AuthContext)

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
      console.log('useeer', user)

      if (response.data.favorite.includes(user._id)) {
        setIsFavourite(true)
      } else {
        setIsFavourite(false)
      }
      setCityPage(response.data);
      console.log(response.data);

    } catch (error) {
      console.log(error);
    }
  };

  const addFavourite = async () => {
    try {
      const storedToken = localStorage.getItem('authToken');
      await axios.get(`${process.env.REACT_APP_API_URL}/favourite-city/${id}`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      });

      getCityPage();
    } catch (error) {
      console.log(error);
    }
  };

  const editComment = async () => {
    try {
      const response = await axios.put(`${process.env.REACT_APP_API_URL}/comments/create/${user._id}/${id}`, {
      });
      console.log(response.data)
      navigate('/');

    } catch (error) {
      console.log(error)
    }
  };

  const deleteComment = async () => {
    try {
      const response = await axios.delete(`${process.env.REACT_APP_API_URL}/comment-delete/${user._id}/${id}`, {
      });
      console.log(response.data)
      navigate('/');

    } catch (error) {
      console.log(error)
    }
  };

  useEffect(() => {
    getCityPage();
  }, []);

  return (
    <div>

      {cityPage &&
        (<><img src={cityPage.cityImage} alt="city" className='header-img' />

          <div className='city-page_info'>

            <div className='citypage_namefav'>
              <div>
                <h3>{cityPage.cityName}</h3>
                <h5>{cityPage.continent}</h5>
              </div>


              {isFavourite ? <button onClick={addFavourite} className='unfav-btn'> <img src={UnFavButton} alt="" /></button> : <button onClick={addFavourite} className='fav-btn'> <img src={FavButton} alt="" /></button>}


            </div>
            <div className='city-api-info'>
              <p><div dangerouslySetInnerHTML={{ __html: cityPage.description }} /></p>

              <p> <span>Currency:</span> {cityPage.currency}</p>
              <p><span>Language: </span>{cityPage.language}</p>
              <p><span>English Skills:</span>  {cityPage.englishSkills}</p>
              <p> <span> Life Expectancy:</span> {cityPage.lifeExpectancy}</p>
              <p> <span>CoWorking Spaces:</span> {cityPage.coworkingSpaces}</p>
            </div>
          </div>

          <div className='comment_section'>

            <h4 className='comments'>Comments</h4>
            <h5 className='comment-username'>{user.username}</h5>
            <div className='comments-city'> {cityPage.comments.map(comment => {
              return <p>{comment.content}</p>
            })}
              <button className='city-edit_btn' onClick={editComment}> Edit comment </button>
              <button className='city-delete_btn' onClick={deleteComment}> Delete comment </button>

            </div>
          </div>
        </>)
      }
      <div className='form-commentbox'>
        <form onSubmit={handleSubmit}>
          <label htmlFor="content">Write a Comment</label>
          <textarea name="content" cols="40" rows="10" onChange={handleContent}></textarea>
          <div> <button className='add-comment_btn' type='submit'>Add Comment</button></div>
        </form>
      </div>
    </div >
  )
}


export default City