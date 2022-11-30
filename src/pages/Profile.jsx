import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../contexts/auth.context';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { IoMdPin } from 'react-icons/io';
import Profilebg from '../assets/profilebg.png';

function Profile() {

    const { user, logout, authenticateUser } = useContext(AuthContext);
    const [thisUser, setThisUser] = useState(null);
    const navigate = useNavigate();

    const getProfile = async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/profile/${user._id}`);
            console.log(response.data)
            setThisUser(response.data)
        } catch (error) {
            console.log(error)
        }
    };

    const deleteProfile = async () => {
        try {
            const storedToken = localStorage.getItem('authToken');
            const response = await axios.delete(`${process.env.REACT_APP_API_URL}/profile/${user._id}`, {
                headers: { Authorization: `Bearer ${storedToken}` },
            });
            console.log(response.data)
            logout();
            authenticateUser();
            navigate('/signup');

        } catch (error) {
            console.log(error)
        }
    };


    useEffect(() => {
        getProfile();
    }, []);



    console.log(user)
    return (
        <div className='ProfileBG'>

            {thisUser && (
                <div>
                    <div className='profile-container'>
                        <img src={thisUser.imageUser} alt="profilepic" className='profilepic' />
                        <h3 className='profile-title'>Hello there, {thisUser.username}</h3>
                        <h4 className='profile-location'><IoMdPin />Currently living in {thisUser.location}</h4>
                    </div>

                    <h4>Your Comments</h4>
                    {thisUser.comments.map(comment => {
                        return <p className='comment_profile'>{comment.content}</p>
                    })}
                    {thisUser.nextCities.map((city) => {
                        return (
                            <div>
                                <h4>{city.cityName}</h4>

                            </div>
                        )
                    })}
                    <div className='profile_btns'>
                        <Link to={`/profile/edit/${thisUser._id}`} className='edit-profile'>Edit Profile</Link>
                        <button onClick={deleteProfile} className='delete-profile'>Delete Profile</button>
                    </div>
                </div>
            )}

        </div>
    )
}

export default Profile;