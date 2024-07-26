import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from "../images/benLogo.png";
import appLinks from "../constants/Links";
import { FaUser, FaShoppingCart, FaSearch } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";

const Navbar = () => {
    const [navActive, setNavActive] = useState(false);
    

    const handleToggle = () => {
        setNavActive(!navActive);
    };

    return (
        <div className='navbar'>
            <div className='container-fluid'>
                <div className='logo-container'>
                    <img src={Logo} alt="logo" />
                </div>
                <div className='nav-container'>
                <div className='search-container'>
                        <input type="text" placeholder="Search..." className='search-input' />
                        <button value="submit" className='search-button'>
                            <FaSearch />
                        </button>
                    </div>
                    <ul className='navbar-nav'>
                        <li className='nav-item'>
                            <Link to={appLinks.Home} className='nav-link'>
                                <IoMdHome /> Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to={appLinks.Cart} className='nav-link'>
                                <FaShoppingCart /> Cart
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to={appLinks.UserProfile} className='nav-link'>
                                <FaUser /> Account
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to={appLinks.Login} className='nav-link'>
                                Login
                            </Link>
                        </li>
                    </ul>
                    <button className='toggle-button' onClick={handleToggle}>
                        ☰
                    </button>
                </div>
            </div>
            <div className={`sidebar ${navActive ? 'active' : ''}`}>
                <ul className='sidebar-nav'>
                    <li className='nav-item'>
                        <Link to={appLinks.Home} className='nav-link'>
                            <IoMdHome /> Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to={appLinks.Cart} className='nav-link'>
                            <FaShoppingCart /> Cart
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to={appLinks.UserProfile} className='nav-link'>
                            <FaUser /> Account
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to={appLinks.Login} className='nav-link'>
                            Login
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
