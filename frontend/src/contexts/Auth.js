import React, { createContext, useContext } from 'react';
import { useHistory } from 'react-router-dom';

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
      alert("Credenciais incorretas")
      return error.response;
    }
  }

  // function handleSignOut() {
  //   setUserData('');
  //   setUserToken('');
  // }

  return (
    <authContext.Provider value={{ handleSignIn, userData, userToken }}>
      { children }
    </authContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(authContext);
  return context;
}