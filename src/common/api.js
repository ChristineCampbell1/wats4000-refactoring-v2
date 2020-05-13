import axios from 'axios';

export const API = axios.create({
  baseURL: `//api.openweathermap.org/data/2.5/`
})
API.interceptors.request.use(function (config) {
    // Set common parameters on each request
    config.params.APPID = 'bb25314bc21d94ef0c8c885b108054a0';
    config.params.units = 'imperial';
    return config;
  }, function (error) {
    return Promise.reject(error);
  });