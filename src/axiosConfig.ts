import axios from 'axios';
import store from './store'; // Importa el store de Vuex
import config from '@/config';

const axiosInstance = axios.create({
  baseURL: config.url, // Reemplaza con la URL de tu API
});

// Agrega un interceptor para el encabezado de autorización
axiosInstance.interceptors.request.use((config) => {
  const authToken = store.state.token; // Obtiene el token desde el estado de Vuex
  if (authToken) {
    config.headers.Authorization = `${authToken}`;
  }
  return config;
});

export default axiosInstance;