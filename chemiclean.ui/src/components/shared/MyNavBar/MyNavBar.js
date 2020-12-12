import firebase from 'firebase';
import React from 'react';
import { NavLink as RRNavLink } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

class MyNavbar extends React.Component {
state = {
  isOpen: false,
}

toggle = () => {
  this.setState({ isOpen: !this.state.isOpenisOpen });
}

logoutEvent = (e) => {
  e.preventDefault();
  firebase.auth().signOut();
}

render() {
  const { isOpen } = this.state;
  const buildNavBar = () => {
    const { authed } = this.props;
    if (authed) {
      return (
          <Navbar color="light" light expand="md">
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={isOpen} navbar>
              <Nav className="mr-auto" navbar>
                <NavItem>
                  <NavLink tag={RRNavLink} to='/home'>Home</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={RRNavLink} to='/AllProducts'>Products</NavLink>
                </NavItem>
                <NavItem>
               <NavLink tag={RRNavLink} to='/Products/new'>Add Product</NavLink>
             </NavItem>
                <NavItem>
                        <NavLink onClick={this.logoutEvent}>Logout</NavLink>
                    </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
      );
    }
    return <Nav className="ml-auto" navbar></Nav>;
  };
  return (
    <div>
      <Navbar color="light" light expand="md">
      <NavLink className="navbar-brand" tag={RRNavLink} to="/">ChemiClean</NavLink>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={isOpen} navbar>
        {buildNavBar()}
        </Collapse>
      </Navbar>
    </div>
  );
}
}

export default MyNavbar;
