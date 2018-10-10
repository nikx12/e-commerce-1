import React ,{Component} from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateLoginRoute = ({ component: Component, currentUser, path, ...rest }) =>
  <Route
    // exact
    // {...rest}
    path={path}
    render={props =>
      currentUser
        ? 
        <Redirect
        to={{
          pathname: '/Profile',
          state: { from: props.location }
        }}
        /> :
        <Component currentUser={currentUser} {...props}  {...rest} visibleModal={true}/>        
      }
  />;

export default PrivateLoginRoute;