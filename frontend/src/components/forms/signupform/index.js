import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { api } from '../../../services/api';

import '../../../assets/styles/global.scss';
import './signUpForm.scss';

import { MainButton } from "../../layout/mainButton";
import { MainInput } from "../../layout/mainInput";

export function SignUpForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  async function handleSignUpForm(e) {
    e.preventDefault();
    if (password !== repeatPassword) {
      alert("As senhas não coincidem. Tente novamente.")
      return;
    }
    try {
      const response = await api.post('/Users', {
        username,
        password
      });

      alert("Sua conta foi criada com sucesso")
      return response
    } catch(error) {
      console.log(error)
      return error.response;
    }
  }

  return (
    <div className="signup-form-container">
      <form onSubmit={ (e) => handleSignUpForm(e) } action="" className="signup-form-content">
        <h4>Criar conta</h4>
        <MainInput required={ true } saveInputValue={ setUsername } inputType="text" labelName="Username"/>
        <MainInput required={ true } saveInputValue={ setPassword } inputType="password" labelName="Senha"/>
        <MainInput required={ true } saveInputValue={ setRepeatPassword } inputType="password" labelName="Repita a senha"/>
        <div className="center-text">
          <div className="redirect-text">
            Já tem um cadastro? <Link to="/signin"><span>Logar</span></Link>
          </div>
        </div>
        <Link to="/signin">
          <MainButton buttonText="Criar conta"/>
        </Link>
      </form>
    </div>
  )
}