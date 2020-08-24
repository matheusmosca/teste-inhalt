import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import '../../../assets/styles/global.scss';
import '../signupform/signUpForm.scss';

import { useAuth } from '../../../contexts/Auth';
import { MainButton } from "../../layout/mainButton";
import { MainInput } from "../../layout/mainInput";

export function SignInForm() {
  const { handleSignIn } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="signup-form-container">
      <form onSubmit={ (e) => handleSignIn(e, username, password) } action="" className="signup-form-content">
        <h4>Fazer login</h4>
        <MainInput required={ true } saveInputValue={ setUsername } inputType="text" labelName="Username"/>
        <MainInput required={ true } saveInputValue={ setPassword } inputType="password" labelName="Senha"/>
        <div className="center-text">
          <div className="redirect-text">
            Ainda não tem uma conta? <Link to="/signup"><span>Criar conta</span></Link>
          </div>
        </div>
        <MainButton buttonText="Fazer login"/>
      </form>
    </div>
  )
}