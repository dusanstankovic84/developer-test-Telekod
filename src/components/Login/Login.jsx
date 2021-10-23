import React, { useState } from "react";
import { postData } from "../../service/getData";
import './Login.css'
//import PinInput from "react-pin-input";

// login form (inputs and login button)

export const Login = ({ setToken }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [pin, setPin] = useState('');
  const loginButton = (e) => {                    // helper function for login/onclick button
    e.preventDefault()
    postData(email, password, pin, setToken)
  }

  return (

    <div className="row login-wrapper">
      <div className="col-sm-12 col-lg-6">
        <img src="./login-bg.svg" alt="" className="login-bg" />
      </div>
      <div className="col-sm-12 col-lg-6">
        <div className="login-form mt-5  d-flex justify-content-center align-items-center  ">
          <form className="container row" onSubmit={loginButton}>
            <div className="mb-2 col-12">
              <input
                type="email"
                className="form-control mb-2"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email"
              />
            </div>
            <div className="mb-2 col-12">
              <input
                minLength="8"
                maxLength="32"
                type="password"
                className="form-control"
                value={password}
                placeholder="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="mb-2 col-12">
              <input
                minLength="4"
                maxLength="8"
                type="password"
                className="form-control"
                value={pin}
                placeholder="PIN"
                onChange={(e) => setPin(e.target.value)}
              />
            </div>
            <div className="mt-2 col-12">
              <button type="submit" className="btn btn-primary btn-block">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}