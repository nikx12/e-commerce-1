import React ,{Component} from 'react';
import { Route, Redirect } from 'react-router-dom';
import Login from './Login';

const PrivateRoute = ({ component: Component, currentUser, path, ...rest }) =>
  <Route
      // exact
      // {...rest}
      path={path}
      render={props =>
        currentUser
          ? 
          <Component currentUser={currentUser} {...props}  {...rest}/> 
          : 
          <Redirect
            to={{
              pathname: '/Login',
              state: { from: props.location }
            }}
          /> 
      }
  />;
 

    

// class PrivateRoute extends React.Component {
//   constructor(props) {
//     super(props)
//     console.log("$$$$$$$$$$$$$$$$$", props);
//     // this.state = {

//     // }
//   }
//   render() {
//     console.log("()()()()()())")
//     let Component =  this.props.component;
//     console.log("fvdshavfhdsaghjx35278975829", Component)

//     if(this.props.path === "/Login") {
//       console.log("Inside render", this.props.path);
//       console.log("Inside render", this.props.component );

//       return 
//           <Route
//             // exact
//             // {...rest}
//             path={this.props.path}
//             render={props =>
//               this.props.currentUser
//                 ? 
//                 <Redirect
//                   to={{
//                     pathname: '/Profile',
//                     state: { from: props.location }
//                   }}
//                 /> 
//                 : <Component currentUser={this.props.currentUser} {...props}  {...this.props}/> 
//             }
//           />;
        
//     } else {
//       return 
//           <Route
//             // exact
//             // {...rest}
//             path={this.props.path}
//             render={props =>
//               this.props.currentUser
//                 ? <Component currentUser={this.props.currentUser} {...props}  {...this.props}/> 
//                 : 
//                   <Redirect
//                     to={{
//                       pathname: '/Login',
//                       state: { from: props.location }
//                     }}
//                   />
//             }
//           />;

//     }                                                                          
//   }
// }

export default PrivateRoute;