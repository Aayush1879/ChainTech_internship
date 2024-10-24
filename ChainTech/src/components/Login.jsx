import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 
import './base.css'
const Login = () => {
    const [email, setEmail] = useState('');//email
    const [password, setPassword] = useState(''); //password
    const navigate = useNavigate();
    const [error, setError] = useState(''); //error
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/login', { email, password });
            console.log(response.data);
            // Store user info in localStorage
            localStorage.setItem('user', JSON.stringify(response.data.user));
            // Redirect to user information page
            navigate('/user');
        } catch (error) {
            console.error('Login error:', error);
            setError('Login failed');
        }
    };

    return (
        <div className='main'>
            <h2>Login</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email :  </label>
                    <input 
                        type="email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Password :  </label>
                    <input 
                        type="password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" >Login</button>
            </form>
        </div>
    );
};

export default Login;
