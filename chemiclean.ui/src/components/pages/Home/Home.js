/* eslint-disable max-len */
import React from 'react';
import ProductData from '../../../helpers/data/ProductData';

class Home extends React.Component {
  state = {
    products: [],
  }

  getProducts = () => {
    ProductData.getAllProducts()
      .then((response) => { this.setState({ products: response }); })
      .catch((err) => console.error('cannot get products', err));
  }

  render() {
    return (
    <div class="jumbotron jumbotron-fluid">
       <div class="container">
        <h1 class="display-4">Welcome To ChemiClean!</h1>
        <p class="lead">A Community of People Who Utilize Clean Products in Their Homes</p>
      </div>
    </div>
    );
  }
}
export default Home;
