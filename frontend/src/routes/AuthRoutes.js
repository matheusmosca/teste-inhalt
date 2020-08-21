import React from 'react';
import { Route } from 'react-router-dom';

import { DashboardPage } from '../pages/dashboardPage';
import { AuthProvider } from '../contexts/Auth';

export function AuthRoutes() {
  return (
    <AuthProvider>
      <Route exact path="/" component={ DashboardPage }/>
    </AuthProvider>
  )
}