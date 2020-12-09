import React from 'react';
import moment from 'moment';
import ProductWithReviewShape from '../../../helpers/propz/ProductWithReviewShape';

class ReviewCard extends React.Component {
  static propTypes = {
    review: ProductWithReviewShape.ProductWithReviewShape,
  }

  render() {
    const { review } = this.props;

    return (
      <div className="card border-dark mb-3">
      <div className="card-header"> <h5 className="text-center" >{review.reviewTitle} </h5> </div>
      <h5 className="card-title text-center"> {review.review} </h5>
      <p className="card-text text-center"> {moment(review.datePosted).format('LL')} </p>
      </div>
    );
  }
}
export default ReviewCard;
