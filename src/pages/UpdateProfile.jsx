import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import service from "../service/service";
import { AuthContext } from '../contexts/auth.context';


function UpdateProfile() {
    const [username, setUsername] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [location, setLocation] = useState('');

    const { id } = useParams();
    const navigate = useNavigate();

    const getProfile = async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/profile/${id}`);

            setUsername(response.data.username);
            setImageUrl(response.data.imageUrl);
            setLocation(response.data.location);
        } catch (error) {
            console.log(error)
        }
    };

    useEffect(() => {
        getProfile();
    }, []);


    const handleUsername = (e) => setUsername(e.target.value);
    const handleLocation = (e) => setLocation(e.target.value);

    const handleFileUpload = (e) => {
        const uploadData = new FormData();
        uploadData.append("imageUrl", e.target.files[0]);
        service
            .uploadImage(uploadData)
            .then(response => {
                setImageUrl(response.fileUrl);
            })
            .catch(err => console.log("Error while uploading the file: ", err));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const storedToken = localStorage.getItem('authToken');
            const responseauth = await axios.put(`${process.env.REACT_APP_API_URL}/profile/${id}`, { username, location, imageUrl }, {
                headers: { Authorization: `Bearer ${storedToken}` },
            });

            storedToken(responseauth.data.authToken);

            setUsername('');
            setImageUrl('');
            setLocation('');

            navigate(`/profile`)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='EditProfilePage'>


            <form onSubmit={handleSubmit}>
                <label htmlFor='username'>Username</label>
                <input type='text' name='username' value={username} onChange={handleUsername} />

                <label htmlFor='location'>Current Location</label>
                <input type='text' name='location' value={location} onChange={handleLocation} />

                <label htmlFor='imageUrl'>Profile Photo</label>
                <input type='file' name='imageUrl' onChange={handleFileUpload} />

                <button type='submit'>Edit Profile</button>
            </form>


        </div>
    )
}

export default UpdateProfile