/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ProductShape from '../../../helpers/propz/ProductShape';

import './ProductCard.scss';

class ProductCard extends React.Component {
  static propTypes = {
    product: ProductShape.ProductShape,
    removeProduct: PropTypes.func.isRequired,
  }

  render() {
    const { product, removeProduct, Uid } = this.props;
    const productLink = `Product/${product.productId}`;
    const UserDelete = () => {
      if (product.uid === Uid) {
        return <button className="delete-produc-button btn btn-outline-danger mt-3 ml-4" onClick={() => removeProduct(product.productId)}> <i className="fas fa-trash"> </i>  </button>;
      }
      return <></>;
    };
    return (
      <div class="productCard mb-3 d-flex flex-wrap justify-content-center col-4">
        <div class="card-body">
        <img src={product.imageUrl} className="card-img-top" alt={product.title}/>
          <h5 className="card-title text-center">{product.title}</h5>
          <p class="card-text">EWG Rating: {product.rating} </p>
          <Link className="view-single-product-button btn btn-outline-dark" to={productLink}> Product Details  <i className="fas fa-eye"></i> </Link>
          {UserDelete()}
        </div>
     </div>
    );
  }
}
export default ProductCard;
