import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import useAuth from './../../../Hooks/useAuth';

const AdminRoute = ({ children, ...rest }) => {
    const {user, admin, loading} = useAuth()

    if(loading) {
      return <div class="spinner-border text-info" role="status">
                <span class="visually-hidden"></span>
             </div>
    }

    return (
        <Route
            {...rest}
            render={({ location }) =>
            user.email && admin ? (
                children
                ) : (
                <Redirect
                    to={{
                    pathname: "/",
                    state: { from: location }
                    }}
                />
                )
            }
        />
    );
};

export default AdminRoute;