import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../contexts/auth.context';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Profile() {

    const { user } = useContext(AuthContext);
    const [thisUser, setThisUser] = useState(null);

    const getProfile = async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/profile/${user._id}`);
            console.log(response.data)
            setThisUser(response.data)
        } catch (error) {
            console.log(error)
        }
    };

    useEffect(() => {
        getProfile();
    }, []);


    console.log(user)
    return (
        <div>


            {thisUser && (
                <div>
                    <img src={thisUser.imageUrl} alt="profilepic" />
                    <h3>Hello there, {thisUser.username}</h3>
                    <h4>Currently living in {thisUser.location}</h4>

                    <h4> Comments</h4>
                    {thisUser.comments.map(comment => {
                        return <p>{comment.content}</p>
                    })}
                    <Link to={`/profile/edit/${thisUser._id}`} className='edit-profile'>Edit Profile</Link>
                    <Link to={`/profile/edit/${thisUser._id}`} className='delete-profile'>Delete Profile</Link>

                </div>
            )}

        </div>
    )
}

export default Profile;