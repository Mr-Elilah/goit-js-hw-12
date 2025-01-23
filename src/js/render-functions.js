import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

export function showErrorMessage(message) {
  iziToast.error({
    title: 'Error',
    message: message,
  });
}

export function showSuccessMessage(message) {
  iziToast.success({
    title: 'Success',
    message: message,
  });
}

export function renderGallery(images) {
  const gallery = document.querySelector('.gallery');
  const markup = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => {
        return `
        <li class="gallery-item">
          <a href="${largeImageURL}">
            <img src="${webformatURL}" alt="${tags}" loading="lazy" />
            <div class="info">
              <p class="info-item">
                <b>Likes:</b> ${likes}
              </p>
              <p class="info-item">
                <b>Views:</b> ${views}
              </p>
              <p class="info-item">
                <b>Comments:</b> ${comments}
              </p>
              <p class="info-item">
                <b>Downloads:</b> ${downloads}
              </p>
            </div>
          </a>
        </li>
      `;
      }
    )
    .join('');

  gallery.innerHTML = markup;
}

export function showLoadingIndicator() {
  const loader = document.querySelector('.loader');
  if (loader) {
    loader.classList.add('show');
  } else {
    console.error('Loader not found!');
  }
}

export function hideLoadingIndicator() {
  const loader = document.querySelector('.loader');
  if (loader) {
    loader.classList.remove('show');
  } else {
    console.error('Loader not found!');
  }
}
