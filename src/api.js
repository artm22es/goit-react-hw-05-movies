import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.headers.common['Authorization'] =
  '879ff30e220a7b6f7fd01273465d82d0';

export const fetchTrends = async () => {
  const { data } = await axios.get('/trending/get-trending');

  return data;
};
