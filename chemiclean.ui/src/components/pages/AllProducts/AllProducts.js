import React from 'react';
import './AllProducts.scss';
import ProductData from '../../../helpers/data/ProductData';
import ProductCard from '../../shared/ProductCard/ProductCard';

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

  render() {
    const { products } = this.state;
    const buildProductPage = products.map((product, index) => (
      <ProductCard key={index} product={product} />
    ));
    return (
      <div className="AllProducts text-center">
        <h2> Products </h2>
        <div className="ProductContainer d-flex flex-wrap justify-content-around">
          {buildProductPage}
        </div>
      </div>
    );
  }
}
export default AllProducts;