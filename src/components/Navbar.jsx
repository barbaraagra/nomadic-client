import { useState, useEffect } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import TopCities from '../pages/TopCities';
import Home from '../pages/Home';
import Profile from '../pages/Profile';
import LogoWhite from '../assets/logowhite.png';
import { Button } from './Button';


function Navbar() {
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
    }

    function closeNav() {
        document.getElementById("myNav").style.width = "0%";
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
                    {button && <Link><Button buttonStyle='btn--outline'>SIGN UP</Button></Link>}
                </div>

                <div id="myNav" className="overlay">
                    <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>&times;</a>
                    <div classNmae="overlay-content">
                        <Link to='/' className='nav-links' onClick={closeNav}>HOME</Link>
                        <Link to='/top-cities' className='nav-links' onClick={closeNav}>TOP CITIES</Link>
                        <Link to='/profile' className='nav-links' onClick={closeNav}>PROFILE</Link>

                    </div>
                </div>
                <span className="openNav" onClick={openNav} openNav>&#9776;</span>
            </nav>

            <TopCities />

        </>
    )
}

export default Navbar