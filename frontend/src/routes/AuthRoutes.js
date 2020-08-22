import React from 'react';
import { Route } from 'react-router-dom';

import { ProductsPage } from '../pages/productsPage';
import { SalesPage } from '../pages/salesPage';
import { AuthProvider } from '../contexts/Auth';

export function AuthRoutes() {
  return (
    <AuthProvider>
      <Route exact path="/" component={ ProductsPage }/>
      <Route exact path="/sales" component={ SalesPage }/>
    </AuthProvider>
  )
}