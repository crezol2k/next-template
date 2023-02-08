import { ENV } from '@/declares/env';
import { LocalStorageKey } from '@/declares/interfaces/local-storage';
import axios, { AxiosResponse } from 'axios';

const axiosClient = axios.create({
  baseURL: `${ENV.API_URL}`,
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
  },
});

axiosClient.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axiosClient.interceptors.request.use(function (config) {
  const token = localStorage.getItem(LocalStorageKey.AccessToken);
  if (token && config && config.headers) {
    config.headers.Authorization = token;
  }
  return config;
});

export default axiosClient;
