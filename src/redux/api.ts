import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.upbit.com/v1/',
  headers: {
    accept: 'application/json',
  },
});

export default api;
