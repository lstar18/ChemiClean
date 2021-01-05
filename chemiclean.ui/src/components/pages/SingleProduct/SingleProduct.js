/* eslint-disable max-len */
import React from 'react';
import { Link } from 'react-router-dom';
import ProductData from '../../../helpers/data/ProductData';
import FavoritesData from '../../../helpers/data/FavoritesData';
import ReviewData from '../../../helpers/data/ReviewData';
import authData from '../../../helpers/data/AuthData';
import './SingleProduct.scss';
import ReviewCard from '../../shared/ReviewCard/ReviewCard';
import AddReview from '../Reviews/AddReview';

class SingleProduct extends React.Component {
  state = {
    product: { reviews: [] },
    addingReview: false,
  }

  getSingleProductWithReviews = () => {
    const { productId } = this.props.match.params;
    ProductData.getSingleProductWithAllReviews(productId)
      .then((response) => this.setState({ product: response }))
      .catch((err) => console.error('cannot get product with reviews', err));
  }

  componentDidMount() {
    this.getSingleProductWithReviews();
  }

   addToFavorites = (e) => {
     e.preventDefault();
     const { productId } = this.props.match.params;
     console.error(productId);
     FavoritesData.addSingleFavoriteProduct(productId)
       .then(() => this.props.history.push(`/Products/${productId}`))
       .catch((err) => console.error('cannot add favorites to favorites table', err));
     // eslint-disable-next-line no-alert
     alert('Your favorite has been added!');
   }

   reviewSaved = () => {
     this.setState({ addingReview: false });
     this.getSingleProductWithReviews();
   }

   removeReview = (reviewId) => {
     ReviewData.removeReview(reviewId)
       .then(() => this.getSingleProductWithReviews())
       .catch((err) => console.error('cannot remove product', err));
   }

   render() {
     const { product } = this.state;
     const buildreviews = product.reviews.map((review, index) => (
      <ReviewCard key={index} review={review} product={product} removeReview={this.removeReview} Uid={authData.getUid()}/>
     ));

     const reviewForm = () => {
       if (this.state.addingReview) {
         return <AddReview onSave={this.reviewSaved} product={product}></AddReview>;
       }
       return <></>;
     };

     const AllProductLink = '/AllProducts';
     return (
      <div>
        <div className="SingleProduct d-flex flex-wrap justify-content-around mt-5">
        <div className="row">
          <div className="SingleProduct-image col-6">
            <img className="card-img-top" alt={product.title} src={product.imageUrl} />
          </div>
          <div className="SingleProduct-details col-4">
            <h2> {product.title} </h2>
            <h3>EWG Rating: {product.rating}</h3>
            <p>Product Description: {product.description}</p>
            <Link className="back-to-product-button btn btn-outline-dark text center col-12" to={AllProductLink}> Back to All Products:  <i class="fas fa-arrow-circle-left"></i> </Link>
            <button className="add-to-favorites-button btn btn-outline-danger col-5 mt-4 mr-1 " onClick={this.addToFavorites}>  Favorite <i className="fas fa-heart"></i></button>
            <button type="submit" class="add-review-button btn btn-outline-dark col-5 mt-4 ml-1" onClick={() => this.setState({ addingReview: true })}> Add Review <i className="fas fa-plus"></i></button>
            {reviewForm()}
            <div className="ReviewProduct-details col-10 mt-3 mr-3">
            <h2 className="reivew-header mb-3 col-11 offset-2">  Reviews: </h2>
              {buildreviews}
            </div>
          </div>
        </div>
        </div>
      </div>
     );
   }
}
export default SingleProduct;
