// src/pages/HomePage.js
import React from 'react';
import SignupForm from '../components/SignupForm';
import LoginForm from '../components/LoginForm';
import ProductForm from '../components/ProductFormForm';

const HomePage = () => {
    return (
        <div>
            <h1>Welcome to the Home Page</h1>
            <SignupForm />
            <LoginForm />
            <ProductForm />
        </div>
    );
};

export default HomePage;