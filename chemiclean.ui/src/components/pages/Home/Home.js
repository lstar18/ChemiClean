import './Home.scss';

import React from 'react';
// import { Link } from 'react-router-dom';

class Home extends React.Component {
  render() {
    return (
        <div>
          <div class="jumbotron jumbotron-fluid">
            <div class="container">
            <h1 class="display-4">Welcome To ChemiClean!</h1>
            <p class="lead">A Community of People Who Utilize Clean Products in Their Homes</p>
            </div>
          </div>
        </div>
    );
  }
}

export default Home;
