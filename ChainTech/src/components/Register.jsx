import React, { useState } from 'react';
import axios from 'axios';
import './base.css'; 
import { useNavigate } from 'react-router-dom'; 

export default function Register() {
    const [name, setName] = useState(''); // Name input
    const [email, setEmail] = useState(''); // Email input
    const [password, setPassword] = useState(''); // Password input
    const [error, setError] = useState(''); // Error message state
    const [success, setSuccess] = useState(''); // Success message state

    // Initialize useNavigate hook for programmatic navigation
    const navigate = useNavigate(); 

    const handleSubmit = async (e) => {
        e.preventDefault(); 
        try {
            // Make a POST request to the backend for registration
            const response = await axios.post('http://localhost:5000/register', {
                name,
                email,
                password,
            });
            console.log(response.data); 
            
            // Set success message after successful registration
            setSuccess('User registered successfully!');
            
            // Clearing input fields after successful registration
            setName('');
            setEmail('');
            setPassword('');
            
            // Redirecting to the login page after registration
            navigate('/login');

        } catch (error) {
            console.error('Error registering user:', error.response?.data || error.message);
            // error message if registration fails
            setError('Registration failed');
        }
    };

    return (
        <div className='main main1'> 
            <h2>Register</h2>
            {/* Displaying messages of success and errors (whenever needed) */}
            {error && <p style={{ color: 'red' }}>{error}</p>} 
            {success && <p style={{ color: 'green' }}>{success}</p>} 
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)} // Update name state on input change
                    required 
                    style={{ margin: 5 }} 
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} // Update email state on input change
                    required 
                    style={{ margin: 5 }} 
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} // Update password state on input change
                    requiredd
                    style={{ margin: 5 }} 
                />
                <button type="submit" style={{ display: 'flex', justifyContent: 'center', marginTop: 5 }}>
                    Submit 
                </button>
            </form>
        </div>
    );
}
