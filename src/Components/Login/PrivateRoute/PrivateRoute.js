import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import useAuth from './../../../Hooks/useAuth';

const PrivetRoute = ({ children, ...rest }) => {
    const {user, loading} = useAuth()

    if(loading) {
      return <div class="spinner-border text-info" role="status">
                <span class="visually-hidden"></span>
              </div>
    }
    return (
        <Route
            {...rest}
            render={({ location }) =>
            user.email ? (
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