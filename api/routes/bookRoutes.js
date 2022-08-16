import express from "express";
import * as bookController from '../controllers/bookController.js'

const router = express.Router();

/**
 * TODO: Aca van todas las rutas de libros
 */

router.route('/books').get(bookController.getAllBooks).post(bookController.creaeteBooks);
router.route('/books/:id',).get(bookController.getBookById).put(bookController.updateBooksById).delete(bookController.deleteBookById);

export default router;