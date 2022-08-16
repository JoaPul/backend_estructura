import mongoose from "mongoose";

const db = mongoose.connection;

db.on('connecting', () => {
  console.log("Intentando concectar a la base de datos");
});
db.on('connected', () => {
  console.log('Se ha conectado a la base de datos');
});
db.on('error', () => {
  console.log('Se encontro un error', error);
});

export default () => {
  mongoose.connect('mongodb://localhost/library');
};