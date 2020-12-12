import React from 'react';
import { Link } from 'react-router-dom';
import './NewProduct.scss';
import ProductData from '../../../helpers/data/ProductData';

class NewProduct extends React.Component {
  state = {
    title: '',
    description: '',
    imageUrl: '',
    rating: '',
  }

  titleChange = (e) => {
    e.preventDefault();
    this.setState({ title: e.target.value });
  }

  descriptionChange = (e) => {
    e.preventDefault();
    this.setState({ description: e.target.value });
  }

  imageUrlChange = (e) => {
    e.preventDefault();
    this.setState({ imageUrl: e.target.value });
  }

  ratingChange = (e) => {
    e.preventDefault();
    this.setState({ rating: e.target.value });
  }

  saveNewProduct = (e) => {
    e.preventDefault();
    const {
      title,
      description,
      imageUrl,
      rating,
    } = this.state;

    const newProduct = {
      name: childName,
      birthday: childBirthday,
      uid: authData.getUid(),
    };

    ProductData.addNewProduct(newProduct)
      .then(() => this.props.history.push('/home'))
      .catch((err) => console.error('cannot save new product', err));
  }

  render() {
    const {
      title,
      description,
      imageUrl,
      rating,
    } = this.state;
    const homeLink = '/home';
    return (
      <div className="NewProduct col-6 offset-3">
      <h2> Add a New Product: </h2>
      <Link className="arrow btn btn-dark mb-2" to={homeLink}> <i class="fas fa-arrow-circle-left"></i> </Link>
     <form>
       <div class="form-group">
         <label forHtml="product-title"> Ttile: </label>
         <input
         type="text"
         class="form-control"
         id="product-title"
         value={title}
         onChange={this.titleChange}/>
       </div>
       <div class="form-group">
         <label forHtml="product-description">Description: </label>
         <input
         type="text"
         class="form-control"
         id="product-description"
         value={description}
         onChange={this.descriptionChange}/>
       </div>
       <div class="form-group">
         <label forHtml="product-imageUrl">Image URL : </label>
         <input
         type="text"
         class="form-control"
         id="product-imageUrl"
         value={imageUrl}
         onChange={this.imageUrlChange}/>
       </div>
       <div class="form-group">
         <label forHtml="product-imageUrl">EWG Rating : </label>
         <input
         type="text"
         class="form-control"
         id="product-rating"
         value={rating}
         onChange={this.ratingChange}/>
       </div>
       <button type="submit" class="add-child-button btn btn-dark btn-lg" onClick={this.saveNewProduct}> Add <i className="fas fa-baby"></i></button>
     </form>
   </div>
    );
  }
}

export default NewProduct;
