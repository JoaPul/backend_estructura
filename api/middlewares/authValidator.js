import jwt from "jwt-simple";
import config from "../config/index.js";
import User from "../models/User.js";

const isAuth = async (req, res, next) => {
  try {
    /**
     * Ver si esta pasando el token
     * si no esta mandando el token -> 400
     * si si mando el token -> decodificar
     * Si falla la decodificacion -> 401 (token invalido)
     * Si el token es valido buscar el usuario con ese id
     * Si no existe ese id 401
     * si si existe seguir con el request(next)
     * 
     * Estandar de mandar token, siempre por cabeceras(headers, req.headers) 
     */

    const token = req.headers.authorization;
    if (!token) {
      return res.status(400).json({
        msg: 'Cabecera Authorization faltante',
      });
    }

    const payload = jwt.decode(token, config.jwt.secret);

    const user = await User.findById(payload.userId);

    if (!user) {
      return res.status(401).json({
        msg: "Token invalido",
      });
    };

    next();

  } catch (error) {
    return res.status(401).json({
      msg: "Token invalido",
    })
  }
};

export default isAuth;