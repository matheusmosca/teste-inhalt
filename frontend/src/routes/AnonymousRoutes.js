import React from 'react';
import { Route } from 'react-router-dom';

import { Home } from '../pages/home';
import { SignUpPage } from '../pages/signUpPage';
import { SignInPage } from '../pages/signInPage';
import { AuthProvider } from '../contexts/Auth';

export function AnonymousRoutes() {
  return (
    <AuthProvider>
      <Route exact path="/" component={ Home }/>
      <Route exact path="/signup" component={ SignUpPage }/>
      <Route exact path="/signin" component={ SignInPage }/>
    </AuthProvider>
  )
}