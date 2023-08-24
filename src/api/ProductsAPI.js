import { api } from './configs/axiosConfigs';

export const fetchAllProducts = async () => {
  const res = await api.get('/');
  return res.data;
};
