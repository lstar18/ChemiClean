import PropTypes from 'prop-types';

const ProductShape = PropTypes.shape({
  productId: PropTypes.number.isRequired,
  uid: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired,
});
export default { ProductShape }; //eslint-disable-line
