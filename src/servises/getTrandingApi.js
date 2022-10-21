import axios from 'axios';

const config = {
  url: '/trending/movie/week',
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: '65573c76cf88d807ccbaf09ca79feb15',
  },
};

export const getTrandingApi = async () => {
  const response = await axios(config);
  return response.data.results;
};

