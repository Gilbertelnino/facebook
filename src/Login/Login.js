import React from 'react';
import './Login.css';
import logo from '../images/Facebook-logo.jpg';
import textlogo from '../images/facebook-text-logo.png';
import {Button} from '@material-ui/core';
import {auth, provider} from '../firebase';
import {useStateValue} from '../contextApi/StateProvider';
import {actionTypes} from '../contextApi/reducer';

function Login() {
  const [state, dispatch] = useStateValue();
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <div className="login__logo">
        <img src={logo} alt="" />
        <img src={textlogo} alt="" />
      </div>
      <Button type="submit" onClick={signIn}>
        Sign In
      </Button>
    </div>
  );
}

export default Login;
