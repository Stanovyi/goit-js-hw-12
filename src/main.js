import { getImages } from './js/pixabay-api.js';
import { createList, showLoader, hiddeLoader } from './js/render-functions.js';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

let page = 1;
let lightbox;

const form = document.querySelector('.search-form');
const input = document.querySelector('.search-form-input');
const button = document.querySelector('.search-form-button');
const list = document.querySelector('.images-list');
const buttonLoad = document.querySelector('.button-load');

form.addEventListener('submit', onSubmit);
buttonLoad.addEventListener('click', loadMoreImages);

async function onSubmit(e) {
  e.preventDefault();
  showLoader();

  const searchQuery = e.currentTarget.elements.search.value.trim();

  try {
    const response = await getImages(searchQuery, page);
    if (response.hits.length === 0) {
      iziToast.error({
        position: 'topRight',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
      });
    } else {
      list.innerHTML = createList(response.hits);
      lightbox = new SimpleLightbox('.images-list a').refresh();

      if (response.totalHits > 15) {
        buttonLoad.classList.remove('is-hidden');
      }
    }
  } catch (error) {
    console.log(error);
  } finally {
    hiddeLoader();
  }

  input.value = '';
}

async function loadMoreImages() {
  showLoader();

  page++;

  try {
    const searchQuery = input.value.trim();
    const { hits, totalHits } = await getImages(searchQuery, page);
    list.insertAdjacentHTML('beforeend', createList(hits));
    lightbox.refresh();

    const { height: cardHeight } =
      list.firstElementChild.getBoundingClientRect();

    window.scrollBy({
      top: cardHeight * 2,
      behavior: 'smooth',
    });

    const lastPage = Math.ceil(totalHits / 15);

    if (lastPage === page) {
      buttonLoad.classList.add('is-hidden');

      iziToast.info({
        position: 'topRight',
        message: `We're sorry, but you've reached the end of results`,
        maxWidth: '432',
      });
    }
  } catch (error) {
    console.log(error);
  } finally {
    hiddeLoader();
  }
}
