import { useState, useEffect, createContext } from "react";
import axios from "axios";

//Create the context
const AuthContext = createContext()

//Create the wrapper
function AuthProviderWrapper(props) {
    const [loggedIn, setLoggedIn] = useState(false); //start as false to user be able to signup if its doesn't have an register yet
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    //once we login we want to storage the token in our computer, that's why we create this function 
    const storeToken = (token) => {
        localStorage.setItem("authToken", token);
    }

    //function to authenticate the user. Get the credentials, check if its valid or not and send back the information
    const authenticateUser = async () => {

        try {

            const storedToken = localStorage.getItem('authToken');

            if (storedToken) {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/verify`, {
                    headers: { Authorization: `Bearer ${storedToken}` },
                });

                ///the next part happens if the login was successful
                setLoggedIn(true);
                setUser(response.data);
                setLoading(false);
            } else {
                setLoggedIn(false);
                setUser(null);
                setLoading(false);
            }

        } catch (error) {
            //if there is a problem with the authentication we don't want a logged in user
            setLoggedIn(false);
            setUser(null);
            setLoading(false);
        }
    };

    useEffect(() => {
        authenticateUser();
    }, []);

    const logout = () => {
        //first, we remove the token from the local storage
        localStorage.removeItem('authToken');

        //we run authenticate again to reset the states
        authenticateUser();
    };

    return (
        (<AuthContext.Provider value={{ loggedIn, user, loading, storeToken, authenticateUser, logout }}>
            {props.children}
        </AuthContext.Provider>)
    )
}

export { AuthContext, AuthProviderWrapper }; //because we are exporting more than one thing it needs to be an object