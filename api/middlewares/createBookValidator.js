/**
 * 1.- Schema de joi
 * 2.- Validar un try catch
 */
import joi from 'joi';

const createBookSchema = joi.object({
  //campos al validar
  author: joi.string().required(),
  title: joi.string().required(),
  genere: joi.string(),
  category: joi.string(),
  lenguaje: joi.string(),
  editorial: joi.string(),
  editorial: joi.string(),
  printingDate: joi.date(),
  pages: joi.number().integer(),
  isbn: joi.string(),
  coverage: joi.string(),
});

export default async (req, res, next) => {
  try {
    //todo: validacion
    await createBookSchema.validateAsync(req.body);
    next();
  } catch (error) {
    return res.status(400).json({
      msg: 'Error de validación',
      error,
    });
  }
};