import React, { createContext, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import swal from 'sweetalert';

import { api } from '../services/api';
import { useLocalStorage } from '../hooks/useLocalStorage';

const authContext = createContext();

export function AuthProvider({ children }) {
  const [userData, setUserData] = useLocalStorage("userData", {});
  const [userToken, setUserToken] = useLocalStorage("token", "");
  let history = useHistory();

  async function handleSignIn(e, username, password) { 
    e.preventDefault();
    try {
      const response = await api.post('/Login', {
        username,
        password
      });
      const { token, user } = await response.data;

      setUserData({ ...user });
      setUserToken(token);
      history.push('/')
      return response;

    } catch(error) {
      console.log(error);
      swal("Erro", "Credenciais incorretas, tente novamente", "error");
      return error.response;
    }
  }

  function handleSignOut() {
    localStorage.setItem('token', 'null');
    localStorage.setItem('userData', 'null');
    setUserData('');
    setUserToken('');
    history.push('/');
  }

  const authorizationBearer = () => `Bearer ${userToken}`;

  return (
    <authContext.Provider value={{ handleSignIn, userData, userToken, handleSignOut, authorizationBearer }}>
      { children }
    </authContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(authContext);
  return context;
}