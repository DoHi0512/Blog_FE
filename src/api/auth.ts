import { AuthType } from "../type/auth";
import RequestApi from "../utils/requestApi";
class Auth {
  signup(data: AuthType) {
    console.log("signup");
    try {
      return RequestApi({ method: "POST", url: "temp", data: data });
    } catch (err) {
      return err;
    }
  }
}

export default new Auth();
