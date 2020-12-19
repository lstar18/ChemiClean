import PropTypes from 'prop-types';

const ReviewShape = PropTypes.shape({
  reviewId: PropTypes.number.isRequired,
  uid: PropTypes.string.isRequired,
  review: PropTypes.string.isRequired,
  reviewTitle: PropTypes.string.isRequired,
  datePosted: PropTypes.number.isRequired,
  productId: PropTypes.number.isRequired,
});
// eslint-disable-next-line import/no-anonymous-default-export
export default { ReviewShape };
