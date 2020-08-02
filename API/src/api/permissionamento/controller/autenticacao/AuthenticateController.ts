import Authenticate from '../../../../dao/AuthenticateDAO'
import ControllerBase from '../../../base/controller/ControllerBase'
import User from '../../../../dao/UserDAO'
import md5 from 'md5'
import { gerarToken } from '../../../../api/utils'

class AutheticateController extends ControllerBase {
  constructor() {
    super({
      dao: Authenticate,
      get: 'authenticate',
      update: 'newPassword',
      insert: 'passwordRecovery',
    })
  }

  public async login(event: any) {
    let body = event.req.body
    let user = new User()

    let req = {
      params: {
        email: body.email,
      },
    }

    let users = user.listUser(req)
    await users.then((response) => {
      this.responsePromisse = response
    })

    let userData = this.responsePromisse[0]
    if (!userData) {
      event.res.status(403).send({
        status: 403,
        mensage: 'Erro: Usuário não cadastrado.',
      })
      return
    }

    let senha = md5(body.senha)
    if (userData.senha !== senha) {
      event.res.status(403).send({
        status: 403,
        mensage: 'Erro: senha ou email não conferem.',
      })
      return
    }

    let token = gerarToken(userData.id_usuario)
    event.res.status(200).send({
      status: 200,
      token: token,
    })
  }
}

export default AutheticateController
