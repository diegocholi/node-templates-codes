// import bcryptjs from "bcryptjs";
// import conection from "./ConectionDAO";
import BaseDAO from './base/BaseDAO'

class User extends BaseDAO {
  constructor() {
    super({
      table: 'usuarios',
    })
  }

  public get(key: any, id: Number) {
    return super.get(key, id)
  }

  public setUser(req: any) {
    return super.insert(req)
  }

  public listUser(req: any) {
    return super.list(req)
  }
}

export default User
