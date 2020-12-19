/* eslint-disable max-len */
import React from 'react';
import ProductData from '../../../helpers/data/ProductData';
import FavoritesData from '../../../helpers/data/FavoritesData';
import FavoriteCard from '../../shared/FavoriteCard';
import authData from '../../../helpers/data/AuthData';

class Home extends React.Component {
  state = {
    products: [],
  }

  getFavoriteProduct = () => {
    ProductData.getFavoritesByUid()
      .then((response) => { this.setState({ products: response }); })
      .catch((err) => console.error('cannot get favorites', err));
  }

  componentDidMount() {
    this.getFavoriteProduct();
  }

  removeFavorite = (favoriteId) => {
    FavoritesData.removeFavorite(favoriteId)
      .then(() => this.getFavoriteProduct())
      .catch((err) => console.error('cannot remove favorite', err));
  }

  render() {
    const { products } = this.state;
    const buildFavorites = products.map((product, index) => (
      <FavoriteCard key={index} product={product} removeFavorite={this.removeFavorite} Uid={authData.getUid()}/>
    ));
    return (
    <div class="jumbotron jumbotron-fluid">
       <div class="container">
        <h1 class="display-4">Welcome To ChemiClean!</h1>
        <p class="lead">A Community of People Who Utilize Clean Products in Their Homes</p>
        <div className="ProductContainer d-flex flex-wrap row-3 justify-content-around">
          {buildFavorites}
        </div>
      </div>
    </div>
    );
  }
}
export default Home;
