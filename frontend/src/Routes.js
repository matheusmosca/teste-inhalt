import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Home } from './pages/home';
import { SignUpPage } from './pages/signUpPage';
import { SignInPage } from './pages/signInPage';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Home }/>
        <Route exact path="/signup" component={ SignUpPage }/>
        <Route exact path="/signin" component={ SignInPage }/>
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;