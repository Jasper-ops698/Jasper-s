// src/App.js
import React, { useState } from 'react';
import SignupForm from './components/SignupForm';
import LoginForm from './components/LoginForm';
import Modal from './components/Modal';

function App() {
    const [showSignup, setShowSignup] = useState(false);
    const [showLogin, setShowLogin] = useState(false);

    return (
        <div className="App">
            <h1>Welcome to Our Website</h1>
            <button onClick={() => setShowSignup(true)}>Sign Up</button>
            <button onClick={() => setShowLogin(true)}>Log In</button>

            <Modal show={showSignup} onClose={() => setShowSignup(false)}>
                <SignupForm />
            </Modal>

            <Modal show={showLogin} onClose={() => setShowLogin(false)}>
                <LoginForm />
            </Modal>
        </div>
    );
}

export default App;