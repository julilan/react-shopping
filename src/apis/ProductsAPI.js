import { api } from './configs/axiosConfigs';

export const fetchAllProducts = async () => {
  const res = await api.get('/');
  return res.data;
};

export const fetchProductById = async (id) => {
  const res = await api.get(`/${id}`);
  return res.data;
};
