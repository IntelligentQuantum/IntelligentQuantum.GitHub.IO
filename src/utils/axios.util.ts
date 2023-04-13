import axios from 'axios';

axios.defaults.withCredentials = true;

if (process.env.NODE_ENV === 'development') axios.defaults.baseURL = 'http://localhost:3000/api/';
else if (process.env.NODE_ENV === 'production') axios.defaults.baseURL = 'https://parsa-firoozi.ir/api/';
