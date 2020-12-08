/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import { Link } from 'react-router-dom';
import ProductShape from '../../../helpers/propz/ProductShape';

import './ProductCard.scss';

class ProductCard extends React.Component {
  static propTypes = {
    product: ProductShape.ProductShape,
  }

  render() {
    const { product } = this.props;
    const productLink = `Product/${product.productId}`;

    return (
      <div className="ProductCard d-flex flex-wrap justify-content-center co-12">
        <div className="card-body text-center">
          <h3 className="card-title">{product.title}</h3>
          <img className="card-img mb-3" alt={product.title} src={product.imageUrl} />
          <h5 className="card-detail"> EWG Rating: {product.rating} </h5>
          <Link className="view-single-product-button btn btn-outline-dark" to={productLink}> Product Details  <i className="fas fa-eye"></i> </Link>
        </div>
     </div>
    );
  }
}
export default ProductCard;