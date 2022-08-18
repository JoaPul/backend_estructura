import express from "express";
import * as clientController from '../controllers/clientController.js';
import createClientValidator from '../middlewares/createClientValidator.js';
import updateClientValidator from '../middlewares/updateClientValidator.js';


const router = express.Router();

/**
 * TODO: Aca van todas las rutas de clientes
 */

router.route('/client').get(clientController.getAllClients).post(createClientValidator, clientController.creaeteClient);
router.route('/client/:id',).get(clientController.getClientById).put(updateClientValidator, clientController.updateClientById).delete(clientController.deleteClientById);

export default router;