import { useContext } from 'react';
import { AuthContext } from '../contexts/auth.context';
import { Navigate } from 'react-router-dom';

function Anon(props) {

    const { loading, loggedIn } = useContext(AuthContext);

    //first we check if the page is still loading
    if (loading) return <p>Loading...</p>

    if (!loggedIn) {
        return props.children;
    } else {
        return <Navigate to="/signup" />;
    }
    return (
        <div>Private</div>
    )
}

export default Anon

//this component exists to avoid the user can access the login page if its already loggedin