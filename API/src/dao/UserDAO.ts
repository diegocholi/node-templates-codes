// import bcryptjs from "bcryptjs";
// import conection from "./ConectionDAO";
import mensage from '../config/mensage.json'
import BaseDAO from './base/BaseDAO'

class User extends BaseDAO {
  constructor() {
    super({
      table: 'users',
    })
  }

  public setUser(event: any) {
    let { req, res } = event
    req
    res
    // let body = req.body;
    try {
      //Buscando email existe no banco
      // conection.query(
      //   "SELECT * FROM users WHERE email = ?",
      //   body["email"],
      //   async (err: any, rows: any) => {
      //     if (!err) {
      //       try {
      //         // Verificando se email existe
      //         if (!rows[0]) {
      //           // Encryptando senha
      //           body["password"] = await bcryptjs.hash(body["password"], 10);
      //           conection.query("INSERT INTO users SET ?", body, (err: any) => {
      //             if (err) throw err;
      //           });
      //           try {
      //             return res.status(200).send(mensage.givenInput);
      //           } catch (err) {
      //             return res.status(400).send(mensage.erroConectionServer);
      //           }
      //         } else {
      //           return res.status(400).send(mensage.emailAlreadyRegistered);
      //         }
      //       } catch (err) {
      //         return res.status(400).send(mensage.erroConectionServer);
      //       }
      //     }
      //   }
      // );
    } catch (e) {
      return res.status(400).send(mensage.erroConnectionDb)
    }
  }
}

export default User
