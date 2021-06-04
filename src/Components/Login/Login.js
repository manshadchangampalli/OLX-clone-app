import React, { useState } from 'react';
import { FiEye,FiEyeOff } from "react-icons/fi";
import Logo from '../../olx-logo.png';
import './Login.css';

function Login() {
  const [show,setShow] = useState(true)

  const handleLogin =(e)=>{
    e.preventDefault()
  }
  const showorhidepassword =()=>{
    setShow(!show)
  }

  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleLogin}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            name="email"
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className=" input"
            type={show?"password":"text"}
            id="lname"
            name="password"
            defaultValue="Doe"
          />
          <div onClick={showorhidepassword} className="showorhide">
           {show? <FiEyeOff/>:<FiEye/>}
          </div>
          <br />
          <br />
          <button>Login</button>
        </form>
        <a>Signup</a>
      </div>
    </div>
  );
}

export default Login;
