import api from './axios';

export const fetcher = async url => {
  try {
    const { data } = await api.get(url);
    return data;
  } catch (error) {
    throw error?.response?.data;
  }
};
