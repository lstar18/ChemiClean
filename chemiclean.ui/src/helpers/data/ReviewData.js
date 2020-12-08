import axios from 'axios';
import { baseUrl } from './constants.json';

const getAllReviews = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/reviews`)
    .then((response) => resolve(response.data))
    .catch((err) => reject(err));
});

const getSingleReview = (reviewId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/reviews/${reviewId}`)
    .then((response) => resolve(response.data))
    .catch((err) => reject(err));
});
// eslint-disable-next-line import/no-anonymous-default-export
export default { getAllReviews, getSingleReview };
