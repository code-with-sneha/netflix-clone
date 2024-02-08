import React, { useState } from 'react';
import './SignInScreen.css';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import {auth} from '../../firebase';

const SignInScreen = () => {
  const [isShown, setIsShown] = useState(false);
  const [mark, setMark] = useState(false);
  // Handling the form data
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleClick(){
    setIsShown(!isShown);
  }

  function  markUser(){
    setMark(!mark);
  }

  const register = (e)=>{
    e.preventDefault();
    createUserWithEmailAndPassword(auth,email,password)
    .then((authUser)=>{
      console.log(authUser);
    })
    .catch((err)=>{
      alert(err.message);
    });
  }

  const signIn = (e)=> {
    e.preventDefault();
    signInWithEmailAndPassword(auth,email,password)
    .then((authUser)=>{
      console.log(authUser);
    })
    .catch((err)=>{
      alert(err.message);
    });
  }

  return (
    <div className='signInScreen'>
      <form>
        <h1>Sign In</h1>
        <input value={email} type='email' placeholder='Email or phone number' onChange={(e)=>setEmail(e.target.value)} />

        <input value={password} type="password" placeholder='Password' onChange={(e)=>setPassword(e.target.value)} />

        <button type='submit' onClick={signIn}>Sign In</button>
        
        <span className='forgot'>Forgot password?</span>
        <input type="checkbox" className='marked' onClick={markUser} /><label>Remember me</label>
        <h4>
        <span className='signInScreen-gray'>New to Netflix?
        </span>
        <span className='signInScreen-link' onClick={register}>Sign up now.</span>
        </h4>
        <p>This page is protected by Google reCAPTCHA to ensure you're not a bot. </p><h5 onClick={handleClick}>Learn more.</h5>

        {isShown && <p>The information collected by Google reCAPTCHA is subject to the Google Privacy Policy and Terms of Service, and is used for providing, maintaining, and improving the reCAPTCHA service and for general security purposes (it is not used for personalised advertising by Google).</p> }
      </form>
    </div>
  )
}

export default SignInScreen