import React from 'react';
import { Link } from 'react-router-dom';
import ProductData from '../../../helpers/data/ProductData';
import './SingleProduct.scss';
// import SingleProductCard from '../../shared/SingleProductCard/SingleProductCard';

class SingleProduct extends React.Component {
  state = {
    product: {},
    reviews: [],
  }

  getSingleProduct = () => {
    const { productId } = this.props.match.params;
    ProductData.getSingleProduct(productId)
      .then((resp) => this.setState({ product: resp }))
      .catch((err) => console.error('Could not get single product', err));
    console.error(this.state);
  }

  componentDidMount() {
    this.getSingleProduct();
  }

  render() {
    const { product } = this.state;
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
            <p> Review of Product: </p>
            <Link className="back-to-product-button btn btn-outline-dark" to={AllProductLink}> <i class="fas fa-arrow-circle-left"></i> </Link>
          </div>
        </div>
        </div>
      </div>
    );
  }
}
export default SingleProduct;
