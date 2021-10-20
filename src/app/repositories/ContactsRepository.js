const { v4: uuid } = require('uuid');

let contacts = [
  {
    id: uuid(),
    name: 'Pâmela',
    email: 'pamela@mail.com',
    phone: '11999999999',
    category_id: uuid(),
  },
  {
    id: uuid(),
    name: 'Danilo',
    email: 'danilo@mail.com',
    phone: '11999999999',
    category_id: uuid(),
  },
];

class ContactsRepository {
  findAll() {
    return new Promise((res) => res(contacts));
  }

  findById(id) {
    return new Promise((res) => res(contacts.filter((contact) => contact.id === id)));
  }

  findByEmail() {

  }

  delete(id) {
    return new Promise((res) => {
      contacts = contacts.filter((contact) => contact.id !== id);
      res();
    });
  }

  create({
    name, phone, email, category_id,
  }) {
    return new Promise((res) => {
      const newContact = {
        id: uuid(),
        name,
        email,
        phone,
        category_id,
      };

      contacts.push(newContact);

      res(newContact);
    });
  }

  update(id, {
    name, phone, email, category_id,
  }) {
    return new Promise((res) => {
      const updatedContact = {
        id: uuid(),
        name,
        email,
        phone,
        category_id,
      };

      contacts = contacts.map((contact) => (contact.id === id ? updatedContact : contact));

      res(updatedContact);
    });
  }
}

module.exports = new ContactsRepository();
