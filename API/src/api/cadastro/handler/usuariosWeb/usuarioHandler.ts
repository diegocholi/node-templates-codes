import UserController from '../../controller/usuarioWeb/UserController'

const usuarioHandler = (event: any) => {
  var user: UserController = new UserController()
  let route = event.req.route.path
  switch (route) {
    case '/user':
      user.list(event)
      return
    case '/user/register':
      user.insertUser(event)
      return
    case '/user/:id_usuario':
      user.get(event)
      return
    default:
      return
  }
}

export default usuarioHandler
