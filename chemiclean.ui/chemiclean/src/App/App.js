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
import Home from '../components/pages/Home/Home';
import AllProducts from '../components/pages/AllProducts/AllProducts';
import SingleProduct from '../components/pages/SingleProduct/SingleProduct';

import fbConnection from '../helpers/data/connection';

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
                <PrivateRoute path='/milestone/edit/:milestoneId' component={EditMilestone} authed={authed}/>
                <PrivateRoute path='/child/edit/:childId' component={EditChild} authed={authed}/>
                <PrivateRoute path='/milestone/new' component={NewMilestone} authed={authed}/>
                <PrivateRoute path='/child/new' component={NewChild} authed={authed}/>
                <PrivateRoute path='/child/:childId' component={SingleChildView} authed={authed}/>
                <PrivateRoute path='/home' component={Home} authed={authed}/>
                <PublicRoute path='/auth' component={Auth} authed={authed}/>
                <Redirect from="*" to="/home"/>
              </Switch>
          </React.Fragment>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
