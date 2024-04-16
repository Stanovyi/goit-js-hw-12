import axios from 'axios';

const API_KEY = '43416172-86a986f8fd379e5189cb30c8e';
const BASE_URL = 'https://pixabay.com/api/';

export async function getImages(query, page) {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        page,
        per_page: 15,
      },
    });
    if (!response.data.hits.length) {
      throw new Error('No images found');
    }
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
}
