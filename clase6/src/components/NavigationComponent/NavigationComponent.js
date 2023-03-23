import React from 'react';
import PropTypes from 'prop-types';
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';

const NavigationComponent = () => { 

  const {user} = useSelector((state)=> state.AuthReducer)

 return(
  <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand>
        Mis posts
      </Navbar.Brand>
      <Nav>
        <Link className="nav-link" to='/'>Home</Link>
        <Link className="nav-link" to='/posts'>Posts</Link>
        <Link className="nav-link" to='/about'>About</Link>
        {user && user.id? "" : <Link className="nav-link" to='/login'>Login</Link>}
        {user && user.id? <Link className="nav-link" to='/profile'>Profile</Link> : ""}
      </Nav>
    </Container>
  </Navbar>
 )
};

NavigationComponent.propTypes = {};

NavigationComponent.defaultProps = {};

export default NavigationComponent;
