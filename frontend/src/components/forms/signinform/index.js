import React from 'react';
import { Link } from 'react-router-dom';

import '../../../assets/styles/global.scss';
import './signInForm.scss';

import { MainButton } from "../../layout/mainButton";
import { MainInput } from "../../layout/mainInput";

export function SignInForm() {
  return (
    <div className="signup-form-container">
      <form action="" className="signup-form-content">
        <h4>Fazer login</h4>
        <MainInput required={ true } inputType="text" labelName="Username"/>
        <MainInput required={ true } inputType="password" labelName="Senha"/>
        <div className="center-text">
          <div className="redirect-text">
            Ainda não tem uma conta? <Link to="/signup"><span>Criar conta</span></Link>
          </div>
        </div>
        {/* <Link to="/"> */}
          <MainButton buttonText="Fazer login"/>
        {/* </Link> */}
      </form>
    </div>
  )
}