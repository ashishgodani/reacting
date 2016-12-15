import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import Layout from '../pages/Layout';
import SearchCustomer from '../pages/SearchCustomer';
import CustomerHome from '../pages/CustomerHome';

var routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Layout}>
      <IndexRoute component={SearchCustomer} />
      <Route path='verified' component={CustomerHome} />
    </Route>
  </Router>
);

module.exports = routes;
