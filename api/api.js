import express from "express";
import bookRoutes from './routes/bookRoutes.js';
import clientRoutes from './routes/clientRoutes.js';

const api = express();

// TODO: configurar middlewares
api.use(express.json());

api.get('/status', (req, res) => {
  return res.json({
    msg: 'API en linea y funcionando',
  });
});

// TODO: acá se registran las rutas
api.use(bookRoutes);
api.use(clientRoutes);

export default api;