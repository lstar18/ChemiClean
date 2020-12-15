import React from 'react';
import { Link } from 'react-router-dom';
import './AddReview.scss';
import ProductData from '../../../helpers/data/ProductData';
import authData from '../../../helpers/data/AuthData';

class AddReview extends React.Component {
  state = {
    reviewTitle: '',
    review: '',
  }

  reviewTitleChange = (e) => {
    e.preventDefault();
    this.setState({ reviewTitle: e.target.value });
  }

  reviewChange = (e) => {
    e.preventDefault();
    this.setState({ review: e.target.value });
  }

  saveNewReview = (e) => {
    e.preventDefault();
    const {
      reviewTitle,
      review,
    } = this.state;

    const newReview = {
      reviewTitle,
      review,
      uid: authData.getUid(),
    };

    ProductData.AddNewReview(newReview)
      .then(() => this.props.history.push('/Reviews/${reviewId}'))
      .catch((err) => console.error('cannot save new review', err));
    // eslint-disable-next-line no-alert
    alert('Your product has been added!');
  }

  render() {
    const {
      reviewTitle,
      review,
    } = this.state;
    const homeLink = '/home';
    return (
      <div className="NewProduct col-6 offset-3">
      <h2> Add a New Review: </h2>
      <Link className="arrow btn btn-dark mb-2" to={homeLink}> <i class="fas fa-arrow-circle-left"></i> </Link>
     <form>
       <div class="form-group">
         <label forHtml="review-title"> Title: </label>
         <input
         type="text"
         class="form-control"
         id="review-title"
         value={reviewTitle}
         onChange={this.reviewTitleChange}/>
       </div>
       <div class="form-group">
         <label forHtml="product-description">Review: </label>
         <input
         type="text"
         class="form-control"
         id="product-description"
         value={review}
         onChange={this.reviewChange}/>
       </div>
       <button type="submit" class="add-child-button btn btn-dark btn-lg" onClick={this.saveNewReview}> Save Review <i className="fas fa-plus"></i></button>
     </form>
   </div>
    );
  }
}

export default AddReview;
