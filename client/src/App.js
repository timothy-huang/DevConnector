import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Navbar, Landing, Alert } from './components/layout';
import { Register, Login } from './components/auth';
//Redux
import { Provider } from 'react-redux';
import store from './store';

import './App.css';

const App = () => (
  <Provider store={store}>
    <Router>
      <Fragment>
        <Navbar />
        <Route exact path="/" component={Landing} />
        <section className="container">
          <Alert />
          <Switch>
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
          </Switch>
        </section>
      </Fragment>
    </Router>
  </Provider>
);

export default App;
