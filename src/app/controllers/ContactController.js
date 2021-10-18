const ContactsRepository = require('../repositories/ContactsRepository');

class ContactController {
  // Listar tudo
  async index(req, res) {
    const contacs = await ContactsRepository.findAll();

    res.json(contacs);
  }

  // Item especifico
  async show(req, res) {
    const contact = await ContactsRepository.findById(req.params.id);

    res.json(contact);
  }

  // Adicionar
  store() { }

  // Atualizar
  update() { }

  // Deletar
  delete() { }
}

module.exports = new ContactController();
