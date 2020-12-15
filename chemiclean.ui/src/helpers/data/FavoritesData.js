import axios from 'axios';
import { baseUrl } from './constants.json';

const addSingleFavoriteProduct = (productId) => axios.post(`${baseUrl}/favorites/${productId}`, productId);

// eslint-disable-next-line import/no-anonymous-default-export
export default { addSingleFavoriteProduct };
