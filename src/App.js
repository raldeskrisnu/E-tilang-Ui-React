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
import { BrowserRouter, Route, Switch,Router } from 'react-router-dom';
import Layout from './containers/Layout';
import history from './helpers/history';
import { PrivateRoutes } from './private-routes';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Router history={history}>
          <div>
          
            <PrivateRoutes path="/" component={Layout} />
            <Route path="/login" name="Login" component={Login} />
            <Route path="/login" name="ForgotPassword" component={ForgotPassword} />
            </div>
          </Router>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
