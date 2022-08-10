import React, { useContext } from 'react';
import { useState } from 'react';
import { useHistory, useLocation, NavLink } from 'react-router-dom';
import LoginBg from '../../../images/flat-dental-care-concept-illustration_23-2148982240.jpg';
import useAuth from './../../../Hooks/useAuth';


const Register = () => {

  const [registerData, setRegisterData] = useState({});
  const {user, loading, registerUser, authError} = useAuth();

  const history = useHistory();
  const location = useLocation();

  // Email & password sign in method..................
  const handelBlur = (event)=> {
    let isFormValid = true;
    if(event.target.name === "email"){
      isFormValid = /\S+@\S+\.\S+/.test(event.target.value);
      
    }
    if(event.target.name === "password" && "confirmPassword"){
      const isPasswordValid = event.target.value.length > 6;
      const passwordHasNumber = /\d{1}/.test(event.target.value);
      const passValid = isPasswordValid && passwordHasNumber;
      isFormValid = passValid;
    }
    if(event.target.name === "name") {
      isFormValid = event.target.value.length > 8;
      
    }
    if(isFormValid){
      let newUserInfo = {...registerData};
      newUserInfo[event.target.name] = event.target.value;
      console.log(newUserInfo)
      setRegisterData(newUserInfo);
    }
  }


  const handelSubmit = (e) => {    
    registerUser(registerData.email, registerData.password, registerData.name, location, history);
    e.preventDefault()
  }


  return (
    <div className='loginAndSignup'>
      <div className="container login-container">
      <h3>Create Your New Account</h3>
            <div className="row">
            
              <div className="col-md-6">
              
                  <div className="formContainer">
                  {user?.email && <span style={{marginBottom: '20px', color: 'green'}}>User created successfully.</span>}
                  {authError && <span style={{marginBottom: '20px', color: 'red'}}>{authError}</span>}
                      <h3> Register</h3>

                      {!loading && 
                      <div>
                        <form onSubmit={handelSubmit}>
                            <input  type="text" onBlur={handelBlur} name="name" placeholder="Name" required/>
                            <br/>
                            <input  type="email" onBlur={handelBlur} name="email"  placeholder="Email" required/>
                            <br/>
                            <input  type="password" onBlur={handelBlur} name="password" placeholder="Password" required/>
                            <br/>
                            <input  type="password" onBlur={handelBlur} name="confirmPassword"  placeholder="Confirm Password" required/>
                            <br/>
                            
                            <input style={{marginBottom: '30px'}} id="submitBtn" type="submit" value='Create an account'/>
                        </form>
                        
                        <div className="loginToggle">
                            <span>Alrady have an account?</span>
                            <NavLink style={{textDecoration: 'none'}} to='/login'>
                              <strong> Login</strong>
                            </NavLink>
                        </div>
                      </div>
                      }

                      {loading && 
                        <div class="spinner-border text-info" role="status">
                          <span class="visually-hidden"></span>
                        </div>
                      }

                  </div>
                    
              </div>
              <div className="col-md-6 text-left d-flex justify-content-center align-items-center">
                  <img className="img-fluid loginImg" src={LoginBg} alt="" />
              
              </div>
            </div>
            <div className="copyRight text-center mt-4">
                    <p>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
            </div>
        </div>
    </div>
  );
};

export default Register;