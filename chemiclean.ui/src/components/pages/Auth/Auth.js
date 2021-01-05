import './Auth.scss';

import React from 'react';
// import { Link } from 'react-router-dom';

import authData from '../../../helpers/data/AuthData';

class Auth extends React.Component {
  // state = {
  //     user: {
  //       firebaseUid: '',
  //     },
  //   };

      loginClickEvent = (e) => {
        e.preventDefault();
        authData
          .loginUser()
          .then(() => {
            this.props.history.push('/home');
          })
          .catch((error) => {
            console.error('there was a problem logging in:', error);
          });
      };

      render() {
        return (
        <div>
          <div class="jumbotron jumbotron-fluid">
            <div class="container">
            <h1 class="display-4">Welcome To ChemiClean!</h1>
            <p class="lead">A Community of People Who Utilize Clean Products in Their Homes</p>
            </div>
          </div>
            <button onClick={this.loginClickEvent} type="button" className="btn btn-outline-dark">Google Login</button>
        </div>
        );
      }
}

export default Auth;
