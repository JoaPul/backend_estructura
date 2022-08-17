import express from "express";
import * as clientController from '../controllers/clientController.js'

const router = express.Router();

/**
 * TODO: Aca van todas las rutas de clientes
 */

router.route('/client').get(clientController.getAllClients).post(clientController.creaeteClient);
router.route('/client/:id',).get(clientController.getClientById).put(clientController.updateClientById).delete(clientController.deleteClientById);

export default router;