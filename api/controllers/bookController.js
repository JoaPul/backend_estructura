import Book from '../models/Book.js';

const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();

    return res.json({
      msg: 'Libros encontrados',
      data: books,
    });
  } catch (error) {
    return res.json({
      msg: 'Error al buscar libros',
      data: error,
    })
  }
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
const getBookById = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findById(id);
    return res.json({
      msg: 'Libro encontrado',
      data: { book }
    })
  } catch (error) {
    return res.status(500).json({
      msg: 'Error al buscar libros por id',
      error
    })
  }

};
const updateBooksById = async (req, res) => {
  try {
    const { id } = req.params;
    const updateBook = await Book.findOneAndUpdate(id, req.body, {
      new: true,
    });
    return res.json({
      msg: 'Libro actualizado',
      data: {
        book: updateBook,
      }
    });
  } catch (error) {
    return res.status(500).json({
      msg: 'Error al actualizar libro',
      error
    })
  }
};
const deleteBookById = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findByIdAndDelete(id);
    return res.json({
      msg: 'Este elemento fue eliminado',
      data: { book }
    })
  } catch (error) {
    return res.status(500).json({
      msg: 'Error al eliminar',
      error
    })
  }
};

export { getAllBooks, creaeteBooks, getBookById, updateBooksById, deleteBookById };