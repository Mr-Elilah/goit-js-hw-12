import { fetchImages } from './js/pixabay-api.js';
import {
  renderGallery,
  showErrorMessage,
  showSuccessMessage,
  showLoadingIndicator,
  hideLoadingIndicator,
} from './js/render-functions.js';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { setPaginationButtons } from './js/custom.js';

const searchForm = document.querySelector('.search-form');
const searchInput = document.querySelector('.search-input');

searchForm.addEventListener('submit', onSearch);

function onSearch(event) {
  event.preventDefault();

  const query = searchInput.value.trim();
  if (query === '') {
    showErrorMessage('Please enter a search query.');
    return;
  }

  input.value = '';
  localStorage.clear();

  showLoadingIndicator();

  fetchImages(query)
    .then(images => {
      hideLoadingIndicator();
      if (images.length === 0) {
        showErrorMessage(
          'Sorry, there are no images matching your search query. Please try again!'
        );
        return;
      }

      renderGallery(images);
      showSuccessMessage('Images loaded successfully!');

      const lightbox = new SimpleLightbox('.gallery a', {
        captionsData: 'alt',
        captionDelay: 250,
      });
      lightbox.refresh();

      setPaginationButtons(query);
    })
    .catch(error => {
      hideLoadingIndicator();
      showErrorMessage('Oops, something went wrong. Please try again later.');
    });
}

// search-input box-shadow
const input = document.querySelector('.search-input');

input.addEventListener('input', () => {
  if (input.value.trim() !== '') {
    input.classList.remove('empty');
    input.classList.add('filled');
  } else {
    input.classList.remove('filled');
    input.classList.add('empty');
  }
});
