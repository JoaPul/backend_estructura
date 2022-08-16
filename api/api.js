import express from "express";
import bookRoutes from './routes/bookRoutes.js';

const api = express();

// TODO: configurar middlewares

api.get('/status', (req, res) => {
  return res.json({
    msg: 'API en linea y funcionando',
  });
});

// TODO: acá se registran las rutas
api.use(bookRoutes);
export default api;