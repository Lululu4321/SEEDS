
import './App.css';
import React from 'react'
import Search from './search/index.jsx'
import Add from './add/index'
import His from './sreachHistory/index'
import Header from './components/header/header'
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import 'element-theme-default';

class App extends React.Component {
  render() {
    return (
      <div>
        <Router >
          <Header />
          <Switch>
            <Route path="/p/home" component={Search} />
            <Route path="/p/add" component={Add} />
            <Route path="/p/his" component={His} />
            <Redirect to="/p/home" />
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App;
