import React, { useState, useEffect } from 'react'
import './Navbar.css';
import { Link } from 'react-router-dom';


function Navbar() {
    const [click, setClick] = useState(false);
    const [navbar, setNavbar] =useState(false);
    
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);


    
    const changeBackground = () => {
        if (window.scrollY >= 400){
            setNavbar(true);
            
        } else {
            setNavbar(false);
        }
    }

    window.addEventListener('scroll', changeBackground);
    

    return (
        <>
            <nav className={navbar ? 'navbar active' : 'navbar'}>
                <div className="navbar-container">
                    {/* <a href="/" className="navbar-logo" onClick={closeMobileMenu}>
                         <img src="/images/logo1.png"></img>
                    </a>  */}
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link path="/" className='nav-links' onClick={closeMobileMenu}>
                                home<span className="dots">.</span>
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link path="#projects" to='/' className='nav-links' onClick={closeMobileMenu}>
                                projects<span className="dots">.</span>
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link path="#contact" to='/' className='nav-links' onClick={closeMobileMenu}>
                                contact<span className="dots">.</span>
                            </Link>
                        </li>
                    </ul>
                    
                </div>
            </nav>
        </>
    )
}

export default Navbar