import { useState, useEffect, useContext } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import TopCities from '../pages/TopCities';
import Home from '../pages/Home';
import Profile from '../pages/Profile';
import LogoWhite from '../assets/logowhite.png';
import { Button } from './Button';
import { AuthContext } from '../contexts/auth.context';


function Navbar() {
    const { loggedIn, user, logout } = useContext(AuthContext);
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton()
    }, []);


    window.addEventListener('resize', showButton);

    function openNav() {
        document.getElementById("myNav").style.width = "100%";
        document.getElementById("hamburguerMenu").style.display = "none";
    }

    function closeNav() {
        document.getElementById("myNav").style.width = "0%";
        document.getElementById("hamburguerMenu").style.display = "block";
    }

    return (
        <>
            <nav className='navbar'>
                <div className="navbar-container">
                    <Link to='/' className='navbar-logo' onClick={closeMobileMenu}> <img src={LogoWhite} alt="nomadic" /> </Link>
                    {/* 
                    <div className="menu-icon" onClick={handleClick} >
                        <i className={click ? 'fas fa-times' : 'fa fa-bars'} />
                    </div> */}

                    <ul className={click ? 'navmenu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' element={<Home />} className='nav-links' onClick={closeMobileMenu}>HOME</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/top-cities' element={<TopCities />} className='nav-links' onClick={closeMobileMenu}>TOP CITIES</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/profile' element={<Profile />} className='nav-links' onClick={closeMobileMenu}>PROFILE</Link>
                        </li>

                        <li className='nav-item'>
                            <Link to='/login' className='nav-links-mobile' onClick={closeMobileMenu}>LOGIN</Link>
                        </li>
                    </ul>
                </div>
                <div>

                    {loggedIn && <a href="/"></a>}
                    {loggedIn && (


                        <a href="/" onClick={logout}> {button && <Button buttonStyle='btn--outline'>LOGOUT</Button>}</a>

                    )}
                    {!loggedIn && (
                        <a href="/login"> {button && <Button buttonStyle='btn--outline'>LOGIN</Button>}</a>

                    )}

                    <div id="myNav" className="overlay">
                        <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>&times;</a>
                        <div className="overlay-content">
                            <Link to='/' onClick={closeNav}>HOME</Link>
                            <Link to='/top-cities' onClick={closeNav}>TOP CITIES</Link>
                            <Link to='/profile' onClick={closeNav}>PROFILE</Link>

                        </div>
                    </div>
                    <span id="hamburguerMenu" className="openNav" onClick={openNav}>&#9776;</span>
                </div>
            </nav>



        </>
    )
}

export default Navbar