
import React, { Component, Fragment, lazy, Suspense } from 'react';
import { Switch, BrowserRouter as Router, Route, useHistory } from "react-router-dom";
import Auth from './containers/Auth/Auth';
import Checkout from './containers/Checkout/Checkout';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" render={(props) => <Auth {...props} />} />
        <Route exact path="/checkout" render={(props) => <Checkout {...props} />} />
      </Switch>
    </Router>
  );
}

export default App;
