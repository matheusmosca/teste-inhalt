import React from 'react';

import '../../../assets/styles/global.scss';
import './dashboardBanner.scss';
import { useAuth } from '../../../contexts/Auth';

import { Header } from "../header";
import { DashboardNavbar } from "../dashboardNavbar";

export function DashboardBanner( ) {
  const { userData: { username } } = useAuth();
  return (
    <div className="banner-container">
      <Header />
      <div className="center-text">
        <div className="text-container">
          <h2 className="headline">{ `Olá, ${username}` }</h2>
          <div className="subtitle">Controle os seus produtos e as suas vendas, e ainda <br/> receba estatísticas sobre o seu negócio</div>
        </div>
      </div>
      <DashboardNavbar />
    </div>
  )
}