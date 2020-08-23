import React from 'react';
import { NavLink } from 'react-router-dom';

import '../../../assets/styles/global.scss';
import './dashboardNavbar.scss';
import { RectangularButton } from '../rectangularButton';

import { useSearch } from '../../../contexts/Search';

export function DashboardNavbar() {
  const { changeSearchValue } = useSearch();

  return (
    <nav className="dashboard-navbar">
      <div className="navbar-items">
        <NavLink to="/" exact={ true } activeClassName="current-option">
          <RectangularButton buttonText="Produtos"/>
        </NavLink >
        <NavLink to="/sales" exact={ true } activeClassName="current-option">
          <RectangularButton onClickEffect={ () => changeSearchValue('') } buttonText="Vendas"/>
        </NavLink>
        <NavLink to="/statistics" exact={ true } activeClassName="current-option">
          <RectangularButton onClickEffect={ () => changeSearchValue('') } buttonText="Estatísticas"/>
        </NavLink>
      </div>
    </nav>  
  )
}