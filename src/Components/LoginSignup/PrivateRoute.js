import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { UserContext } from '../../../App';
import jwt_decode from "jwt-decode";
import { useUserContext } from './context/userContext';

const PrivetRoute = ({ children, ...rest }) => {
    // const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    const {signInUser, registerUser,} = useUserContext();
    
    const isLoggedIn = () => {
      const token = sessionStorage.getItem('token');
      if(!token){
        return false;
      }
      const decodedToken = jwt_decode(token);
      const currentTime = new Date().getTime() / 1000;
      return decodedToken.exp > currentTime;
    }

    return (
        <Route
            {...rest}
            render={({ location }) =>
            registerUser.email | signInUser.email || isLoggedIn() ? (
                children
                ) : (
                <Redirect
                    to={{
                    pathname: "/login",
                    state: { from: location }
                    }}
                />
                )
            }
        />
    );
};

export default PrivetRoute;