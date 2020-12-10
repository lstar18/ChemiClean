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
                <button onClick={this.loginClickEvent} type="button" className="btn btn-primary">Google Login</button>
            </div>
        );
      }
}

export default Auth;
