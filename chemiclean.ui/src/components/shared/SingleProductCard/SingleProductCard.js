// /* eslint-disable jsx-a11y/img-redundant-alt */
// import React from 'react';
// import { Link } from 'react-router-dom';
// import ProductShape from '../../../helpers/propz/ProductShape';

// import './SingleProductCard.scss';

// class SingleProductCard extends React.Component {
//   static propTypes = {
//     product: ProductShape.ProductShape,
//   }

//   render() {
//     const { product } = this.props;
//     const { productLink } = `products/${product.ProductId}`;

//     return (
//       <div className="ProductCard d-flex flex-wrap justify-content-center co-12">
//         <div className="card-body text-center">
//           <h4 className="card-title">{product.title}</h4>
//           <img className="card-img" alt="Picture of the product" src={product.imageUrl} />
//           <h3 className="card-detail"> EWG Rating: {product.rating} </h3>
//           <Link className="view-single-product-button btn btn-outline-dark" to={productLink}> Product Details  <i className="fas fa-eye"></i> </Link>
//         </div>
//      </div>
//     );
//   }
// }
// export default SingleProductCard;