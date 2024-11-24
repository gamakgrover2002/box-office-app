const BASE_URL = 'https://api.tvmaze.com';

const apiGet = async queryString => {
  const response = await fetch(`${BASE_URL}${queryString}`);
  const data = await response.json();
  return data;
};

export const searchShows = async query => {
  return apiGet(`/search/shows?q=${query}`);
};

export const searchCast = query => {
  return apiGet(`/search/people?q=${query}`);
};

export const getShowData = showId => {
  return apiGet(`/shows/${showId}`);
};
