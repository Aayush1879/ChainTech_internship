import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState(null);

    useEffect(() => {
        // Checking localStorage for user info
        const userData = JSON.parse(localStorage.getItem('user'));
        if (userData) {
            setIsLoggedIn(true);
            setUser(userData);
        }
    }, []);

    // logout
    const handleLogout = () => {
        localStorage.removeItem('user');
        setIsLoggedIn(false);
        setUser(null);
        window.location.href = '/login'; // Redirect to login page
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Chaintech Networks</Link>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        {!isLoggedIn ? (
                            <li className="nav-item">
                                <Link className="nav-link" to="/login">Login</Link>
                            </li>
                        ) : (
                            <li className="nav-item">
                                <button className="nav-link btn btn-link" onClick={handleLogout}>Logout</button>
                            </li>
                        )}
                        {isLoggedIn && (
                            <li className="nav-item">
                                <Link className="nav-link" to="/user">User Info</Link>
                            </li>
                        )}
                        <li className="nav-item">
                            <Link className="nav-link" to="/register">Register</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
