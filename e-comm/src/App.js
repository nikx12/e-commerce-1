import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router-dom'
import $ from 'jquery';
class App extends Component {
  // state={
  //   toggled: false
  // };
  handleClick = () =>{
    // let isToggled = this.state.toggled;
    // this.setState({
    //   toggled: !isToggled
    // });
    $(document).ready(function () {
      $('#sidebarCollapse').on('click', function () {
          $('#sidebar').toggleClass('active');
          $(this).toggleClass('active');
      });
  });
  }
  render() {
    return (
      <div className="wrapper">

      <nav id="sidebar">
         
          <div className="sidebar-header">
              <h3>E-Comm</h3></div>      
          <ul className="list-unstyled components">
              <li className="active"><Link to='/'>Home</Link></li>
              <li><Link to='/SignUp'>Sign Up</Link></li>
              <li><a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false">Pages</a>
                  <ul className="collapse list-unstyled" id="homeSubmenu">
                      <li><a href="">Page</a></li>
                      <li><a href="">Page</a></li>
                      <li><a href="">Page</a></li>
                  </ul></li>
              <li><Link to='/Login'>Sign In</Link></li>
              
          </ul>
      </nav>

      <div id="content">
          <button type="button" id="sidebarCollapse" className="navbar-btn" onClick={this.handleClick}>
              <span></span>
              <span></span>
              <span></span>
          </button>
      </div>
</div>
    );
  }
  
}

export default App;
