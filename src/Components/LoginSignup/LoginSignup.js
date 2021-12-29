import React, { useContext, useState } from 'react';
import Topbar from '../Shared/Topbar';
import Nav from './../Shared/Nav';
import './LoginSignup.css';
import { useHistory, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';

import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import {auth} from "./firebaseConfig"
import Footer from '../Shared/Footer/Footer';
import CopyRight from '../Shared/CopyRight/CopyRight';



// if(!firebase.apps.length){
//   firebase.initializeApp(firebaseConfig);
// }else{
//   firebase.app();
// }

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

  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  // google sign in method..................
    const handelGoogleSignIn = () => {
      const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
          .then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            const user = result.user;

            const {displayName, email} = result.user;
            const signedInUser = {name: displayName, email};
            setUser(signedInUser);
            storeAuthToken();
            history.replace(from);
          }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.email;
            const credential = GoogleAuthProvider.credentialFromError(error);

            console.log(errorMessage)
          });

        // firebase.auth()
        // .signInWithPopup(provider)
        // .then((result) => {
        //   // console.log(result)
        //     const {displayName, email} = result.user;
        //     const signedInUser = {name: displayName, email};
        //     setUser(signedInUser);
        //     // setLoggedInUser(signedInUser);
        //     storeAuthToken();
        //     history.replace(from);
        // }).catch((error) => {
        //     console.log(error)
        // });
    }


    // // Email & password sign in method..................
    // const handelBlur = (event)=> {
    //     let isFormValid = true;
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
    //   }


    //   const handelSubmit = (e) => {
    //       console.log("clicked")
    //     if(newUser && user.name && user.email && user.password){
    //       firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
    //       .then((res) => {
    //         const newUserInfo = {...user};
    //         newUserInfo.error = "";
    //         newUserInfo.success = true;
    //         setUser(newUserInfo);
    //         setLoggedInUser(newUserInfo);
    //         updateUserName(user.name);
    //         storeAuthToken();
    //         history.replace(from);
    //         console.log(res)
           
    //       })
    //       .catch((error) => {
    //         const newUserInfo = {...loggedInUser};
    //         newUserInfo.error = error.message;
    //         newUserInfo.success = false;
    //         setLoggedInUser(newUserInfo)
    //         console.log(error)
    //       });
  
    //     }
    //     if(!newUser && user.email && user.password){
    //       firebase.auth().signInWithEmailAndPassword(user.email, user.password)
    //       .then((res) => {
    //         const newUserInfo = {...user};
    //         newUserInfo.error = "";
    //         newUserInfo.success = true;
    //         setUser(newUserInfo)
    //         setLoggedInUser(newUserInfo)
    //         updateUserName(user.name);
    //         storeAuthToken();
    //         history.replace(from);
    //         console.log('sign in info', res.user);
    //       })
    //       .catch((error) => {
    //         const newUserInfo = {...user};
    //         newUserInfo.error = error.message;
    //         newUserInfo.success = false;
    //         setUser(newUserInfo)
    //       });
    //     }
    //     e.preventDefault()
    // }

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
    //     var user = firebase.auth().currentUser;
    //     user.updateProfile({
    //       displayName: name
    //     }).then(function() {
    //       console.log('user name Update successful.') 
    //     }).catch(function(error) {
    //       console.log(error)
    //     });
    //   }

  return (
    <>
      <section>
            <div>
              <Topbar/>
              <Nav/>
            </div>
                <div className="container-fluid login-container mt-5 mb-5">
          
                  <div className="row">
                    <div className="">
                        {/* <div className="formContainer">
                            <h5> {newUser ? 'Create an account' : 'Login'}</h5>
                            <form onSubmit={handelSubmit}>
                                {newUser && <input  type="text" onBlur={handelBlur} name="name" placeholder="Your name" required/>}
                                <br/>
                                <input  type="email" onBlur={handelBlur} name="email"  placeholder="Your email" required/>
                                <br/>
                                <input  type="password" onBlur={handelBlur} name="password" placeholder="Password" required/>
                                <br/>
                                <input id="submitBtn" type="submit" value={newUser ? 'Create an account' : 'Login'}/>
                            </form>

                            <div className="loginToggle">
                                <span>{newUser ?'Alrady have an account? ' : 'Need an account?  '}</span>
                                <strong onClick={()=> setNewUser(!newUser)}>{newUser ? 'Login' : 'Create account'}</strong>
                            </div>
                        </div> */}
                          <br/>
                          <h5 className="or">Or</h5>
                          <button onClick={handelGoogleSignIn} className="google-btn"><FontAwesomeIcon className="gIcon" icon={faGoogle} /> Continue With Google</button>
                          
                    </div>
                    {/* <div className="col-md-6">
                        <img className="img-fluid loginImg" src={LoginBg} alt="" />
                    </div> */}
                  </div>
              </div>
              <div>
              <Footer/>
              <CopyRight/>
            </div>
        </section>
    </>
  );
};

export default LoginSignup;