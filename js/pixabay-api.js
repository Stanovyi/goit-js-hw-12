const API_KEY = '43416172-86a986f8fd379e5189cb30c8e';
const BASE_URL = 'https://pixabay.com/api/';

export function getImages(query) {
  const params = new URLSearchParams({
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  const fetchData = fetch(`${BASE_URL}?${params}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    } else {
      return response.json();
    }
  });

  return fetchData;
}
