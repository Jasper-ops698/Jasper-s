// src/components/SignupForm.js
import React, { useState } from 'react';
import axios from 'axios';

const SignupForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/signup', { username, password });
            setMessage(response.data.message);
        } catch (error) {
            setMessage("Signup failed: " + error.response?.data?.message || error.message);
        }
    };

    return (
        <form onSubmit={handleSignup}>
            <h2>Sign Up</h2>
            <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            <button type="submit">Sign Up</button>
            {message && <p>{message}</p>}
        </form>
    );
};

export default SignupForm;