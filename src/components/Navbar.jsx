import { useState, useEffect } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import TopCities from '../pages/TopCities';
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

    return (
        <>
            <nav className='navbar'>
                <div className="navbar-container">
                    <Link to='/' className='navbar-logo' onClick={closeMobileMenu}> <img src={LogoWhite} alt="nomadic" /> </Link>

                    <div className="menu-icon" onClick={handleClick} >
                        <i className={click ? 'fas fa-times' : 'fa fa-bars'} />
                    </div>

                    <ul className={click ? 'navmenu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>HOME</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/top-cities' className='nav-links' onClick={closeMobileMenu}>TOP CITIES</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/profile/:id' className='nav-links' onClick={closeMobileMenu}>PROFILE</Link>
                        </li>

                        <li className='nav-item'>
                            <Link to='/login' className='nav-links-mobile' onClick={closeMobileMenu}>LOGIN</Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
                </div>
            </nav>

            <TopCities />

        </>
    )
}

export default Navbar