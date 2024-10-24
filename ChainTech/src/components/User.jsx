import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './base.css'

const User = () => {
    const [user, setUser] = useState(null);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        // getting user info from localStorage
        const userData = JSON.parse(localStorage.getItem('user'));
        if (userData) {
            setUser(userData);
            setName(userData.name); 
            setEmail(userData.email);
        }
    }, []);

    const handleLogout = () => {
        // Clear user info from localStorage and redirect to login
        localStorage.removeItem('user');
        window.location.href = '/login';
    };

    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.put(`http://localhost:5000/user`, {
                // Old email for identifying the user
                email: user.email, 
                name,
                // The updated email
                newEmail: email, 
            });
            console.log(response.data);
            setSuccessMessage('User information updated successfully!');

            // Update localStorage after successful update
            const updatedUser = { ...user, name, email }; 
            localStorage.setItem('user', JSON.stringify(updatedUser));
            setUser(updatedUser);
            setErrorMessage(''); 

        } catch (error) {
            console.error('Error updating user information:', error);
            setErrorMessage(error.response?.data?.message || 'Failed to update user information.');
            setSuccessMessage(''); 
        }
    };

    return (
        <div className='main'>
            <h2>User Information</h2>
            {user ? (
                <div>
                    <p>Name: {user.name}</p>
                    <p>Email: {user.email}</p>
                    <button onClick={handleLogout}>Logout</button>
                    <h3>Update Information</h3>
                    {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
                    {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
                    <form onSubmit={handleUpdate}>
                        <div>
                            <label>Name:</label>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <label>Email:</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <button type="submit">Update</button>
                    </form>
                </div>
            ) : (
                <p>No user is logged in.</p>
            )}
        </div>
    );
};

export default User;
