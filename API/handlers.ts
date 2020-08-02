import { usuarioHandler, autenticacaoHandler } from './src/api/'

export const handlers = [
  {
    handler: autenticacaoHandler,
    routes: [
      {
        route: '/authenticate',
        method: 'post',
        middlewareValidate: false,
      },
      {
        route: '/forgotPassword',
        method: 'post',
        middlewareValidate: false,
      },
      {
        route: '/forgotPassword/newPassword',
        method: 'post',
        middlewareValidate: false,
      },
    ],
  },
  {
    handler: usuarioHandler,
    routes: [
      {
        route: '/user',
        method: 'get',
        middlewareValidate: true,
      },
      {
        route: '/user/:id_usuario',
        method: 'get',
        middlewareValidate: true,
      },
      {
        route: '/user/register',
        method: 'post',
        middlewareValidate: false,
      },
    ],
  },
]
