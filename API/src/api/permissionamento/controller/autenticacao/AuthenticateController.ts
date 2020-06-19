import Authenticate from "../../../../dao/AuthenticateDAO";
import ControllerBase from "../../../base/controller/ControllerBase";

class AutheticateController extends ControllerBase {
  constructor() {
    super({
      dao: Authenticate,
      get: "authenticate",
      update: "newPassword",
      insert: "passwordRecovery",
    });
  }
}

export default AutheticateController;
