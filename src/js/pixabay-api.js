import axios from 'axios';

export const BASE_URL = 'https://pixabay.com/api/';
export const API_KEY = '48226781-c314bf294542f2e13595e23de';

export async function fetchImages(query, page = 1, perPage = 15) {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        key: API_KEY,
        q: query,
        page,
        per_page: perPage,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch images');
  }
}
