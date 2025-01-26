import { fetchImages } from './pixabay-api.js';
import {
  renderGallery,
  showErrorMessage,
  showLoadingIndicator,
  hideLoadingIndicator,
} from './render-functions.js';

import { lightbox } from './lightbox-api.js';
import { itemsPerPage } from './pixabay-config.js';

import { loadMoreBtn } from './refs.js';

function smoothScroll() {
  const firstGalleryItem = document.querySelector('.gallery-item');
  if (firstGalleryItem) {
    const itemHeight = firstGalleryItem.getBoundingClientRect().height;
    window.scrollBy({
      top: itemHeight * 2,
      behavior: 'smooth',
    });
  }
}

export async function loadImagesForPage(query, page) {
  showLoadingIndicator();

  try {
    const { hits: images, totalHits } = await fetchImages(query, page);
    const totalPages = Math.ceil(totalHits / itemsPerPage);

    renderGallery(images);
    lightbox.refresh();
    smoothScroll();

    if (page >= totalPages) {
      loadMoreBtn.classList.add('is-hidden');
      return;
    }
  } catch (error) {
    showErrorMessage('Oops, something went wrong. Please try again later.');
  } finally {
    hideLoadingIndicator();
  }
}
