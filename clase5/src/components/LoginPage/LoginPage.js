import React from 'react';
import PropTypes from 'prop-types';
import { login } from '../../api/auth.api'

const LoginPage = () => {

const [userLoginData, setUserLoginData] = useState({email: '', pass: ''})
const [loginAlert, setLoginALert] = useState('')

function onLogin(e){
  e.preventDefault()
  const user = login(userLoginData.email,userLoginData.pass)

  if(user){
    // login ok
    alert('Login correcto')
    setLoginALert('')
  }
  else{
    // login no ok
    setUserLoginData({email: '', pass: ''})
    setLoginAlert('Login Incorrecto')
  }
}

  return (
  <div className='{styles.LoginPage}'>
    <form>
      <fieldset>
        <legend>Email</legend>
        <input value={userLoginData.email} onChange={(e) => setUserLoginData({ ...userLoginData, email: e.target.value })} placeholder='email'></input>
      </fieldset>
      <fieldset>
        <legend>Password</legend>
        <input value={userLoginData.pass} onChange={(e) => setUserLoginData({ ...userLoginData, pass: e.target.value })} placeholder='email'></input>
      </fieldset>
      <span style={{color: 'red'}}>Login fallido</span>
      <button onClick={onLogin}>Login</button>
    </form>
  </div>)
};

LoginPage.propTypes = {};

LoginPage.defaultProps = {};

export default LoginPage;
