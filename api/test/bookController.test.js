import supertest from "supertest";
import api from '../api.js';
import * as database from './database.js';

const agent = supertest.agent(api);

describe('Get All Books', () => {
  test('Registrar usuario', async () => {
    try {
      await database.connect()
    } catch (error) {
      console.log(error)
    }
    expect(status -> 200)
    expect(status -> data -> user)
  })

  test('Login de usuario', () => {
    expect(status -> 200)
    expect(status -> data -> token)
  })

  test('Crear libro', () => {
    expect(status -> 200)
    expect(status -> data -> book)
  })

  test('Obtener todos los libros', () => {
    expect(status -> 200)
    expect(status -> data -> books -> array -> book)
  })
})

/**
 * consas que necesito para poder probar getAllBooks -> GET/books
 * 
 * 1.-
 */
