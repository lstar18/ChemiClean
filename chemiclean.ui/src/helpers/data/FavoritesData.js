import axios from 'axios';
import { baseUrl } from './constants.json';

const getFavoritesByUid = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/favorites`)
    .then((response) => resolve(response.data))
    .catch((err) => reject(err));
});
const addSingleFavoriteProduct = (productId) => axios.post(`${baseUrl}/favorites/${productId}`, productId);

// eslint-disable-next-line import/no-anonymous-default-export
export default { addSingleFavoriteProduct, getFavoritesByUid };
