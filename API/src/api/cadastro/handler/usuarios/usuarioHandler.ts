import UserController from "../../controller/usuario/UserController";

const usuarioHandler = (event: any) => {
  var user: any = new UserController();
  let route = event.req.route.path;
  switch (route) {
    case "/user/register":
      user.insert(event);
      return;
    case "/user/:id":
      user.get(event);
      user = undefined;
      return;
    default:
      return;
  }
};

export default usuarioHandler;
