import firebase from 'firebase';
import axios from 'axios';
import { baseUrl } from './constants.json';

// interceptors work by changing the outbound request before the xhr is sent
// or by changing the response before it's returned to our .then() method.
axios.interceptors.request.use((request) => {
  const token = sessionStorage.getItem('token');

  if (token != null) {
    request.headers.Authorization = `Bearer ${token}`;
  }

  return request;
}, (err) => Promise.reject(err));

const loginUser = () => {
  // sub out whatever auth method firebase provides that you want to use.
  const provider = new firebase.auth.GoogleAuthProvider();
  return firebase.auth().signInWithPopup(provider).then((cred) => {
    // get token from firebase
    const userInfo = { Uid: cred.user.uid };

    cred.user.getIdToken()
    // save the token to the session storage
      .then((token) => sessionStorage.setItem('token', token))
      .then(() => axios.post(`${baseUrl}/users`, userInfo));
  });
};

const logoutUser = () => firebase.auth().signOut();

const getUid = () => firebase.auth().currentUser.uid;

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getUid,
  loginUser,
  logoutUser,
};
