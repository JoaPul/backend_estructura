import bcrypt from 'bcrypt';
import User from '../models/User.js';

const login = async (req, res) => {
  try {
    const user = await User.findOne({
      email: req.body.email,
    });

    if (!user) {
      return res.status(404).json({
        msg: 'Usuario no encontrado',
      });
    }

    const passCorrect = await bcrypt.compare(req.body.password, user.password);
    if (!passCorrect) {
      return res.status(401).json({
        msg: 'Credenciales inválidas',
      });
    }
    //TODO: crear token y regresarlo
  } catch (error) {
    return res.status(500).json({
      msg: 'Error al hacer login',
    });
  }
};

const register = async (req, res) => {
  try {
    /**
     * middleware de validación 🟩
     * encriptar el password 🟩
     * guardar usuario nuevo con el pass encriptado
     */
    const encryptedPass = await bcrypt.hash(req.body.password, 4);
    req.body.password = encryptedPass;
    const user = await User.create(req.body);
    user.password = undefined;
    return res.json({
      msg: 'Usuario creado',
      data: { user },
    });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({
        msg: 'Ya existe un usuario registrado con ese correo',
      });
    }
    return res.status(500).json({
      msg: 'Ocurrio un error al registrar usuario',
      error,
    });
  }
};

export { login, register };