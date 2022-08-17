import Client from '../models/Client.js';

const getAllClients = async (req, res) => {
  try {
    const client = await Client.find();

    return res.json({
      msg: 'Clientes encontrados',
      data: client,
    });
  } catch (error) {
    return res.json({
      msg: 'Error al buscar Clientes',
      data: error,
    })
  }
};
//si dejamos cntr + click en book nos dice que llevara para crear el modelo, 
// y si aparece un signo de interrogacion(?) al final de lo que pide es que es una propiedad opcional
const creaeteClient = async (req, res) => {
  try {
    const newClient = await Client.create(req.body);
    return res.json({
      msg: 'Nuevo Cliente creado',
      book: newClient,
    })
  } catch (error) {
    return res.json({
      msg: 'Error al crear cliente'
    })
  }
};
const getClientById = async (req, res) => {
  try {
    const { id } = req.params;
    const client = await Client.findById(id);
    return res.json({
      msg: 'Cliente encontrado',
      data: { client }
    })
  } catch (error) {
    return res.status(500).json({
      msg: 'Error al buscar cliente por id',
      error
    })
  }

};
const updateClientById = async (req, res) => {
  try {
    const { id } = req.params;
    const updateClient = await Client.findOneAndUpdate(id, req.body, {
      new: true,
    });
    return res.json({
      msg: 'Cliente actualizado',
      data: {
        book: updateClient,
      }
    });
  } catch (error) {
    return res.status(500).json({
      msg: 'Error al actualizar Cliente',
      error
    })
  }
};
const deleteClientById = async (req, res) => {
  try {
    const { id } = req.params;
    const client = await Client.findByIdAndDelete(id);
    return res.json({
      msg: 'Este elemento fue eliminado',
      data: { client }
    })
  } catch (error) {
    return res.status(500).json({
      msg: 'Error al eliminar',
      error
    })
  }
};

export { getAllClients, creaeteClient, getClientById, updateClientById, deleteClientById };