import React from 'react';
import { NavLink } from 'react-router-dom';

import '../../../assets/styles/global.scss';
import './dashboardNavbar.scss';
import { RectangularButton } from '../rectangularButton';
// import { useAuth } from '../../../contexts/Auth';

export function DashboardNavbar() {
  return (
    <nav className="dashboard-navbar">
      <div className="navbar-items">
        <NavLink to="/" exact={ true } activeClassName="current-option">
          <RectangularButton buttonText="Produtos"/>
        </NavLink >
        <NavLink to="/sales" exact={ true } activeClassName="current-option">
          <RectangularButton buttonText="Vendas"/>
        </NavLink>
        <NavLink to="/statistics" exact={ true } activeClassName="current-option">
          <RectangularButton buttonText="Estatísticas"/>
        </NavLink>
      </div>
    </nav>  
  )
}