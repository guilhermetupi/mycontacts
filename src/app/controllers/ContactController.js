const ContactsRepository = require('../repositories/ContactsRepository');

class ContactController {
  // Listar tudo
  async index(req, res) {
    const { orderBy } = req.query;

    const contacts = await ContactsRepository.findAll(orderBy);

    res.json(contacts);
  }

  // Item especifico
  async show(req, res) {
    const contact = await ContactsRepository.findById(req.params.id);

    res.json(contact);
  }

  // Adicionar
  async store(req, res) {
    const {
      name, phone, email, category_id,
    } = req.body;

    if (!name) {
      return res.status(400).json({ error: 'Name is required' });
    }

    const contactExists = await ContactsRepository.findByEmail(email);

    if (contactExists) {
      return res.status(400).json({ error: 'This e-mail is already in use' });
    }

    const contact = await ContactsRepository.create({
      name, phone, email, category_id,
    });

    res.json(contact);
  }

  // Atualizar
  async update(req, res) {
    const { id } = req.params;
    const {
      name, phone, email, category_id,
    } = req.body;

    if (!name) {
      return res.status(400).json({ error: 'Name is required' });
    }

    const contactExists = await ContactsRepository.findById(id);

    if (!contactExists) {
      return res.status(400).json({ error: 'User not found' });
    }

    const contactEmailExists = await ContactsRepository.findByEmail(email);

    if (contactEmailExists && id !== contactExists.id) {
      return res.status(400).json({ error: 'This e-mail is already in use' });
    }

    const contact = await ContactsRepository.update(id, {
      name, phone, email, category_id,
    });

    res.json(contact);
  }

  // Deletar
  async delete(req, res) {
    const { id } = req.params;

    await ContactsRepository.delete(id);

    return res.sendStatus(204);
  }
}

module.exports = new ContactController();
