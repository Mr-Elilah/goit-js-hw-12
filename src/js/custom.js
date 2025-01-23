import { fetchImages } from './pixabay-api.js';
import {
  renderGallery,
  showErrorMessage,
  showLoadingIndicator,
  hideLoadingIndicator,
} from './render-functions.js';

import { BASE_URL, API_KEY } from './pixabay-api.js';

let currentPage = 1;
const itemsPerPage = 12;

export function loadImagesForPage(query, page) {
  const url = `${BASE_URL}?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${itemsPerPage}`;

  showLoadingIndicator();

  fetchImages(url)
    .then(images => {
      hideLoadingIndicator();
      if (images.length === 0) {
        showErrorMessage(
          'Sorry, there are no images matching your search query. Please try again!'
        );
        return;
      }

      renderGallery(images);

      const prevButton = document.querySelector('.prev');
      const nextButton = document.querySelector('.next');

      if (currentPage > 1) {
        prevButton.style.display = 'inline-block';
      } else {
        prevButton.style.display = 'none';
      }

      if (images.length === itemsPerPage) {
        nextButton.style.display = 'inline-block';
      } else {
        nextButton.style.display = 'none';
      }
    })
    .catch(error => {
      hideLoadingIndicator();
      showErrorMessage('Oops, something went wrong. Please try again later.');
    });
}

export function setPaginationButtons(query) {
  const prevButton = document.querySelector('.prev');
  const nextButton = document.querySelector('.next');

  prevButton.addEventListener('click', () => {
    if (currentPage > 1) {
      currentPage -= 1;
      loadImagesForPage(query, currentPage);
    }
  });

  nextButton.addEventListener('click', () => {
    currentPage += 1;
    loadImagesForPage(query, currentPage);
  });
}
