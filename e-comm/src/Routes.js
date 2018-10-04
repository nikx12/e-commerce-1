import React from 'react';
// import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from './Login';
// import App from './App';
import Food from './Food';
// import Home from './Home';
import Profile from './Profile';
import ImageSlider from './ImageSlider';
import About from './About';
// import { Link, Redirect } from 'react-router-dom';  

class Routes extends React.Component{
   render(){
       return(
        <BrowserRouter>
       <div>
          <Route path = "/Login" component = {Login} />  
          <Route exact path = "/Home" component = {ImageSlider} />   
          <Route path = "/Profile" component = {Profile} /> 
          {/* <Route path = "/ImageSlider" component = {ImageSlider} />  */}
          <Route exact path = "/Food" component = {Food} />   
          <Route path = "/About" component = {About} />   
          {/* <Redirect to={{
            pathname: '/Food',
           // state: this.props.location.state && this.props.location.state.myData 
        }} push  /> */}
        </div>
    </BrowserRouter>
       )}
}

export default Routes;
