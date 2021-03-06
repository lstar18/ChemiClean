import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import {
  BrowserRouter,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import './App.scss';

import Auth from '../components/pages/Auth/Auth';
import MyNavbar from '../components/shared/MyNavBar/MyNavBar';
import AllProducts from '../components/pages/AllProducts/AllProducts';
import SingleProduct from '../components/pages/SingleProduct/SingleProduct';
import NewProduct from '../components/pages/AllProducts/NewProduct';
import Home from '../components/pages/Home/Home';
import fbConnection from '../helpers/data/connection';
import AddReview from '../components/pages/Reviews/AddReview';
import Favorites from '../components/pages/Favorites/Favorites';

fbConnection();

const PublicRoute = ({ component: Component, authed, ...rest }) => {
  const routeChecker = (props) => (authed === false
    ? (<Component {...props} />)
    : (<Redirect to={{ pathname: '/home', state: { from: props.location } }} />));
  return <Route {...rest} render={(props) => routeChecker(props)} />;
};

const PrivateRoute = ({ component: Component, authed, ...rest }) => {
  const routeChecker = (props) => (authed === true
    ? (<Component {...props} />)
    : (<Redirect to={{ pathname: '/auth', state: { from: props.location } }} />));
  return <Route {...rest} render={(props) => routeChecker(props)} />;
};
class App extends React.Component {
  state = {
    authed: false,
  }

  componentDidMount() {
    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ authed: true });
        user.getIdToken()
          .then((token) => sessionStorage.setItem('token', token));
      } else {
        this.setState({ authed: false });
      }
    });
  }

  componentWillUnmount() {
    this.removeListener();
  }

  render() {
    const { authed } = this.state;
    return (
      <div className="App">
        <BrowserRouter>
          <React.Fragment>
            <MyNavbar authed={authed}/>
              <Switch>
                <PublicRoute path="/auth" component={Auth} authed={authed} />
                <PrivateRoute path='/Reviews/:reviewId' component={SingleProduct} authed={authed}/>
                <PrivateRoute path='/Product/:productId' component={SingleProduct} authed={authed}/>
                <PrivateRoute path='/AllProducts' component={AllProducts} authed={authed}/>
                <PrivateRoute path='/Products/new' component={NewProduct} authed={authed}/>
                <PrivateRoute path='/Reviews/new' component={AddReview} authed={authed}/>
                <PrivateRoute path='/favorites' component={Favorites} authed={authed}/>
                <PrivateRoute path='/home' component={Home} authed={authed}/>
                <Redirect from="*" to="/home"/>
              </Switch>
          </React.Fragment>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
