import React from 'react';
// import { Link } from 'react-router-dom';
import '../../assets/styles/global.scss';

import './dashboardPage.scss';
import { Header } from '../../components/layout/header';
import { useAuth } from '../../contexts/Auth';


export function DashboardPage() {
  const { userData: { username } } = useAuth();
  
  return (
    <section className="dashboard-page-container">
      <div className="banner-container">
        <Header />
        <h2 className="headline">{ `Olá, ${username}` }</h2>

      </div>
    </section>
  );
}