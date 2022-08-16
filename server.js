// para correr poner 
import http from 'http';
import api from './api/api.js';

const port = 3001;
const server = http.createServer(api);

server.on('listening', () => {
  console.log('Servidor escuchando en el puerto', port);
});

server.on('error', () => {
  if (error.code === 'EDORINUSE') {
    console.log(`Elige otro puerto, el puerto ${port} ya esta en uso`);
  }
  console.log('Ha ocurrido el siguiente error:', error.code);
});

server.listen(port);