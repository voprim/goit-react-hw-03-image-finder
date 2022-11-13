const params = {
  currentPage: 1,
  searchQuery: '',
  method: 'get',
  baseURL: 'https://pixabay.com/api/',
  paramsImage: '&image_type=photo',
  API: '30147875-1b32fddb16ed51bfbd356d818',
};

export const fetchImagesApi = ( currentPage, searchQuery ) => {
  return fetch(
    `${params.baseURL}?key=${params.API}&q=${searchQuery}&${params.paramsImage}&page=${currentPage}`
    )
    .then(responce => {
      if (responce.ok) {
        return responce.json();
      }
      return Promise.reject(new Error(`Oh no... We cant find ${searchQuery}`));
    })
    .then(res => {
      return res.hits;
    });
};