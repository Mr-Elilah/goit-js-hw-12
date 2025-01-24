export const BASE_URL = 'https://pixabay.com/api/';
export const API_KEY = '48226781-c314bf294542f2e13595e23de';

export function fetchImages(query, pageNum = 1) {
  const url = `${BASE_URL}?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&per_page=12&page=${pageNum}`;

  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to fetch images');
      }
      return response.json();
    })
    .then(data => data)
    .catch(error => {
      throw new Error(error.message);
    });
}
