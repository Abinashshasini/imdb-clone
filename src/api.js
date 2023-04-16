import {
  API_URL,
  API_KEY,
  REQUEST_TOKEN_URL,
  LOGIN_URL,
  SESSION_ID_URL,
  TRENDING_MOVIES_BASE_URL,
  TOPRATED_BASE_URL,
  POPULAR_PERSON_BASE_URL,
  SEARCH_BASE_URL,
} from './config';

const defaultConfig = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
};

const apiSettings = {
  // * Trending movies or tv shows * //
  fetchTrendingMovies: async (type) => {
    const endpoint = `${TRENDING_MOVIES_BASE_URL}/${type}?api_key=${API_KEY}`;
    return await (
      await fetch(endpoint, { next: { revalidate: 10000 } })
    ).json();
  },

  // * Top rated movies * //
  fetchTopRatedMovies: async () => {
    const endpoint = `${TOPRATED_BASE_URL}`;
    return await (
      await fetch(endpoint, { next: { revalidate: 10000 } })
    ).json();
  },
  // * Popular Persons * //
  fetchPopularPersons: async () => {
    const endpoint = `${POPULAR_PERSON_BASE_URL}`;
    return await (
      await fetch(endpoint, { next: { revalidate: 10000 } })
    ).json();
  },

  // * Popular movie or tv shows * //
  fetchWhatsPopular: async (type, page) => {
    const endpoint = `${API_URL}${type}/popular?api_key=${API_KEY}&page=${page}`;
    return await (
      await fetch(endpoint, { next: { revalidate: 10000 } })
    ).json();
  },

  // * Search movies tv shows or persons * //
  fetchSearchResults: async (searchTerm, page) => {
    const endpoint = `${SEARCH_BASE_URL}&query=${searchTerm}&page=${page}`;
    return await (
      await fetch(endpoint, { next: { revalidate: 10000 } })
    ).json();
  },

  // * Movie or Tv Shows details API's * //
  fetchMovieOrTvDetails: async (type, id) => {
    const endpoint = `${API_URL}${type}/${id}?api_key=${API_KEY}`;
    return await (
      await fetch(endpoint, { next: { revalidate: 10000 } })
    ).json();
  },

  fetchMovieOrTvVideos: async (type, id) => {
    const endpoint = `${API_URL}${type}/${id}/videos?api_key=${API_KEY}`;
    return await (
      await fetch(endpoint, { next: { revalidate: 10000 } })
    ).json();
  },

  fetchMovieOrTvCredits: async (type, id) => {
    const endpoint = `${API_URL}${type}/${id}/credits?api_key=${API_KEY}`;
    return await (
      await fetch(endpoint, { next: { revalidate: 10000 } })
    ).json();
  },

  fetchMovieOrTvSimilar: async (type, id) => {
    const endpoint = `${API_URL}${type}/${id}/similar?api_key=${API_KEY}`;
    return await (
      await fetch(endpoint, { next: { revalidate: 10000 } })
    ).json();
  },

  fetchMovieOrTvRecomendation: async (type, id) => {
    const endpoint = `${API_URL}${type}/${id}/recommendations?api_key=${API_KEY}`;
    return await (
      await fetch(endpoint, { next: { revalidate: 10000 } })
    ).json();
  },

  fetchMovieOrTvReviews: async (type, id) => {
    const endpoint = `${API_URL}${type}/${id}/reviews?api_key=${API_KEY}`;
    return await (
      await fetch(endpoint, { next: { revalidate: 10000 } })
    ).json();
  },

  // * Login and authentication * //
  getRequestToken: async () => {
    const reqToken = await (await fetch(REQUEST_TOKEN_URL)).json();
    return reqToken.request_token;
  },

  authenticate: async (requestToken, username, password) => {
    const bodyData = {
      username,
      password,
      request_token: requestToken,
    };
    // First authenticate the requestToken
    const data = await (
      await fetch(LOGIN_URL, {
        ...defaultConfig,
        body: JSON.stringify(bodyData),
      })
    ).json();
    // Then get the sessionId with the requestToken
    if (data.success) {
      const sessionId = await (
        await fetch(SESSION_ID_URL, {
          ...defaultConfig,
          body: JSON.stringify({ request_token: requestToken }),
        })
      ).json();
      return sessionId;
    }
  },

  rateMovie: async (sessionId, movieId, value) => {
    const endpoint = `${API_URL}movie/${movieId}/rating?api_key=${API_KEY}&session_id=${sessionId}`;

    const rating = await (
      await fetch(endpoint, {
        ...defaultConfig,
        body: JSON.stringify({ value }),
      })
    ).json();

    return rating;
  },
};

export default apiSettings;
