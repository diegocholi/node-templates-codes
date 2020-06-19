import mensage from "../../../config/mensage.json";
import jwt from "jsonwebtoken";
import authConfig from "../../../config/auth.json";

function middlewares(req: any, res: any, next: any) {
  const authHeader = req.headers["authorization"];

  if (!authHeader) return res.status(401).send({ error: mensage.noToken });

  const parts = authHeader.split(" ");
  if (!(parts.length === 2))
    return res.status(401).send({ error: mensage.tokenError });

  const [scheme, token] = parts;

  if (!/^Bearer$/i.test(scheme)) {
    return res.status(401).send({ error: mensage.tokenMalFormated });
  }

  jwt.verify(token, authConfig.secret, (err: any, decoded: any) => {
    if (err) return res.status(401).send({ error: mensage.tokenInvalid });

    req.userId = decoded.id;

    return next();
  });
}

export default middlewares;
