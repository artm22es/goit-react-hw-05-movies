import axios from 'axios';

const API_KEY = '879ff30e220a7b6f7fd01273465d82d0';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.headers.common['Authorization'] = API_KEY;

export const fetchTrends = async () => {
  const { data } = await axios.get('/trending/get-trending');
  return data;
};
