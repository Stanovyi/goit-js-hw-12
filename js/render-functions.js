const loader = document.querySelector('.loader');

export function createList(arr) {
  return arr
    .map(
      image =>
        `<li class="list-item">
        <a href="${image.largeImageURL}">
          <img src="${image.webformatURL}" alt="${image.tags}">
        </a>

        <div class="list-item-info">
          <p><strong>Likes</strong> <span>${image.likes}</span></p>
          <p><strong>Views</strong> <span>${image.views}</span></p>
          <p><strong>Comments</strong> <span>${image.comments}</span></p>
          <p><strong>Downloads</strong> <span>${image.downloads}</span></p>
        </div>
      </li>`
    )
    .join('');
}

export function showLoader() {
  loader.classList.remove('is-hidden');
}

export function hiddeLoader() {
  loader.classList.add('is-hidden');
}
