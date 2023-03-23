import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Form, Container, FormGroup, FormLabel, Button } from 'react-bootstrap';
import { doLogin } from '../../store/auth/action';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const LoginComponent = () => {

  const {user} = useSelector((state)=> state.AuthReducer)
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const dispatch = useDispatch()

  function tryLogin() {
    // es importante mantener las keys
    dispatch(doLogin({ username: username, password: password }))
  }

  if(user && user.id){
    return (
      <Navigate to="/profile" replace></Navigate>
    )
  }

  return (
  <Container>
    <Form>

      <FormGroup>
        <FormLabel>Username</FormLabel>
        <input
        value={username} onChange={(e)=> setUsername(e.target.value)}
        placeholder="email" type="email">
        </input>
      </FormGroup>

      <FormGroup>
        <FormLabel>Password</FormLabel>
        <input
        value={password} onChange={(e)=> setPassword(e.target.value)}
        placeholder="password" type="password">
        </input>
      </FormGroup>

      <Button onCLick={tryLogin}>Login</Button>

    </Form>
  </Container>
  )
};

LoginComponent.propTypes = {};

LoginComponent.defaultProps = {};

export default LoginComponent;
