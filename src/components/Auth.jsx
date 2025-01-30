import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import contextApp from './context/context.jsx';
import './Auth.css'
const Auth = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLogin, setIsLogin] = useState(true);
    const { setIsAuthenticated } = useContext(contextApp);
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const url = isLogin ? 'http://localhost:5000/api/login' : 'http://localhost:5000/api/register';
        try {
            const response = await axios.post(url, { username, password });
            alert(response.data.message || 'Success ');
            if (isLogin) {
                setIsAuthenticated(true);
                navigate('/');
            }
        } catch (error) {
            console.error(error);
            alert(error.response?.data?.message || 'Authentication error');
        }
    };

    return (
        <div className='auth-container'>
            <h2>{isLogin ? 'Login' : 'Register'}</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username:</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">{isLogin ? 'Login' : 'Register'}</button>
            </form>
            <button className='toggle-button' onClick={() => setIsLogin(!isLogin)}>
                {isLogin ? 'Switch to Register' : 'Switch to Login'}
            </button>
        </div>
    );
};

export default Auth;