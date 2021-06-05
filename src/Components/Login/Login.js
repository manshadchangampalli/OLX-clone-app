import {FirebaseContext} from '../../Firebase/context/FirebaseContext'
import React, { useContext, useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useHistory } from "react-router";
import Logo from "../../olx-logo.png";
import "./Login.css";


function Login() {
  const [show, setShow] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error,setError] =useState("")
  const History = useHistory(); 
  const {firebase} = useContext(FirebaseContext)
  const handleLogin = (e) => {
    e.preventDefault();
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        History.push('/')
      }).catch((err)=>{
        setError(err.message)
      })
  };
  const showorhidepassword = () => {
    setTimeout(() => {
      setShow(true);
    }, 2000);
    setShow(!show);
  };

  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <p style={{color:"red",maxWidth:"200px"}} >{error}</p>
        <form onSubmit={handleLogin}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            required
            id="fname"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className=" input"
            type={show ? "password" : "text"}
            id="lname"
            required  
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            defaultValue="Doe"
          />
          <div onClick={showorhidepassword} className="showorhide">
            {show ? <FiEyeOff /> : <FiEye />}
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
