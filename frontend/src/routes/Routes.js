import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import { ValidateRoutes } from './ValidateRoutes';

export function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <ValidateRoutes />
      </Switch>
    </BrowserRouter>
  )
}