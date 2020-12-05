import axios from 'axios';
import { baseUrl } from './constants.json';

const getAllProducts = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/products`)
    .then((response) => resolve(response.data))
    .catch((err) => reject(err));
});

// eslint-disable-next-line import/no-anonymous-default-export
export default { getAllProducts };
