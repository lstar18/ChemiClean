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
        return <button className="delete-review-button btn btn-outline-danger mt-3 ml-4" onClick={() => removeReview(review.reviewId)}> <i className="fas fa-trash"> </i>  </button>;
      }
      return <></>;
    };
    return (
      <div className="card border-dark mb-3">
      <div className="card-header"> <h5 className="text-center" >{review.reviewTitle} </h5> </div>
      <h5 className="card-title text-center"> {review.review} </h5>
      <p className="card-text text-center"> {moment(review.datePosted).format('LL')} </p>
      {UserDeleteReview()}
      </div>
    );
  }
}
export default ReviewCard;
