// import conection from "./ConectionDAO";
// import mensage from "../config/mensage.json";
// import bcryptjs from "bcryptjs";
// import crypto from "crypto";
// import Mailer from "../modules/Mailer";
// import { gerarToken } from "../api/utils";
import BaseDAO from './base/BaseDAO'

class Authenticate extends BaseDAO {
  constructor() {
    super({
      table: 'users',
    })
  }

  authenticate(event: any) {
    let { req, res } = event
    req
    res
    // Atribuindo o body da requisição no atributo post
    // let body = req.body;
    //Buscando email existe no banco
    // conection.query(
    //   "SELECT * FROM users WHERE email = ?",
    //   body["email"],
    //   async (err: any, rows: any) => {
    //     if (!err) {
    //       try {
    //         let userData = rows[0];
    //         // Verificando se email existe e senhas comferem
    //         if (
    //           rows[0] &&
    //           (await bcryptjs.compare(body["password"], userData["password"]))
    //         ) {
    //           userData["password"] = undefined;
    //           userData["passwordResetToken"] = undefined;
    //           userData["passwordResetExpires"] = undefined;
    //           let token = gerarToken(userData["id"]);
    //           return res.status(200).send({ userData, token });
    //         } else {
    //           return res.status(400).send(mensage.erroUserPassword);
    //         }
    //       } catch (err) {
    //         return res.status(400).send(mensage.erroConectionServer);
    //       }
    //     }
    //   }
    // );
  }

  passwordRecovery(event: any) {
    let { req, res } = event
    req
    res
    // let body = req.body;
    // conection.query(
    //   "SELECT * FROM users WHERE email = ?",
    //   body["email"],
    //   async (err: any, rows: any) => {
    //     return res.status(200).send({
    //       Status: "Rota em construção",
    //     });
    //     if (!err) {
    //       try {
    //         let userData = rows[0];
    //         if (rows[0]) {
    //           userData["password"] = undefined;
    //           userData["passwordResetToken"] = undefined;
    //           userData["passwordResetExpires"] = undefined;

    //           // Token para redefinição de senha
    //           let token = crypto.randomBytes(20).toString("hex");

    //           // Adicionando uma hora de expiração para o token de reset de senha
    //           let now = new Date();
    //           now.setHours(now.getHours() + 1);

    //           // Inserindo informações do token de reset de senha no banco
    //           conection.query(
    //             "UPDATE users SET passwordResetToken = ?, passwordResetExpires = ? WHERE email = ?",
    //             [token, now, body["email"]],
    //             (err: any) => {
    //               if (err) throw err;
    //               // Instanciando classe de envio de email
    //               let mailer = new Mailer();
    //               // Get transporter
    //               let transport = mailer.getTransport();
    //               // Editando os campos do email
    //               mailer.mailOptions.text += token;
    //               mailer.mailOptions.to = body["email"];
    //               // Enviando email
    //               transport.sendMail(mailer.mailOptions, function (
    //                 err: any,
    //                 info: any
    //               ) {
    //                 if (err) {
    //                   console.log(err);
    //                 } else {
    //                   console.log(mensage.emailSent + info.response);
    //                 }
    //               });
    //               return res
    //                 .status(200)
    //                 .send(mensage.emailSent + " " + body["email"]);
    //             }
    //           );
    //         } else {
    //           return res.status(400).send(mensage.erroEmail);
    //         }
    //       } catch (err) {
    //         return res.status(400).send(mensage.erroConectionServer);
    //       }
    //     }
    //   }
    // );
  }

  newPassword(event: any) {
    let { res } = event
    return res.status(200).send({
      Status: 'Rota em construção',
    })
    //conection = Conection.getConn();
    //conection.query('UPTADE ');
  }
}
export default Authenticate
