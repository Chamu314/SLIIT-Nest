import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api', // Backend base URL
  withCredentials: true, // Crucial for sending setting httpOnly cookies
});

export default api;
