import axios from 'axios';

axios.defaults.params = {
  currentPage: 1,
  searchQuery: '',
  method: 'get',
  baseURL: 'https://pixabay.com/api/',
  params: '&image_type=photo',
  API: '30147875-1b32fddb16ed51bfbd356d818',
};

export const fetchImagesApi = async ({ currentPage, searchQuery }) => {
  const { API, params } = axios.defaults.params;
  return await axios
    .get(
      `?key=${API}&q=${searchQuery}&${params}&page=${currentPage}`,
      axios.defaults.params
    )
    .then(response => response.data);
};
