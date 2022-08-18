import mongoose from 'mongoose';

/**
 * Cosas necesarias para crear un modelo
 * 1.- schema
 * 2.- nombre
 */

const schema = new mongoose.Schema({
  name: String,
  birthDay: Date,
  age: Number,
  address: String,
  references: [{
    name: String,
    phone: String
  },],
  email: String,
  phone: String
});

export default mongoose.model('Client', schema);