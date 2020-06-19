import User from "../../../../dao/UserDAO";
import ControllerBase from "../../../base/controller/ControllerBase";

class UserController extends ControllerBase {
  constructor() {
    super({
      dao: User,
      get: "get",
      insert: "setUser",
    });
  }
}

export default UserController;
