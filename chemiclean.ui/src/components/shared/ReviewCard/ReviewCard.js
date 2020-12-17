import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import ProductWithReviewShape from '../../../helpers/propz/ProductWithReviewShape';

class ReviewCard extends React.Component {
  static propTypes = {
    review: ProductWithReviewShape.ProductWithReviewShape,
    removeReview: PropTypes.func.isRequired,
  }

  render() {
    const { review, removeReview, Uid } = this.props;
    const UserDeleteReview = () => {
      if (review.uid === Uid) {
        return <button className="delete-review-button btn btn-outline-danger col-4 mb-3" onClick={() => removeReview(review.reviewId)}> <i className="fas fa-trash"> </i>  </button>;
      }
      return <></>;
    };
    return (
      < div className="reviewCard col-9 offset-3 mb-5">
        <h5 className="text-center" >{review.reviewTitle} </h5>
        <p className="card-title text-center"> "{review.review}"" </p>
        <p className="card-text text-center"> {moment(review.datePosted).format('LL')} </p>
      {UserDeleteReview()}
      </div>
    );
  }
}
export default ReviewCard;
