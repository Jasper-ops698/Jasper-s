// src/components/ProductForm.js
import React, { useState } from 'react';
import axios from 'axios';

const ProductForm = () => {
    const [productName, setProductName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [message, setMessage] = useState('');

    const handleAddProduct = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/addProduct', { productName, description, price });
            setMessage(response.data.message);
        } catch (error) {
            setMessage("Product addition failed: " + error.response?.data?.message || error.message);
        }
    };

    return (
        <form onSubmit={handleAddProduct}>
            <h2>Add Product</h2>
            <input type="text" placeholder="Product Name" value={productName} onChange={(e) => setProductName(e.target.value)} required />
            <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} required />
            <input type="number" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} required />
            <button type="submit">Add Product</button>
            {message && <p>{message}</p>}
        </form>
    );
};

export default ProductForm;