import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import {
  Router,
  Route,
  browserHistory,
  IndexRoute,
  Redirect
} from 'react-router';

import App from './app';
import Login from './pages/login/Login';
import Home from './pages/home/Home';
import Me from './pages/me/Me';
import Users from './pages/users';
import NewUser from './pages/users/newUser';
import EditUser from './pages/users/editUser';
import Accounts from './pages/accounts';
import NewAccount from './pages/accounts/newAccount';
import EditAccount from './pages/accounts/editAccount';
import AccountRegisters from './pages/accounts/registers';
import Reports from './pages/Reports';

import IsLogued from './utils/IsLogued';

import theApp from './redux/reducers';
import logger from './redux/middleware/logger';

//  let store = createStore(theApp);
let store = applyMiddleware(
  thunk,
  logger
)(createStore)(theApp);

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={IsLogued(App)}>
        <IndexRoute component={Home} />
        <Route path="new" component={Home}>
          <Route path="user" components={{ new: NewUser }} />
        </Route>
        <Route path="me" component={Me} />
        <Route path="users" component={Users}>
          <Route path="new" components={{ new: NewUser }} />
          <Route path=":id" components={{ edit: EditUser }} />
        </Route>
        <Route path="accounts" component={Accounts}>
          <Route path="new" components={{ new: NewAccount }} />
          <Route path=":id" components={{ edit: EditAccount }} />
        </Route>
        <Route path="accounts/:id/registers" component={AccountRegisters} />
        <Route path="reports" component={Reports} />
      </Route>
      <Route path="/login" component={Login} />
      <Redirect from="*" to="/" />
    </Router>
  </Provider>,
  document.getElementById('general')
);
