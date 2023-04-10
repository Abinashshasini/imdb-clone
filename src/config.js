// Configuration for TMDB API
const API_URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'af7d46d1e35063713f4171c68a2b965c';

const POPULAR_BASE_URL = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US`;
const POPULAR_PERSON_BASE_URL = `${API_URL}person/popular?api_key=${API_KEY}&language=en-US`;
const TOPRATED_BASE_URL = `${API_URL}movie/top_rated?api_key=${API_KEY}&language=en-US`;
const SEARCH_BASE_URL = `${API_URL}search/multi?api_key=${API_KEY}&language=en-US`;
const TRENDING_MOVIES_BASE_URL = `${API_URL}trending/all`;

// For login and voting
const REQUEST_TOKEN_URL = `${API_URL}authentication/token/new?api_key=${API_KEY}`;
const LOGIN_URL = `${API_URL}authentication/token/validate_with_login?api_key=${API_KEY}`;
const SESSION_ID_URL = `${API_URL}authentication/session/new?api_key=${API_KEY}`;

const IMAGE_BASE_URL = 'http://image.tmdb.org/t/p/';
// Sizes: w300, w780, w1280, original
const BACKDROP_SIZE = 'w1280';
// w92, w154, w185, w342, w500, w780, original
const POSTER_SIZE = 'w780';

export {
  POPULAR_BASE_URL,
  TRENDING_MOVIES_BASE_URL,
  API_URL,
  API_KEY,
  IMAGE_BASE_URL,
  BACKDROP_SIZE,
  POSTER_SIZE,
  REQUEST_TOKEN_URL,
  LOGIN_URL,
  SESSION_ID_URL,
  TOPRATED_BASE_URL,
  POPULAR_PERSON_BASE_URL,
  SEARCH_BASE_URL,
};
