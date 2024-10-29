// src/services/api.js
import axios from 'axios';

export const signup = (username, password) => axios.post('/api/signup', { username, password });
export const login = (username, password) => axios.post('/api/login', { username, password });
export const addProduct = (productData) => axios.post('/api/addProduct', productData);