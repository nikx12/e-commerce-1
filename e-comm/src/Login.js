import React, { Component } from 'react';
import './Login.css';
import Logo from './Logo.js'
import { connect } from 'react-redux'
import { login } from './Reducers/Reducer';

class Login extends Component {
    constructor(props){
        super(props);
        this.state ={};
    }
    render() { 
        let {username, password}= this.state;
        let {isLoginPending, isLoginSuccess, loginError} = this.props;   
    return (
        <div id="id01" className="modal" style={{display: this.props.clicked? "block": "none"}}>
            <form className="modalContent animate" onSubmit={this.onSubmit}>
                {/* <div className="imgContainer"> */}
                   <Logo/> 
                {/* </div>  */}
             
                <div className="container">
                    <label htmlFor="username"><b>Username</b></label>
                    <input type="text" placeholder="Enter Username" name="username" required onChange={e => this.setState({username:e.target.value})}></input>
            
                    <label htmlFor="password"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="password" required onChange={e => this.setState({password:e.target.value})}></input>
                    
                    <button type="submit">Login</button>
                    <label>
                    <input type="checkbox" name="remember" onChange={this.props.handleChange} value={this.props.checkedValue}/>Remember Me
                    </label>
                </div>
            
                <div className="container" style={{backgroundColor: "#f1f1f1"}}>
                    <button type="button" onClick={this.props.handleClick} className="cancelbtn">Cancel</button>
                    <span className="psw"><a href=""> Forgot password?</a></span>
                </div>
                {isLoginPending && <div>Please wait..</div>}
                {isLoginSuccess && <div>Welcome Back !!</div>}
                {loginError && <div>{loginError.message}</div>}
            </form>
        </div>
    );
    }
    onSubmit =(e) =>{
        e.preventDefault();
        let {username, password}= this.state;
        this.props.login(username, password);
    }
}

const mapStateToProps = (state) =>{
    return {
        isLoginPending: state.isLoginPending,
        isLoginSuccess: state.isLoginSuccess,
        loginError: state.loginError
    };
}

const dispatchToProps = (dispatch) =>{
    return {
        login: (username, password) => dispatch (login(username, password))
    }
}
export default connect(mapStateToProps, dispatchToProps)(Login);