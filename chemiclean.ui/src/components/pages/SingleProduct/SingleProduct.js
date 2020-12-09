import React from 'react';
import { Link } from 'react-router-dom';
import ProductData from '../../../helpers/data/ProductData';
import './SingleProduct.scss';
import ReviewCard from '../../shared/ReviewCard/ReviewCard';

class SingleProduct extends React.Component {
  state = {
    product: { reviews: [] },
  }

  getSingleProductWithReviews = () => {
    const { productId } = this.props.match.params;
    ProductData.getSingleProductWithAllReviews(productId)
      .then((response) => this.setState({ product: response }))
      .catch((err) => console.error('cannot get product with reviews', err));
    console.error(this.state);
  }

  componentDidMount() {
    this.getSingleProductWithReviews();
  }

  render() {
    const { product } = this.state;
    const buildreviews = product.reviews.map((review, index) => (
      <ReviewCard key={index} review={review} product={product} />
    ));
    const AllProductLink = '/AllProducts';
    return (
      <div>
        <div className="SingleProduct d-flex flex-wrap justify-content-around mt-5">
        <div className="row">
          <div className="SingleProduct-image col-8">
            <img alt={product.title} src={product.imageUrl} />
          </div>
          <div className="SingleProduct-details col-4">
            <h2> {product.title} </h2>
            <h3>EWG Rating: {product.rating}</h3>
            <p>Product Description: {product.description}</p>
            <div className="ReviewProduct-details mt-5">
            <h4> <strong> Reviews: </strong> </h4>
              {buildreviews}
            </div>
            <Link className="back-to-product-button btn btn-outline-dark text center" to={AllProductLink}> Back to All Products:  <i class="fas fa-arrow-circle-left"></i> </Link>
          </div>

        </div>
        </div>
      </div>
    );
  }
}
export default SingleProduct;
