import React from 'react';
import { Link } from 'react-router-dom';

import '../../../assets/styles/global.scss';
import './signUpForm.scss';

import { MainButton } from "../../layout/mainButton";
import { MainInput } from "../../layout/mainInput";

export function SignUpForm() {
  return (
    <div className="signup-form-container">
      <form action="" className="signup-form-content">
        <h4>Criar conta</h4>
        <MainInput required={ true } inputType="text" labelName="Username"/>
        <MainInput required={ true } inputType="password" labelName="Senha"/>
        <MainInput required={ true } inputType="password" labelName="Repita a senha"/>
        <div className="center-text">
          <div className="redirect-text">
            Já tem um cadastro? <Link to="/signin"><span>Logar</span></Link>
          </div>
        </div>
        {/* <Link to="/"> */}
          <MainButton buttonText="Criar conta"/>
        {/* </Link> */}
      </form>
    </div>
  )
}