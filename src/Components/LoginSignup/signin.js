import React, { useRef, useState } from "react";
import { useUserContext } from "../LoginSignup/context/userContext";

const Signin = () => {
  const [user, setUser] = useState({
    isSignedIn: false,
    name: '',
    email: '',
    password: '',
    error: '',
    success: false,
  });

  const handelBlur = (event)=> {
    let isFormValid = true;
      if(event.target.name === "email"){
        isFormValid = /\S+@\S+\.\S+/.test(event.target.value);
        
      }
      if(event.target.name === "password"){
        const isPasswordValid = event.target.value.length > 6;
        const passwordHasNumber = /\d{1}/.test(event.target.value);
        isFormValid = isPasswordValid && passwordHasNumber;
      }
      if(event.target.name === "name") {
        isFormValid = event.target.value.length > 8;
        
      }
      if(isFormValid){
        let newUserInfo = {...user};
        newUserInfo[event.target.name] = event.target.value;
        setUser(newUserInfo);
        
      }
  }

  const emailRef = useRef();
  const psdRef = useRef();
  const { signInUser, forgotPassword, error } = useUserContext();

  const onSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = psdRef.current.value;
    if (email && password) signInUser(email, password);
  };

  const forgotPasswordHandler = () => {
    const email = emailRef.current.value;
    if (email)
      forgotPassword(email).then(() => {
        emailRef.current.value = "";
      });
  };

  return (
    <>
      <div className="form">
        <form onSubmit={onSubmit}>
          <div className="d-flex">
          <input className='inputField' onBlur={handelBlur} placeholder="Email" type="email" ref={emailRef} />
          </div>
          <div className="d-flex">
          <input className='inputField' onBlur={handelBlur} placeholder="Password" type="password" ref={psdRef} />
          </div>
          <button id="submitBtn" type="submit">Login</button>
          <span className='forgot' onClick={forgotPasswordHandler}>Forgot Password?</span>
        </form>
      </div>
    </>
  );
};

export default Signin;
