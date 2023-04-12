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
  fetchTrendingMovies: async (type) => {
    const endpoint = `${TRENDING_MOVIES_BASE_URL}/${type}?api_key=${API_KEY}`;
    return await (
      await fetch(endpoint, { next: { revalidate: 10000 } })
    ).json();
  },

  fetchTopRatedMovies: async () => {
    const endpoint = `${TOPRATED_BASE_URL}`;
    return await (
      await fetch(endpoint, { next: { revalidate: 10000 } })
    ).json();
  },

  fetchPopularPersons: async () => {
    const endpoint = `${POPULAR_PERSON_BASE_URL}`;
    return await (
      await fetch(endpoint, { next: { revalidate: 10000 } })
    ).json();
  },

  fetchWhatsPopular: async (type, page) => {
    const endpoint = `${API_URL}${type}/popular?api_key=${API_KEY}&page=${page}`;
    return await (
      await fetch(endpoint, { next: { revalidate: 10000 } })
    ).json();
  },

  fetchSearchResults: async (searchTerm, page) => {
    const endpoint = `${SEARCH_BASE_URL}&query=${searchTerm}&page=${page}`;
    return await (await fetch(endpoint, { next: { revalidate: 10 } })).json();
  },

  fetchMovie: async (movieId) => {
    const endpoint = `${API_URL}movie/${movieId}?api_key=${API_KEY}`;
    return await (await fetch(endpoint)).json();
  },

  fetchMovieVideo: async (movieId) => {
    const endpoint = `${API_URL}movie/${movieId}?api_key=${API_KEY}`;
    return await (await fetch(endpoint)).json();
  },  

  fetchCredits: async (movieId) => {
    const creditsEndpoint = `${API_URL}movie/${movieId}/videos?api_key=${API_KEY}`;
    return await (await fetch(creditsEndpoint)).json();
  },

  // Bonus material below for login
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
