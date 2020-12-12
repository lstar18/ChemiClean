import axios from 'axios';
import { baseUrl } from './constants.json';

const addSingleFavoriteProduct = (favoriteId) => axios.post(`${baseUrl}/favorites/${favoriteId}`, favoriteId);

// eslint-disable-next-line import/no-anonymous-default-export
export default { addSingleFavoriteProduct };
