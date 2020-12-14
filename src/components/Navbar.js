import React, { useState, useEffect } from 'react'
import './Navbar.css';


function Navbar() {
    const [click, setClick] = useState(false);
    const [navbar, setNavbar] =useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    

    const changeBackground = () => {
        if (window.scrollY >= 800){
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
                    <a href="/" className="navbar-logo" onClick={closeMobileMenu}>
                        ZERO <i className="fab fa-typo3" />
                    </a>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <a href="/" className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </a>
                        </li>
                        <li className='nav-item'>
                            <a href="#projects" to='/' className='nav-links' onClick={closeMobileMenu}>
                                Work
                            </a>
                        </li>
                        <li className='nav-item'>
                            <a href="#contact" to='/' className='nav-links' onClick={closeMobileMenu}>
                                Contact
                            </a>
                        </li>
                    </ul>
                    
                </div>
            </nav>
        </>
    )
}

export default Navbar