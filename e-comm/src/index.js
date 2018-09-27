import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Route } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css'
import SignUp from './SignUp';
import Login from './Login';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render( <BrowserRouter>
    <div>
       <Route path = "/" component = {App} />
       <Route path = "/App" component = {App} />
       <Route path = "/SignUp" component = {SignUp} />
       <Route path = "/Login" component = {Login} />
     </div>
 </BrowserRouter>, document.getElementById('root'));

registerServiceWorker();
