import Promise from 'es6-promise';
import file from '../file.json'
const LOGIN_PENDING = 'LOGIN_PENDING';
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGIN_ERROR = 'LOGIN_ERROR';

function setLoginPending(isLoginPending){
    return {
        type: LOGIN_PENDING,
        isLoginPending
    }
}

function setLoginSuccess(isLoginSuccess,userData){
    return {
        type: LOGIN_SUCCESS,
        isLoginSuccess,
        payload: userData
    }
}

function setLoginError(loginError){
    return {
        type: LOGIN_ERROR,
        loginError
    }
}
//action
export function login(username, password){
    return dispatch => {
        dispatch(setLoginPending(true));
        dispatch(setLoginSuccess(false, null));
        dispatch(setLoginError(null));

        sendLoginRequest(username,password)
        .then(userData =>{
            dispatch(setLoginPending(false));
            dispatch(setLoginSuccess(true, userData));

        })
        .catch( err =>{
            dispatch(setLoginPending(false));
            dispatch(setLoginError(err));
        })
    };
}
export default function reducer(state={
    isLoginPending: false,
    isLoginSuccess: false,
    loginError: null
}, action){

    switch(action.type){
        case LOGIN_PENDING:
            return {
                ...state,
                isLoginPending: action.isLoginPending
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                isLoginSuccess: action.LOGIN_SUCCESS,
                user: action.payload
            };
        case LOGIN_ERROR:
            return{
                ...state,
                loginError: action.loginError
            };
        default:
            return state;
    }
}

function sendLoginRequest(username, password){
    //var result={}
    console.log("##################", file)
    // old method of fetching data from json file
    // fetch(file)
    // .then((response) => {
    //     console.log(response)
    //     return response.json()
        
    // })
    // .then((findresponse) =>{
    //     result= findresponse
    //     console.log("loginrequest fxn ", result)
    //  })
    //  .catch((err) =>{
    //         console.log(err)
    //       });

    return new Promise ((resolve, reject) => {
    //    var f= JSON.parse(file);
        console.log(file.contacts)
        file.contacts.forEach((user) => {
         //   var f= file.json()
        //    console.log(f)
            console.log(user.email+"*********************")
                console.log(username+"&&&&&&&&&&&&&&&&&&")
            if(username ===user.email){
                
                if(password === user.password){
                    return resolve(user)
                }
                else{
                    return reject(new Error("Invalid password"))
                }
            }
            else{
                return reject(new Error("Invalid username"))
            }
        })
        .catch((err)=>{
            console.log("Something is wrong")
        });
        // if(username==="" && password===""){
        //     return resolve(true)
        // }
        // else{
        //     return reject(new Error("Invalid email/password"))
        // }
    })
}