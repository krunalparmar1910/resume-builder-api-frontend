// src/utils/axiosInstance.js
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:9091/api', // Change this to your backend URL
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.request.use((config) => {
  // console.log('Request Config:', config); // Debugging
  if (config.url !== '/auth/login') {
    const token = localStorage.getItem('token');
    if (token) {
      // console.log('Adding Token:', token); // Debugging
      config.headers.Authorization = `Bearer ${token}`;
    }
  }
  return config;
}, (error) => {
  // console.error('Request Error:', error); // Debugging
  return Promise.reject(error);
});


export default axiosInstance;
