import './App.css';
import './scss/style.css'
import '@coreui/icons/css/coreui-icons.min.css';
// Import Flag Icons Set
import 'flag-icon-css/css/flag-icon.min.css';
// Import Font Awesome Icons Set
import 'font-awesome/css/font-awesome.min.css';
// Import Simple Line Icons Set
import 'simple-line-icons/css/simple-line-icons.css';
import React, { Component } from 'react';
import { Login } from './views/login/Login';
import ForgotPassword from './views/forgotpassword/ForgotPassword';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import Layout from './containers/Layout';
// import { renderRoutes } from 'react-router-config';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route exact path="/login" name="Login" component={Login} />
          <Route exact path="/forgotpassword" name="Forgot Password" component={ForgotPassword} />
          {
            // localStorage.getItem('user') ?  <Route path="/" name="Dashboard" component={Layout} />   : <Redirect from="/" to="/login" />
            <Route path="/" name="Dashboard" component={Layout} />
          }
          
          />
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
