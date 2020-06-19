import AutenticateController from "../../controller/autenticacao/AuthenticateController";

const autenticacaoHandler = (event: any) => {
  var autenticate: any = new AutenticateController();
  let route = event.req.route.path;
  switch (route) {
    case "/authenticate":
      autenticate.get(event);
      autenticate = undefined;
      return;
    case "/forgotPassword/newPassword":
      autenticate.update(event);
      autenticate = undefined;
      return;
    case "/forgotPassword":
      autenticate.insert(event);
      autenticate = undefined;
      return;
    default:
      return;
  }
};

export default autenticacaoHandler;
