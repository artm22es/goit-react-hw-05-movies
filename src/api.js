import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = '879ff30e220a7b6f7fd01273465d82d0';

export const fetchTrends = async () => {
  const { data } = await axios.get(`/trending/all/day?api_key=${API_KEY}`);
  return data;
};

export const fetchMovieDetails = async id => {
  const { data } = await axios.get(`/movie/${id}?api_key=${API_KEY}`);
  return data;
};

export const fetchMovieCast = async id => {
  const { data } = await axios.get(`/movie/${id}/credits?api_key=${API_KEY}`);
  return data.cast;
};

export const fetchMovieReviews = async id => {
  const { data } = await axios.get(`/movie/${id}/reviews?api_key=${API_KEY}`);
  return data.results;
};

// export const fetchMovieByName = async name => {
//   const { data } = await axios.get(`/search/movie?api_key=${API_KEY}&query=${name}`);
//   return data.results;
// };
