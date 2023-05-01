import {
  API_URL,
  API_KEY,
  REQUEST_TOKEN_URL,
  LOGIN_URL,
  SESSION_ID_URL,
  SEARCH_BASE_URL,
} from './config';

const defaultConfig = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
};

const apiSettings = {
  // * Fetch carousel data * //
  fetchMoviesOrTvShows: async ({ type, category, page, timing }) => {
    let endpoint = '';
    if (type === 'trending') {
      endpoint = `${API_URL}${type}/${category}/${timing}?api_key=${API_KEY}&page=${page}`;
    } else {
      endpoint = `${API_URL}${type}/${category}?api_key=${API_KEY}&page=${page}`;
    }
    return await (
      await fetch(endpoint, { next: { revalidate: 10000 } })
    ).json();
  },

  // * Fetch discover media data * //
  fetchDiscoverMediaData: async ({ type, page }) => {
    const endpoint = `${API_URL}discover/${type}?api_key=${API_KEY}&page=${page}`;
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
    const endpoint = `${API_URL}${type}/${id}?api_key=${API_KEY}&append_to_response=videos,images`;
    return await (
      await fetch(endpoint, { next: { revalidate: 10000 } })
    ).json();
  },

  fetchMovieOrTvSectionData: async (type, id, _endpoint) => {
    const endpoint = `${API_URL}${type}/${id}/${_endpoint}?api_key=${API_KEY}`;
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
