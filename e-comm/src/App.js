import React, { Component } from 'react';
import './App.css';
import { Link, Redirect } from 'react-router-dom';  
import Login from './Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';

import Navigation from './Navigation';
import SignUp from './SignUp';
// import Profile from './Profile';

// import file from './file.json'

class App extends Component {
  constructor(){
    super();
    this.state={
      clicked: false,
      signup: false,
      checkedValue:false,
      myData: [],
      fields:{},
      errors:{},
      nextPage:false
    }
  }
  componentWillMount(){
    var result=[]
    fetch('https://demo1443058.mockable.io/codeproject_tutorial/api/contacts')
    .then((Response) => Response.json())
    .then((findresponse) =>{
        result= findresponse.contacts
    //console.log("in will mount ", result)    
    this.setState({
      myData: result
     });
  //   console.log(" mount " ,this.state.myData)
    })    
   // async await usage
   // console.log(" mounted " ,this.state.myData)
   
  }
  
  handleLogin=(usr,pw)=>{
  
    this.state.myData.forEach((user) => {
      if(user.name === usr){
        if(user.password=== pw){
          this.setState({
            nextPage: true
          });
          console.log("Sucess");
          return true
        }
        else{
          console.log("Error");
          return false
        }
      }
      else{
        console.log("Invalid data")
        return false
      }

    })
    // console.log("user: ", user);
    // console.log("pwd: ", pwd);

    // console.log(usr+"  "+pw);
  }
  handleClick=(e)=>{
    this.setState({
      clicked:!this.state.clicked
    });
    
  }
   handleChange(e) {
      let fields = this.state.fields;
      fields[e.target.name] = e.target.value;
      this.setState({
        checkedValue: this.state.checkedVal,
        fields
      });

    }
  handleSignUp=(e)=>{
    this.setState({
      signup:!this.state.signup
    });
  }
  // myFunction =()=>{
  //   var x = document.getElementById("myTopnav");
  //   if (x.className === "topnav") {
  //       x.className += " responsive";
  //   } else {
  //       x.className = "topnav";
  //   }

  // }
  render() {
    if (this.state.nextPage) {
      return (
          <Redirect to={{
            pathname: '/Profile',
            state: this.props.location.state && this.props.location.state.myData 
        }} push  />
         
      );
  }
    return (
     
      <div className="App">
          {/* <nav className="topnav" id="myTopnav">
          <Link className="active" to='/'>WEB App</Link>
          <a onClick={this.handleClick}>Login</a>
          <a className="icon" onClick={this.myFunction}>
            <i className="fa fa-bars"></i>
          </a>
        </nav> */}
        <Login  handleClick={this.handleClick} handleLogin={this.handleLogin} {...this.state}/>
        <SignUp handleClick={this.handleClick} handleSignUp={this.handleSignUp}  {...this.state}/> 
        <div>
            <Navigation handleClick={this.handleClick} handleLogin={this.handleLogin} handleSignUp={this.handleSignUp}  {...this.state} />
            
        </div>  
      </div>
    );
  }
}

export default App;
