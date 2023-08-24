import { notification } from 'antd';
import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://fakestoreapi.com/products',
});

const errorHandler = (error) => {
  if (error?.response?.status === 404) {
    notification.error({
      message: 'Error',
      description: 'Not found',
    });
  } else {
    notification.error({
      message: 'Error',
      description: 'Something went wrong',
    });
  }
  return Promise.reject(error);
};

api.interceptors.response.use((response) => response, errorHandler);
