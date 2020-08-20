import React from 'react';

import { AuthRoutes } from './AuthRoutes';
import { AnonymousRoutes } from './AnonymousRoutes';

//* Se existe um token no localStorage(usuario logado), entao retorna as rotas que exigem autorização
//* Caso contrario, retorna as rotas anonimas
export const ValidateRoutes = () => JSON.parse(localStorage.getItem("token")) ? <AuthRoutes /> : <AnonymousRoutes />;