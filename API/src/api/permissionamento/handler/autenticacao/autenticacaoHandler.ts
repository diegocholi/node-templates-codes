import AutenticateController from '../../controller/autenticacao/AuthenticateController'

const autenticacaoHandler = (event: any) => {
  var autenticate: AutenticateController = new AutenticateController()
  let route = event.req.route.path
  switch (route) {
    case '/authenticate':
      autenticate.login(event)
      return
    case '/forgotPassword/newPassword':
      autenticate.update(event)
      return
    case '/forgotPassword':
      autenticate.insert(event)
      return
    default:
      return
  }
}

export default autenticacaoHandler
