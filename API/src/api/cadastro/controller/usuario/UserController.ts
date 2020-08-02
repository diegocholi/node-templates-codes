import User from '../../../../dao/UserDAO'
import ControllerBase from '../../../base/controller/ControllerBase'
import md5 from 'md5'
class UserController extends ControllerBase {
  constructor() {
    super({
      dao: User,
      get: 'get',
      insert: 'setUser',
      list: 'listUser',
    })
  }

  public async insertUser(event: any) {
    let req = {
      params: {
        email: event.req.body.email,
      },
    }

    let users = this.dao.listUser(req)
    await users.then((response: any) => {
      this.responsePromisse = response
    })

    let userData = this.responsePromisse[0]

    if (userData) {
      event.res.status(409).send({
        status: 409,
        mensage: 'Usuários já cadastrado',
      })
      return
    }

    let body = event.req.body
    body.senha = md5(body.senha)
    event.req.body = body

    return super.insert(event)
  }
}

export default UserController
