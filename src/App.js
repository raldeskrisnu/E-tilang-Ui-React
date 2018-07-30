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
import { HashRouter, Route, Switch, Redirect,Router } from 'react-router-dom';
import Layout from './containers/Layout';
import history from './helpers/history';
import { PrivateRoutes } from './private-routes';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Router history={history}>
          <div>
          <Route path="/login" name="Login" component={Login} />
            <PrivateRoutes exact path="/dashboard" component={Layout} />
            </div>
          </Router>
          {/* <Route exact path="/login" name="Login" component={Login} />
          <Route path="/dashboard" name="Dashboard" component={Layout} /> 
          <Route exact path="/forgotpassword" name="Forgot Password" component={ForgotPassword} />
          {
            localStorage.getItem('user') ?  <Redirect to="/dashboard" />  : <Redirect from="/dashboard" to="/login" />
          } */}
          
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
