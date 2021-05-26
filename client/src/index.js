import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'
import Login from './user/login'
import Register from './user/register'

import reportWebVitals from './reportWebVitals';
import { i18n } from 'element-react'
import locale from 'element-react/src/locale/lang/en'

import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';


i18n.use(locale);



ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/p" component={App}></Route>
      <Route path="/login" component={Login}></Route>
      <Route path="/register" component={Register}></Route>
    </Switch>
  </Router>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
