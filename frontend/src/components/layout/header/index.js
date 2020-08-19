import React from 'react';
import { Link } from 'react-router-dom';

import '../../../assets/styles/global.scss';
import './header.scss';

export function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <Link to="/">
          Logo
        </Link>
      </div>
    </header>  
  )
}