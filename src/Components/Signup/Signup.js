import React, { useState,useContext } from 'react';
import {useHistory} from 'react-router-dom'
import { FirebaseContext } from '../../Firebase/context/FirebaseContext';
import Logo from '../../olx-logo.png';
import { FiEye,FiEyeOff } from "react-icons/fi";
import './Signup.css';

export default function Signup() {
  const [show,setShow] = useState(true)
  const history = useHistory()
  const [userName,setUserName] = useState('')
  const [phone,setPhone] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')

  const {firebase} = useContext(FirebaseContext)
  
  function handleSubmit(e){
    e.preventDefault()
    firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((result) =>{ result.user.updateProfile({displayName:userName}).then(()=>{
    firebase.firestore().collection('users').add({
      id:result.user.uid,
      username:userName,
      phone:phone
    }).then(()=>{
      history.push("/login")
    })
  })
})
  }


  return (
    <div>
      <div className="signupParentDiv">
        <img wphoneth="200px" height="200px" src={Logo}></img>
        <form >
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            phone="fname"
            value ={userName}
            onChange={(e)=>setUserName(e.target.value)}
            name="name"
            defaultValue="John"
          />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            value ={email}
            onChange={(e)=>setEmail(e.target.value)}
            phone="fname"
            name="email"
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            value ={phone}
            onChange={(e)=>setPhone(e.target.value)}
            phone="lname"
            name="phone"
            defaultValue="Doe"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type={show?"password":"text"}
            phone="lname"
            value ={password}
            onChange={(e)=>setPassword(e.target.value)}
            name="password"
            defaultValue="Doe"
          />
          <div onClick={()=>setShow(!show)} className="showorhide">
           {show? <FiEyeOff/>:<FiEye/>}
          </div>
          <br />
          <br />
          <button   onClick={handleSubmit}> Signup </button>
        </form>
        <a>Login</a>
      </div>
    </div>
  );
}
