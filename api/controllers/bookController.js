import Book from '../models/Book.js';

const getAllBooks = (req, res) => {
  return res.json({
    msg: 'Esta es la ruta de todos lod libros',
  })
};
//si dejamos cntr + click en book nos dice que llevara para crear el modelo, 
// y si aparece un signo de interrogacion(?) al final de lo que pide es que es una propiedad opcional
const creaeteBooks = async (req, res) => {
  try {
    const newBook = await Book.create(req.body);
    return res.json({
      msg: 'Nuevo libro creado',
      book: newBook,
    })
  } catch (error) {
    return res.json({
      msg: 'Error al crear libro'
    })
  }
};
const getBookById = () => { };
const updateBooksById = () => { };
const deleteBookById = () => { };

export { getAllBooks, creaeteBooks, getBookById, updateBooksById, deleteBookById };