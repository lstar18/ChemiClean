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

render() {
  const { isOpen } = this.state;
  return (
    <div>
      <Navbar color="light" light expand="md">
      <NavLink className="navbar-brand" tag={RRNavLink} to="/">ChemiClean</NavLink>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink tag={RRNavLink} to='/home'>Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={RRNavLink} to='/AllProducts'>Products</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}
}

export default MyNavbar;
