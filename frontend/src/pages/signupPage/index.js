import React from 'react';
// import { Link } from 'react-router-dom';
import '../../assets/styles/global.scss';

import './signUpPage.scss';

import { Header } from '../../components/layout/header';
import { SignUpForm } from '../../components/forms/signupform';

export function SignUpPage() {
  return (
    <div>
      <Header />
      <div className="form-container">
        <SignUpForm />
      </div>
    </div>
  );
}