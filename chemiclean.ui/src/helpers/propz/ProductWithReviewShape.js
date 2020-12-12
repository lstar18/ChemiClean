import PropTypes from 'prop-types';

const ProductWithReviewShape = PropTypes.shape({
  productId: PropTypes.number.isRequired,
  uid: PropTypes.string.isRequired,
  reviewTitle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired,
  reviewId: PropTypes.number.isRequired,
  reviews: PropTypes.array.isRequired,
});
export default { ProductWithReviewShape }; //eslint-disable-line
