/**
 * 1.- Schema de joi
 * 2.- Validar un try catch
 */

import joi from 'joi';

const createClientSchema = joi.object({
  //campos al validar
  name: joi.string(),
  birthDay: joi.date(),
  age: joi.number().integer(),
  address: joi.string(),
  references: joi.array().items(
    joi.object({
      name: joi.string(),
      phone: joi.string()
    })),
  email: joi.string(),
  phone: joi.string()
});

export default async (req, res, next) => {
  try {
    //todo: validacion
    await createClientSchema.validateAsync(req.body);
    next();
  } catch (error) {
    return res.status(400).json({
      msg: 'Error de validación',
      error,
    });
  }
};