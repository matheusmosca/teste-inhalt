import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Home } from './pages/home';
import { SignUpPage } from './pages/signupPage';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Home }/>
        <Route exact path="/signup" component={ SignUpPage }/>
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;