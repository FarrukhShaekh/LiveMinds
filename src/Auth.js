// src/Auth.js
import React, { useState } from 'react';
import axios from 'axios';

const Auth = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLogin, setIsLogin] = useState(true);
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (isLogin) {
                const response = await axios.post('http://localhost:4000/api/login', {
                    username,
                    password,
                });
                const token = response.data.token;
                onLogin(token); // Pass token to the main app
            } else {
                await axios.post('http://localhost:4000/api/register', {
                    username,
                    password,
                });
                setIsLogin(true);
                setError('Registration successful! You can now log in.');
            }
        } catch (err) {
            setError(err.response?.data || 'Something went wrong');
        }
    };

    return (
        <div>
            <h2>{isLogin ? 'Login' : 'Register'}</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">{isLogin ? 'Login' : 'Register'}</button>
            </form>
            <button onClick={() => setIsLogin(!isLogin)}>
                Switch to {isLogin ? 'Register' : 'Login'}
            </button>
        </div>
    );
};

export default Auth;