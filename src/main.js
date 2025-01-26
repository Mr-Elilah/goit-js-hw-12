import { fetchImages } from './js/pixabay-api.js';
import {
  renderGallery,
  showErrorMessage,
  showSuccessMessage,
  showLoadingIndicator,
  hideLoadingIndicator,
} from './js/render-functions.js';
import { loadImagesForPage } from './js/pagination.js';
import { lightbox } from './js/lightbox-api.js';
import { inputHandler } from './js/input-handler.js';
import {
  gallery,
  input,
  loadMoreBtn,
  searchForm,
  searchInput,
} from './js/refs.js';

let page = 1;
let query = '';

loadMoreBtn.addEventListener('click', event => {
  page += 1;
  loadImagesForPage(query, page);
});

searchForm.addEventListener('submit', onSearch);

async function onSearch(event) {
  event.preventDefault();
  const form = event.currentTarget;
  gallery.innerHTML = '';
  query = searchInput.value.trim();
  if (query === '') {
    showErrorMessage('Please enter a search query.');
    return;
  }

  localStorage.clear();

  showLoadingIndicator();
  try {
    const { hits: images } = await fetchImages(query, page);
    hideLoadingIndicator();

    if (images.length === 0) {
      loadMoreBtn.classList.add('is-hidden');
      showErrorMessage(
        'Sorry, there are no images matching your search query. Please try again!'
      );
      return;
    }

    renderGallery(images);
    showSuccessMessage('Images loaded successfully!');
    loadMoreBtn.classList.remove('is-hidden');
    lightbox.refresh();
  } catch (error) {
    hideLoadingIndicator();
    showErrorMessage('Oops, something went wrong. Please try again later.');
  } finally {
    form.reset();
  }
}

// search-input box-shadow

input.addEventListener('input', inputHandler);
