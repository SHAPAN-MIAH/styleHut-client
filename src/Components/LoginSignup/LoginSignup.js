import React, { useContext, useState } from 'react';
import './LoginSignup.css';
import { useHistory, useLocation } from 'react-router-dom';
import webCartLoginImg from "../../assets/images/add-cart-concept-illustration_114360-1445.jpg"
import googleIcon from "../../assets/images/Google__G__Logo.svg.png"
import {auth} from './Firebase/firebaseConfig';
import Signin from './signin';
import Signup from './signup';
import { useUserContext } from './context/userContext';


const LoginSignup = () => {

  // const [loggedInUser, setLoggedInUser] = useContext();
  const [newUser, setNewUser] = useState(false);
  const [user, setUser] = useState({
    isSignedIn: false,
    name: '',
    email: '',
    password: '',
    error: '',
    success: false,
  });

  // onAuthStateChanged(auth, (currentUser) => {
  //   setUser(currentUser);
  // });

  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  // // google sign in method..................
  //   const handelGoogleSignIn = () => {
  //     const provider = new GoogleAuthProvider();
  //       signInWithPopup(auth, provider)
  //         .then((result) => {
  //           const credential = GoogleAuthProvider.credentialFromResult(result);
  //           const token = credential.accessToken;
  //           const user = result.user;

  //           const {displayName, email} = result.user;
  //           const signedInUser = {name: displayName, email};
  //           setUser(signedInUser);
  //           storeAuthToken();
  //           history.replace(from);
  //         }).catch((error) => {
  //           const errorCode = error.code;
  //           const errorMessage = error.message;
  //           const email = error.email;
  //           const credential = GoogleAuthProvider.credentialFromError(error);

  //           console.log(errorMessage)
  //         });

  //       auth()
  //       .signInWithPopup(provider)
  //       .then((result) => {
  //         console.log(result)
  //           const {displayName, email} = result.user;
  //           const signedInUser = {name: displayName, email};
  //           setUser(signedInUser);
  //           // setLoggedInUser(signedInUser);
  //           storeAuthToken();
  //           history.replace(from);
  //       }).catch((error) => {
  //           console.log(error)
  //       });
  //   }


    // Email & password sign in method..................
    // const handelBlur = (event)=> {
    //   let isFormValid = true;
    //     if(event.target.name === "email"){
    //       isFormValid = /\S+@\S+\.\S+/.test(event.target.value);
          
    //     }
    //     if(event.target.name === "password"){
    //       const isPasswordValid = event.target.value.length > 6;
    //       const passwordHasNumber = /\d{1}/.test(event.target.value);
    //       isFormValid = isPasswordValid && passwordHasNumber;
    //     }
    //     if(event.target.name === "name") {
    //       isFormValid = event.target.value.length > 8;
          
    //     }
    //     if(isFormValid){
    //       let newUserInfo = {...user};
    //       newUserInfo[event.target.name] = event.target.value;
    //       setUser(newUserInfo);
          
    //     }
    // }


      const handelSubmit = (e) => {
        //   console.log("clicked")
        // if(newUser && user.name && user.email && user.password){
        //   auth().createUserWithEmailAndPassword(user.email, user.password)
        //   .then((res) => {
        //     const newUserInfo = {...user};
        //     newUserInfo.error = "";
        //     newUserInfo.success = true;
        //     setUser(newUserInfo);
        //     // setLoggedInUser(newUserInfo);
        //     updateUserName(user.name);
        //     storeAuthToken();
        //     history.replace(from);
        //     console.log(res)
           
        //   })
        //   .catch((error) => {
        //     // const newUserInfo = {...loggedInUser};
        //     // newUserInfo.error = error.message;
        //     // newUserInfo.success = false;
        //     // setLoggedInUser(newUserInfo)
        //     console.log(error)
        //   });
  
        // }
        // if(!newUser && user.email && user.password){
        //   auth().signInWithEmailAndPassword(user.email, user.password)
        //   .then((res) => {
        //     const newUserInfo = {...user};
        //     newUserInfo.error = "";
        //     newUserInfo.success = true;
        //     setUser(newUserInfo)
        //     // setLoggedInUser(newUserInfo)
        //     updateUserName(user.name);
        //     storeAuthToken();
        //     history.replace(from);
        //     console.log('sign in info', res.user);
        //   })
        //   .catch((error) => {
        //     const newUserInfo = {...user};
        //     newUserInfo.error = error.message;
        //     newUserInfo.success = false;
        //     setUser(newUserInfo)
        //   });
        // }
        // e.preventDefault()
    }

    const storeAuthToken = () => {
      auth().currentUser.getIdToken(/* forceRefresh */ true)
        .then(function (idToken) {
          sessionStorage.setItem('token', idToken);
          history.replace(from);
        }).catch(function (error) {
          // Handle error
        });
    }

    // const updateUserName = name => {
    //     var user = auth().currentUser;
    //     user.updateProfile({
    //       displayName: name
    //     }).then(function() {
    //       console.log('user name Update successful.') 
    //     }).catch(function(error) {
    //       console.log(error)
    //     });
    //   }

    const { error } = useUserContext();
  return (
    <>
      <section>
            <div>
              
              {/* <Topbar/>
              <Nav/> */}
            </div>
                <div className="container login-container mt-5">
                  <div className="row form-container">
                    <div className="col-md-6">
                      <img className="img-fluid loginImg" src={webCartLoginImg} alt="" />
                    </div>
                    <div className="col-md-6">
                      <div className="formContainer">
                        {error && <p className="error">{error}</p>}
                        <div className='login-register-content'>
                          <h4> {newUser ? 'Create an account' : 'Login'}</h4>
                          {/* <form onSubmit={handelSubmit}>
                            <div>
                              {newUser && <input className='inputField inputField1'  type="text" onBlur={handelBlur} name="name" placeholder="Your name" autoComplete='off' required/>}
                            </div>
                            <br/>
                            <div className='d-flex'>
                              <input className='inputField' type="email" onBlur={handelBlur} name="email"  placeholder="Your email" autoComplete='off' required/>
                            </div>
                              <br/>
                            <div className='d-flex'>
                              <input className='inputField' type="password" onBlur={handelBlur} name="password" placeholder="Password" autoComplete='off' required/>
                            </div>
                            <br/>
                            <div className='d-flex'>
                              <input id="submitBtn" type="submit" value={newUser ? 'Register' : 'Login'}/>
                                <span className='forgot'>Forgot password?</span>
                            </div>
                          </form> */}
                          {!newUser ? <Signin /> : <Signup />}
                        </div>
                          <div className="loginToggle">
                            <span>{newUser ?'Alrady have an account? ' : 'Need an account?  '}</span>
                            <strong onClick={()=> setNewUser(!newUser)}>{newUser ? 'Login' : 'Create account'}</strong>
                          </div>
                      </div>
                        {/* <div className='d-flex mt-2'>
                          <h5 className="or">Or</h5>
                          <span onClick={handelGoogleSignIn} className="google-btn"> <img className="img-fluid googleIcon" src={googleIcon} alt="" />  Login with Google</span>
                        </div> */}
                    </div>
                  </div>
              </div>
            <div>
              {/* <Footer/> */}
              {/* <CopyRight/> */}
            </div>
      </section>
    </>
  );
};

export default LoginSignup;