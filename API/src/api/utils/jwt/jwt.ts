import jwt from "jsonwebtoken";
import authConfig from "../../../config/auth.json";

export const gerarToken = (userId: number) => {
  return jwt.sign({ id: userId }, authConfig.secret, {
    expiresIn: 86400,
  });
};
