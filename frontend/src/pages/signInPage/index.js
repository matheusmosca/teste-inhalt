import React from 'react';
// import { Link } from 'react-router-dom';
import '../../assets/styles/global.scss';

import './signInPage.scss';

import { Header } from '../../components/layout/header';
import { SignInForm } from '../../components/forms/signinform';

export function SignInPage() {
  return (
    <div>
      <Header hideButton={ true }/>
      <div className="form-container">
        <SignInForm />
      </div>
    </div>
  );
}