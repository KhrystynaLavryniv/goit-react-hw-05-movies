import axios from 'axios';
// axios.defaults.baseURL =
//   'https://api.themoviedb.org/3/movie/550?api_key=958a441e98a3a2e7212356a4dfcbfc32';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '958a441e98a3a2e7212356a4dfcbfc32';

export async function fetchTrandingMovies() {
  return await axios.get(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}`);
}

export async function fetchMovieById(movieId) {
  return await axios.get(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`);
}

export async function fetchMovieByQuery(value) {
  return await axios.get(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${value}&include_adult=false`
  );
}

export async function fetchMovieCredits(movieId) {
  return await axios.get(
    `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`
  );
}

export async function fetchMovieReviews(movieId) {
  return await axios.get(
    `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}`
  );
}
