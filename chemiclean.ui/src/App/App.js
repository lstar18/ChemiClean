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

// import Auth from '../components/pages/Auth/Auth';
import MyNavbar from '../components/shared/MyNavBar/MyNavBar';
import Home from '../components/pages/Home/Home';
import AllProducts from '../components/pages/AllProducts/AllProducts';
import SingleProduct from '../components/pages/SingleProduct/SingleProduct';

import fbConnection from '../helpers/data/connection';

fbConnection();
class App extends React.Component {
  state = {
    authed: false,
  }

  componentDidMount() {
    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ authed: true });
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
                <Route path='/Reviews/:reviewId' component={SingleProduct} />
                <Route path='/Product/:productId' component={SingleProduct} />
                <Route path='/AllProducts' component={AllProducts}/>
                <Route path='/home' component={Home}/>
                <Redirect from="*" to="/home"/>
              </Switch>
          </React.Fragment>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
