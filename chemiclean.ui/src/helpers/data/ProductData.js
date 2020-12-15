import axios from 'axios';
import { baseUrl } from './constants.json';

const getAllProducts = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/products`)
    .then((response) => resolve(response.data))
    .catch((err) => reject(err));
});

const getSingleProduct = (productId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/products/${productId}`)
    .then((response) => resolve(response.data))
    .catch((err) => reject(err));
});
const getSingleProductWithAllReviews = (productId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/productwithreview/${productId}/reviews`)
    .then((response) => resolve(response.data))
    .catch((err) => reject);
});
const AddNewProduct = (newProduct) => axios.post(`${baseUrl}/products`, newProduct);
const removeProduct = (productId) => axios.delete(`${baseUrl}/products/${productId}`);

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getAllProducts, getSingleProduct, getSingleProductWithAllReviews, AddNewProduct, removeProduct,
};
