import React from 'react';
// import ReactDOM from 'react-dom';
import { Route, Switch } from 'react-router-dom';
import Login from './Login';
// import App from './App';
import Food from './Food';
// import Home from './Home';
import Profile from './Profile';
import ImageSlider from './ImageSlider';
import About from './About';
import Clothing from './Clothing';
import Footwear from './Footwear';
// import { Link, Redirect } from 'react-router-dom';  

class Routes extends React.Component{
   render(){
     if  (!this.props.isLoginSuccess) {
       return (<Route path="*" component= { ImageSlider }></Route>)
     }

       return(
       <Switch>
          <Route path = "/Login" component = {Login} />  
          <Route exact path = "/" component = { Profile } />   
          {/* use render function for redirecting to authenticated */}
          <Route path = "/Profile" component = {Profile} /> 
          {/* <Route path = "/ImageSlider" component = {ImageSlider} />  */}
          <Route path = "/Food" component = {Food} />   
          <Route path = "/Clothing" component = {Clothing} />   
          <Route path = "/Footwear" component = {Footwear} />   
          <Route path = "/About" component = {About} />   
        </Switch>
       )}
}

export default Routes;
