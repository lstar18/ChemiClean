import React from 'react';
import './AllProducts.scss';
import ProductData from '../../../helpers/data/ProductData';
import ProductCard from '../../shared/ProductCard/ProductCard';
import authData from '../../../helpers/data/AuthData';

class AllProducts extends React.Component {
  state = {
    products: [],
  }

  getProducts = () => {
    ProductData.getAllProducts()
      .then((response) => { this.setState({ products: response }); })
      .catch((err) => console.error('cannot get products', err));
  }

  componentDidMount() {
    this.getProducts();
  }

  removeProduct = (productId) => {
    ProductData.removeProduct(productId)
      .then(() => this.getProducts())
      .catch((err) => console.error('cannot remove product', err));
  }

  render() {
    const { products } = this.state;
    const buildProductPage = products.map((product, index) => (
      <ProductCard key={index} product={product} removeProduct={this.removeProduct} Uid={authData.getUid()}/>
    ));
    return (
      <div className="AllProducts">
        <div class="jumbotron jumbotron-fluid">
            <div class="container">
            <h1 class="display-4">Products</h1>
            <div className="ProductContainer d-flex flex-wrap row-3 justify-content-around">
            {buildProductPage}
            </div>
            </div>
          </div>
      </div>
    );
  }
}
export default AllProducts;
